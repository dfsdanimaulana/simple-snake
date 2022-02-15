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

// firebase import
import { auth } from './firebase.js'
import {
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut
} from 'firebase/auth'

// game loop
let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('game-board')
const gamePoint = document.getElementById('point-value')

// handle boost
const boost = document.getElementById('boost')

boost.addEventListener('click', ()=>{
  boostSpeed()
})

function main(currentTime) {
  if(gameOver){
      Swal.fire(
        'Game Over!',
        "Don't give up and try again 😊",
        'error'
      ).then(()=>{
        window.location = '/snake-js'
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

window.requestAnimationFrame(main)

function update() {
  
  updateSnake()
  gamePoint.innerHTML = updatePoint()
  updateFood()
  checkDeath()
}

function draw() {
  gameBoard.innerHTML = ''
  drawSnake(gameBoard)
  drawFood(gameBoard)
}

function checkDeath() {
  gameOver = outSideGrid(getSnakeHead()) || snakeIntersection()
}

// select skin depends on the level

// toggle nav menu
const navButton = document.querySelector('.nav-button')
const navUl = document.querySelector('.nav-ul')

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

// auth form controll

const loginForm = document.querySelector('#login-form')
const signupForm = document.querySelector('#signup-form')

function removeErrorMessage() {
    // remove previous error message
    const errorMessage = document.querySelector('.error')
    if(errorMessage){
      errorMessage.remove()
    }
}

loginForm.addEventListener('submit', (e) => {
  e.preventDefault()
  
  removeErrorMessage()
  
  const email = loginForm.email.value
  const password = loginForm.password.value
  
  signInWithEmailAndPassword(auth, email, password)
      .then((cred) => {
            console.log('login success', cred.user)
            loginForm.reset()
        })
        .catch((err) => {
            const elementBefore = loginForm.querySelector('#login-form p')
            const errorText = document.createElement('p')
            errorText.innerHTML = err.message
            errorText.classList.add('error')
            loginForm.insertBefore(errorText, elementBefore)
        })
})

signupForm.addEventListener('submit', (e) => {
  e.preventDefault()
  
  removeErrorMessage()
  
  const displayName = signupForm.username.value
  const email = signupForm.email.value
  const password = signupForm.password.value
 
  createUserWithEmailAndPassword(auth, email, password)
        .then((cred) => {
            // set displayName
            updateProfile(auth.currentUser, { displayName })
                .then(()=>{
                  signupForm.reset()
                })
            // save user data to locale storage
        })
        .catch((err) => {
            const elementBefore = signupForm.querySelector('#signup-form p')
            const errorText = document.createElement('p')
            errorText.innerHTML = err.message
            errorText.classList.add('error')
            signupForm.insertBefore(errorText, elementBefore)
            
        })
})

// toggle login and signup view
const loginBox = document.getElementById('login')
const signupBox = document.getElementById('signup')
const authLink = document.getElementById('auth-link')
const settingLink = document.getElementById('setting')
const scoreboardLink = document.getElementById('scoreboard')
const loginLink = document.getElementById('login-link')
const logoutLink = document.getElementById('logout-link')
const signupLink = document.getElementById('signup-link')
const signupClose = document.querySelector('#signup-form .close')
const loginClose = document.querySelector('#login-form .close')

// show signup form from menu
authLink.addEventListener('click', ()=> {
  signupBox.style.display = 'grid'
  navUl.classList.remove('toggle-nav')
})

// close signup form
signupClose.addEventListener('click', ()=> {
  removeErrorMessage()
  signupForm.reset()
  signupBox.style.display = 'none'
})

// show login form from signup form
loginLink.addEventListener('click', ()=> {
  removeErrorMessage()
  signupForm.reset()
  signupBox.style.display = 'none'
  loginBox.style.display = 'grid'
})

// close login form
loginClose.addEventListener('click', ()=> {
  loginForm.reset()
  removeErrorMessage()
  loginBox.style.display = 'none'
})

// show signup form from login form
signupLink.addEventListener('click', ()=> {
  removeErrorMessage()
  loginForm.reset()
  loginBox.style.display = 'none'
  signupBox.style.display = 'grid'
})

// handle logout
logoutLink.addEventListener('click', ()=> {
  signOut(auth).
    then(()=> {
      console.log('logout success')
    })
    .catch((err)=> {
      console.log(err.message)
    })
})



// cek if user is logged in
onAuthStateChanged(auth, (user) => {
  if(user) {
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