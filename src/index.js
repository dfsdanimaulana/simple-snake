/* eslint-disable no-undef */
// firebase import
import { auth, db } from './firebase.js'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
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
const loader = document.querySelector('.loader')
const chat = document.querySelector('.chat')
const chatButton = document.querySelector('.chat-box')
const chatClose = document.querySelector('#chat .close')
const chatBox = document.getElementById('chat')
const chatForm = document.querySelector('.chat-input')
const chatContent = document.querySelector('.chat-content')
const settingsBackdrop = document.getElementById('settings-backdrop')
const colorSettingForm = document.getElementById('settings-form')
const closeSetting = document.querySelector('#settings-form .close')
const snakeHeadColor = document.getElementById('snakeHeadColor')
const snakeBodyColor = document.getElementById('snakeBodyColor')
const snakeBorderColor = document.getElementById('snakeBorderColor')
const snakeBoostColor = document.getElementById('snakeBoostColor')
const boardColor = document.getElementById('boardColor')
const boardBorderColor = document.getElementById('boardBorderColor')
const keyColor = document.getElementById('keyColor')
const navColor = document.getElementById('navColor')
const navbar = document.querySelector('nav')
const keys = document.querySelectorAll('.key')
/**
 * Game logic
 */

// game loop
let lastRenderTime = 0
let gameOver = false
let currentUser = null
let userData = null

// main Function
function main(currentTime) {
    if (gameOver) {
        // ask user to login/signup if not yet
        if (currentUser && userData) {
            //update score in user firestore
            const newScore = updatePoint()
            if (userData.score > newScore) {
                Swal.fire(
                    'Game Over!',
                    "Don't give up and try again 😊",
                    'error',
                ).then(() => {
                    goHome()
                })
            } else {
                const docRef = doc(db, 'scores', userData.id)
                updateDoc(docRef, {
                    score: newScore,
                })
                    .then(() => {
                        Swal.fire(
                            'Game Over!',
                            'You have new game record 😊',
                            'success',
                        ).then(() => {
                            goHome()
                        })
                    })
                    .catch((err) => {
                        console.log(err.message)
                    })
            }
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
                    openForm('login')
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
function setColor() {
    // set color
    snakeHeadColor.value = userData.snakeHead
    snakeBodyColor.value = userData.snakeBody
    snakeBorderColor.value = userData.snakeBorder
    snakeBoostColor.value = userData.snakeBoost
    navColor.value = userData.navColor
    boardColor.value = userData.boardColor
    keyColor.value = userData.keyColor
    boardBorderColor.value = userData.sideColor
}

const colRef = collection(db, 'scores')

const q = query(colRef, orderBy('score', 'desc'))
// realtime Listener firestore database

let tableText = ''
onSnapshot(
    q,
    (snapshot) => {
        loader.style.display = 'none'
        let score = []
        snapshot.docs.forEach((doc) => {
            score.push({ ...doc.data(), id: doc.id })
        })
        if (currentUser && score.length > 0) {
            userData = score.filter((s) => {
                return s.uid == currentUser.uid
            })[0]
            bestScore.innerHTML = 'Best : ' + userData.score
            setColor()
        }

        let textNode = ''

        if (score.length > 0) {
            window.requestAnimationFrame(main)
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

        // set color
        if (userData) {
            navbar.style.backgroundColor = userData.navColor
            gameBoard.style.backgroundColor = userData.boardColor
            gameBoard.style.border = `5px solid ${userData.sideColor}`
            keys.forEach((key) => {
                key.style.backgroundColor = userData.keyColor
            })
        }
    },
    (err) => {
        console.log(err.message)
    },
)

export function getUser() {
    return userData
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
            currentUser = user
            // create user display name list
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
                    snakeShape: '8px',
                    snakeHead: '#1a70ff',
                    snakeBody: '#00ccff',
                    snakeBorder: '#000',
                    snakeBoost: '#faf11b',
                    navColor: '#2d9de6',
                    boardColor: '#eaeaea',
                    sideColor: '#000',
                    keyColor: '#3b3b3b',
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

/**
 *  Game Settings
 */

settingLink.addEventListener('click', () => {
    settingsBackdrop.style.display = 'grid'
})

settingLinkSide.addEventListener('click', () => {
    settingsBackdrop.style.display = 'grid'
})

closeSetting.addEventListener('click', () => {
    settingsBackdrop.style.display = 'none'
    setColor()
})

colorSettingForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const btn = document.querySelector('#settings-form button')
    btn.innerHTML = 'updating...'
    const docRef = doc(db, 'scores', userData.id)
    updateDoc(docRef, {
        snakeShape: '8px',
        snakeHead: snakeHeadColor.value,
        snakeBody: snakeBodyColor.value,
        snakeBorder: snakeBorderColor.value,
        snakeBoost: snakeBoostColor.value,
        navColor: navColor.value,
        boardColor: boardColor.value,
        sideColor: boardBorderColor.value,
        keyColor: keyColor.value,
        keyColorBackground: '#fff',
    })
        .then(() => {
            Swal.fire({ icon: 'success', text: 'Update success' }).then(() => {
                btn.innerHTML = 'Save'

                goHome()
            })
        })
        .catch((err) => {
            console.log(err.message)
        })
})

/**
 *  end Game Settings
 */

/**
 *  Chat settings
 */
chatButton.addEventListener('click', () => {
    if (currentUser) {
        chatBox.style.display = 'grid'
        chatForm.msg.focus()
    } else {
        Swal.fire({
            text: 'Please login first',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Login/signup',
            cancelButtonText: 'No, Thanks',
        }).then((result) => {
            if (result.isConfirmed) {
                openForm('login')
            }
        })
    }
})
chatClose.addEventListener('click', () => {
    chatBox.style.display = 'none'
})

// send chat message
const colChatRef = collection(db, 'chats')

chatForm.addEventListener('submit', (e) => {
    e.preventDefault()

    addDoc(colChatRef, {
        msg: chatForm.msg.value,
        uid: currentUser.uid,
        username: currentUser.displayName,
        createdAt: serverTimestamp(),
    })
        .then(() => {
            chatForm.reset()
            chatForm.msg.focus()
        })
        .catch((err) => {
            console.log(err.message)
        })
})

// get all chat document
onSnapshot(query(colChatRef, orderBy('createdAt', 'desc')), (snapshot) => {
    let chats = []
    snapshot.docs.forEach(
        (doc) => {
            chats.push({ ...doc.data(), id: doc.id })
        },
        (err) => {
            console.log(err.message)
        },
    )
    if (chats.length > 0) {
        let textNode = ''
        chats.map((chat) => {
            if (currentUser) {
                if (chat.uid === currentUser.uid) {
                    textNode += `<div class="message m-right" >
                <p>you</p>
                <p>${chat.msg}</p>
                <p>${formatDistanceToNow(chat.createdAt.toDate(), {
                    addSuffix: true,
                })}</p>
              </div>`
                } else {
                    textNode += `<div class="message" >
                <p>${chat.username}</p>
                <p>${chat.msg}</p>
                <p>${formatDistanceToNow(chat.createdAt.toDate(), {
                    addSuffix: true,
                })}</p>
              </div>`
                }
            }
        })
        chatContent.innerHTML = textNode
    }
})
/**
 *  End Chat settings
 */

/**
 * DOM interaction
 */

scoreboard.addEventListener('click', () => {
    Swal.fire({
        title: '<strong>Scoreboard</strong>',
        html: `<div class="table-box">
        <table id="popup-table">${tableText}</table>
        </div>`,
        showCloseButton: true,
    })
})

// open nav menu
navButton.addEventListener('click', () => {
    navUl.classList.add('toggle-nav')
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
        if (clickedElement == chatButton) {
            return
        }
        if (clickedElement == chat) {
            return
        }
        if (clickedElement == colorSettingForm) {
            return
        }
        if (clickedElement == settingLinkSide) {
            return
        }
        clickedElement = clickedElement.parentNode
    } while (clickedElement)
    navUl.classList.remove('toggle-nav')
    chatBox.style.display = 'none'
    settingsBackdrop.style.display = 'none'
    if (userData && currentUser) {
        setColor()
    }
})
