import { config } from './config.js'

let inputDirection = { x:0, y:0 }
let lastInputDirection = { x:0, y:0 }
let snakeSpeed = config.SNAKE_SPEED
let snakeBorder = config.SNAKE_COLOR.border

window.addEventListener('keydown', (e)=>{
  switch (e.key) {
    case 'arrowUp':
      if(lastInputDirection.y !== 0) break
      inputDirection = { x:0, y:-1}
      break;
    case 'arrowDown':
      if(lastInputDirection.y !== 0) break
      inputDirection = { x:0, y:1}
      break;
    case 'arrowLeft':
      if(lastInputDirection.x !== 0) break
      inputDirection = { x:-1, y:0}
      break;
    case 'arrowRight':
      if(lastInputDirection.x !== 0) break
      inputDirection = { x:1, y:0}
      break;
  }
})

const keys = document.querySelectorAll('.key')

keys.forEach(key => {
  key.addEventListener('click', (e)=>{
    switch (e.target.id) {
    case 'up':
      if(lastInputDirection.y !== 0) break
      inputDirection = { x:0, y:-1}
      break;
    case 'down':
      if(lastInputDirection.y !== 0) break
      inputDirection = { x:0, y:1}
      break;
    case 'left':
      if(lastInputDirection.x !== 0) break
      inputDirection = { x:-1, y:0}
      break;
    case 'right':
      if(lastInputDirection.x !== 0) break
      inputDirection = { x:1, y:0}
      break;
  }
  })
})

export function getInputDirection(){
  lastInputDirection = inputDirection
  return inputDirection
}

// when boosted change snake border to yellow
const snakeBody = document.querySelector('.snake')

export function boostSpeed() {
  snakeSpeed *= 2
  snakeBorder = config.SNAKE_COLOR.boost
  setTimeout(() => {
    snakeSpeed = config.SNAKE_SPEED
    snakeBorder = config.SNAKE_COLOR.border
  }, 1500)
}

export function getSnakeSpeed() {
  return snakeSpeed
}

export function getSnakeBorder() {
  return snakeBorder
}