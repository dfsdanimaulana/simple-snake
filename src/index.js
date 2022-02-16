// firebase import
import { auth, db } from './firebase.js'

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    onAuthStateChanged,
    signOut,
} from 'firebase/auth'

import {
    collection,
    addDoc,
    onSnapshot,
    serverTimestamp,
    query,
    orderBy,
    doc,
    updateDoc,
    limit,
} from 'firebase/firestore'

import {
    update as updateSnake,
    draw as drawSnake,
    getSnakeHead,
    snakeIntersection,
    updatePoint,
} from './game/snake.js'

import { update as updateFood, draw as drawFood } from './game/food.js'

import { outSideGrid } from './game/grid.js'
import { getSnakeSpeed, boostSpeed } from './game/input.js'

const gameBoard = document.getElementById('game-board')
const gamePoint = document.getElementById('point-value')
const loginBox = document.getElementById('login')
const signupBox = document.getElementById('signup')
const authLink = document.getElementById('auth-link')
const authLinkSide = document.getElementById('auth-link-side')
const settingLink = document.getElementById('setting')
const settingLinkSide = document.getElementById('setting-side')
const scoreboard = document.getElementById('scoreboard')
const logoutLink = document.getElementById('logout-link')
const logoutLinkSide = document.getElementById('logout-link-side')
const loginLink = document.getElementById('login-link')
const signupLink = document.getElementById('signup-link')
const boost = document.getElementById('boost')
const scoreboardBox = document.querySelector('#scoreboard-box table')
const signupClose = document.querySelector('#signup-form .close')
const loginClose = document.querySelector('#login-form .close')
const navButton = document.querySelector('.nav-button')
const navUl = document.querySelector('.nav-ul')
const sideUl = document.querySelector('.side-ul')
const loginForm = document.querySelector('#login-form')
const signupForm = document.querySelector('#signup-form')
const bestScore = document.querySelector('#best-score')
const sidebar = document.querySelector('sidebar')

/**
 * Game logic
 */

// game loop
let lastRenderTime = 0
let gameOver = false
let currentUser = null
let userData = null

window.requestAnimationFrame(main)

// main Function
function main(currentTime) {
    if (gameOver) {
        // ask user to login/signup if not yet
        if (currentUser) {
            //update score in user firestore
            updateUserScore()

            Swal.fire(
                'Game Over!',
                "Don't give up and try again 😊",
                'error',
            ).then(() => {
                goHome()
            })
        } else {
            Swal.fire({
                title: 'Game over!',
                icon: 'error',
                text: 'Create account to save your game data',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login/signup',
                cancelButtonText: 'No, Thanks',
            }).then((result) => {
                if (result.isConfirmed) {
                    openForm('signup')
                    signupClose.innerHTML = '<a href="/simple-snake">x</a>'
                    loginClose.innerHTML = '<a href="/simple-snake">x</a>'
                } else {
                    goHome()
                }
            })
        }
        return
    }
    const secondSinceLastRender = (currentTime - lastRenderTime) / 1000
    window.requestAnimationFrame(main)
    if (secondSinceLastRender < 1 / getSnakeSpeed()) return
    lastRenderTime = currentTime

    update()
    draw()
}

// update snake status
function update() {
    updateSnake()
    gamePoint.innerHTML = updatePoint()
    updateFood()
    checkDeath()
}

// draw snake to dom
function draw() {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

// cek if snake hit the wall or its own body
function checkDeath() {
    gameOver = outSideGrid(getSnakeHead()) || snakeIntersection()
}

// handle boost
boost.addEventListener('click', () => {
    boostSpeed()
})

// redirect to main route
function goHome() {
    window.location = '/simple-snake'
}

/**
 * end game logic
 */

/**
 * score logic
 */

const colRef = collection(db, 'scores')

const q = query(colRef, orderBy('score', 'desc'), limit(10))
// realtime Listener firestore database

let tableText = ''
onSnapshot(
    q,
    (snapshot) => {
        let score = []
        snapshot.docs.forEach((doc) => {
            score.push({ ...doc.data(), id: doc.id })
        })
        if (currentUser && score.length > 0) {
            userData = score.filter((s) => {
                return s.uid === currentUser.uid
            })[0]
            bestScore.innerHTML = 'Best : ' + userData.score
        }

        let textNode = ''

        if (score.length > 0) {
            score.forEach((s, i) => {
                textNode += `<tr>
          <td class="col">${i + 1}</td>
          <td>${s.username}</td>
          <td class="col-score">${s.score}</td>
        </tr>`
            })
        }

        // scoreboard sidebar
        if (sidebar) {
            scoreboardBox.innerHTML =
                `<tr>
        <th>No</th>
        <th>Name</th>
        <th>Score</th>
      </tr>` + textNode
        }

        // scoreboard nav

        tableText =
            `<tr>
        <th>No</th>
        <th>Name</th>
        <th>Score</th>
      </tr>` + textNode
    },
    (err) => {
        console.log(err.message)
    },
)

function updateUserScore() {
    if (currentUser && userData) {
        const newScore = updatePoint()
        if (userData.score > newScore) return
        const docRef = doc(db, 'scores', userData.id)
        updateDoc(docRef, {
            score: newScore,
        })
            .then(() => {
                console.log('score updated')
            })
            .catch((err) => {
                console.log(err.message)
            })
    }
}

/**
 * end score logic
 */

/**
 * Handle auth user
 */

// cek if user is logged in
onAuthStateChanged(
    auth,
    (user) => {
        if (user) {
            sessionStorage.setItem('currentUser', JSON.stringify(user))
            currentUser = user
            // create user displayname list
            const nameListNav = document.createElement('li')
            nameListNav.classList.add('display-name')
            nameListNav.innerHTML = `<h3>${user.displayName}</h3><hr/>`
            navUl.insertBefore(nameListNav, settingLink)

            const nameListSide = document.createElement('li')
            nameListSide.classList.add('display-name')
            nameListSide.innerHTML = `<h3>${user.displayName}</h3><hr/>`
            sideUl.insertBefore(nameListSide, settingLinkSide)

            authLink.style.display = 'none'
            authLinkSide.style.display = 'none'

            settingLink.style.display = 'block'
            settingLinkSide.style.display = 'block'

            logoutLink.style.display = 'block'
            logoutLinkSide.style.display = 'block'
        } else {
            const navName = document.querySelector('.display-name')
            if (navName) {
                navName.remove()
            }

            authLink.style.display = 'block'
            authLinkSide.style.display = 'block'

            settingLink.style.display = 'none'
            settingLinkSide.style.display = 'none'

            logoutLink.style.display = 'none'
            logoutLinkSide.style.display = 'none'
        }
    },
    (err) => {
        console.log(err.message)
    },
)

// handle signup user
signupForm.addEventListener('submit', (e) => {
    e.preventDefault()

    removeErrorMessage()

    const displayName = signupForm.username.value
    const email = signupForm.email_sign.value
    const password = signupForm.password_sign.value

    createUserWithEmailAndPassword(auth, email, password)
        .then((cred) => {
            const user = cred.user
            // set displayName
            updateProfile(auth.currentUser, { displayName }).then(() => {
                signupForm.reset()

                // create score data
                addDoc(colRef, {
                    uid: user.uid,
                    username: user.displayName,
                    createdAt: serverTimestamp(),
                    score: 0,
                    foodShape: '50%',
                    foodColor: '#ff7c4f',
                    foodIcon: '',
                    snakeShape: '5px',
                    snakeHead: '#0e91ff',
                    snakeBody: '#79e4ff',
                    snakeBorder: '.25vmin solid balck',
                    snakeBoost: '25vmin solid yellow',
                    navColor: '#2d9de6',
                    boardColor: '#eaeaea',
                    sideColor: '#fff',
                    keyColor: '3b3b3b',
                    keyColorBackground: '#fff',
                })
                    .then(() => {
                        goHome()
                    })
                    .catch((err) => {
                        console.log(err.message)
                    })
            })
        })
        .catch((err) => {
            const elementBefore = signupForm.querySelector('#signup-form p')
            const errorText = document.createElement('p')
            errorText.innerHTML = err.message
            errorText.classList.add('error')
            signupForm.insertBefore(errorText, elementBefore)
        })
})

// handle login user
loginForm.addEventListener('submit', (e) => {
    e.preventDefault()

    removeErrorMessage()

    const email = loginForm.email.value
    const password = loginForm.password.value

    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            loginForm.reset()
            goHome()
        })
        .catch((err) => {
            const elementBefore = loginForm.querySelector('#login-form p')
            const errorText = document.createElement('p')
            errorText.innerHTML = err.message
            errorText.classList.add('error')
            loginForm.insertBefore(errorText, elementBefore)
        })
})

function handleLogout() {
    Swal.fire({
        title: 'Are you sure?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
    }).then((result) => {
        if (result.isConfirmed) {
            signOut(auth)
                .then(() => {
                    goHome()
                })
                .catch((err) => {
                    console.log(err.message)
                })
        }
    })
}

// handle logout user
logoutLink.addEventListener('click', () => {
    handleLogout()
})

logoutLinkSide.addEventListener('click', () => {
    handleLogout()
})

// function to remove previous auth error message
function removeErrorMessage() {
    const errorMessage = document.querySelector('.error')
    if (errorMessage) {
        errorMessage.remove()
    }
}

/**
 * end handle auth user
 */

// select skin depends on the level

/**
 * DOM interaction
 */
scoreboard.addEventListener('click', () => {
    Swal.fire({
        title: '<strong>Scoreboard</strong>',
        html: `<table id="popup-table">${tableText}</table>`,
        showCloseButton: true,
    })
})

// open nav menu
navButton.addEventListener('click', () => {
    navUl.classList.add('toggle-nav')
})

// outside click
window.addEventListener('click', (e) => {
    let clickedElement = e.target
    do {
        if (clickedElement == navButton) {
            return
        }
        if (clickedElement == navUl) {
            return
        }
        clickedElement = clickedElement.parentNode
    } while (clickedElement)
    navUl.classList.remove('toggle-nav')
})

/**
 * Handle open/close login and signup form
 */

// show signup form from menu
authLink.addEventListener('click', () => {
    openForm('login')
})

authLinkSide.addEventListener('click', () => {
    openForm('login')
})

// close signup form
signupClose.addEventListener('click', () => {
    closeForm('signup')
})

// show login form from signup form
loginLink.addEventListener('click', () => {
    openForm('login')
})

// close login form
loginClose.addEventListener('click', () => {
    closeForm('login')
})

// show signup form from login form
signupLink.addEventListener('click', () => {
    openForm('signup')
})

// function to open form
function openForm(form) {
    if (form === 'signup') {
        signupBox.style.display = 'grid'
        loginBox.style.display = 'none'
    }
    if (form === 'login') {
        signupBox.style.display = 'none'
        loginBox.style.display = 'grid'
    }

    navUl.classList.remove('toggle-nav')
    removeErrorMessage()
    signupForm.reset()
    loginForm.reset()
}

// function to close form
function closeForm(form) {
    if (form === 'signup') {
        signupBox.style.display = 'none'
    }
    if (form === 'login') {
        loginBox.style.display = 'none'
    }
    removeErrorMessage()
    signupForm.reset()
    loginForm.reset()
}

/**
 * end handle open/close form
 */

/**
 * end DOM interaction
 */

