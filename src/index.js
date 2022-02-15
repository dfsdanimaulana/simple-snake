// firebase import
import { auth, db } from './firebase.js'

import {
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut
} from 'firebase/auth'

import {
  collection,
  addDoc,
  getDoc,
  onSnapshot,
  serverTimestamp,
  query,
  orderBy,
  where,
  doc,
  updateDoc
} from 'firebase/firestore'

import {
  update as updateSnake,
  draw as drawSnake, 
  getSnakeHead,
  snakeIntersection,
  updatePoint
} from './game/snake.js'

import {
  update as updateFood, 
  draw as drawFood 
} from './game/food.js'

import { outSideGrid } from './game/grid.js'
import { getSnakeSpeed, boostSpeed } from './game/input.js'

const gameBoard = document.getElementById('game-board')
const gamePoint = document.getElementById('point-value')
const loginBox = document.getElementById('login')
const signupBox = document.getElementById('signup')
const authLink = document.getElementById('auth-link')
const settingLink = document.getElementById('setting')
const scoreboardLink = document.getElementById('scoreboard')
const loginLink = document.getElementById('login-link')
const logoutLink = document.getElementById('logout-link')
const signupLink = document.getElementById('signup-link')
const boost = document.getElementById('boost')
const point = document.getElementById('point-value')
const signupClose = document.querySelector('#signup-form .close')
const loginClose = document.querySelector('#login-form .close')
const navButton = document.querySelector('.nav-button')
const navUl = document.querySelector('.nav-ul')
const loginForm = document.querySelector('#login-form')
const signupForm = document.querySelector('#signup-form')
const bestScore = document.querySelector('#best-score')

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
  if(gameOver){
      
      //update score in user firestore
      updateUserScore()
      
      Swal.fire(
        'Game Over!',
        "Don't give up and try again 😊",
        'error'
      ).then(()=>{
        goHome()
      })
      return
  }
  const secondSinceLastRender = (currentTime - lastRenderTime)/1000
  window.requestAnimationFrame(main)
  if(secondSinceLastRender < 1/getSnakeSpeed()) return
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
boost.addEventListener('click', ()=>{
  boostSpeed()
})

// redirect to main route
function goHome(){
  window.location = '/simple-snake'
}


/**
 * end game logic
*/


/**
 * score logic
*/
 
const colRef = collection(db, 'scores')

// realtime Listener firestore database

onSnapshot(colRef, (snapshot) => {
    let score = []
    snapshot.docs.forEach((doc) => {
        score.push({ ...doc.data(), id: doc.id })
    })
    if(currentUser){
      userData = score.filter(s=> {
        return s.uid === currentUser.uid
      })[0]
      bestScore.innerHTML = 'Best score : ' + userData.score
    }
})

function updateUserScore() {
  if(currentUser && userData){
    if(userData.score > updatePoint()) return
      const docRef = doc(db, 'scores', userData.id)
      updateDoc(docRef, {
          score :updatePoint()
      }).then((res) => {
          console.log(res)
      }).catch((err)=>{
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
onAuthStateChanged(auth, (user) => {
  if(user) {
    currentUser = user
    // create user displayname list
    const nameList = document.createElement('li')
    nameList.classList.add('dislay-name')
    nameList.innerHTML = `<h3>${user.displayName}</h3><hr/>`
    navUl.insertBefore(nameList, settingLink)
    
    authLink.style.display = 'none'
    settingLink.style.display = 'block'
    logoutLink.style.display = 'block'
    scoreboardLink.style.display = 'block'
    
  } else {
    
    const navName = document.querySelector('.dislay-name')
    if(navName){
      navName.remove()
    }
    
    authLink.style.display = 'block'
    settingLink.style.display = 'none'
    logoutLink.style.display = 'none'
    scoreboardLink.style.display = 'none'
  }
})

// handle signup user
signupForm.addEventListener('submit', (e) => {
  e.preventDefault()
  
  removeErrorMessage()
  
  const displayName = signupForm.username.value
  const email = signupForm.email.value
  const password = signupForm.password.value
 
  createUserWithEmailAndPassword(auth, email, password)
        .then((cred) => {
            const user = cred.user
            // set displayName
            updateProfile(auth.currentUser, { displayName })
                .then(()=>{
                  signupForm.reset()
                  
                  // create score data
                  addDoc(colRef, {
                    uid: user.uid,
                    username: user.displayName,
                    createdAt: serverTimestamp(),
                    score: 0
                  })
                  .then((res)=>{
                    console.log(res)
                  })
                  .catch((err)=>{
                    console.log(err.message)
                  })
                })
           goHome()
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
      .then((cred) => {
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

// handle logout user
logoutLink.addEventListener('click', ()=> {
      Swal.fire({
        title: 'Are you sure?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.isConfirmed) {
          signOut(auth).
            then(()=> {
              goHome()
            })
            .catch((err)=> {
              console.log(err.message)
            })
        }
      })
  
})

// function to remove previous auth error message
function removeErrorMessage() {
    const errorMessage = document.querySelector('.error')
    if(errorMessage){
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
 
// open nav menu
navButton.addEventListener('click',()=>{
  navUl.classList.add('toggle-nav')
})

// outside click
window.addEventListener('click',(e)=>{
  let clickedElement = e.target
  do {
    if(clickedElement == navButton){
      return
    }
    if(clickedElement == navUl){
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
authLink.addEventListener('click', ()=> {
  openForm('signup')
})

// close signup form
signupClose.addEventListener('click', ()=> {
  closeForm('signup')
})

// show login form from signup form
loginLink.addEventListener('click', ()=> {
  openForm('login')
  
})

// close login form
loginClose.addEventListener('click', ()=> {
  closeForm('login')
})

// show signup form from login form
signupLink.addEventListener('click', ()=> {
  openForm('signup')
})

// function to open form
function openForm(form){
  if(form === 'signup') {
    signupBox.style.display = 'grid'
    loginBox.style.display = 'none'
  } 
  if(form === 'login') {
    console.log('here')
    signupBox.style.display = 'none'
    loginBox.style.display = 'grid'
  }
  
  navUl.classList.remove('toggle-nav')
  removeErrorMessage()
  signupForm.reset()
  loginForm.reset()
}

// function to close form
function closeForm(form){
  if(form === 'signup') {
    signupBox.style.display = 'none'
  } 
  if(form === 'login') {
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