import { getInputDirection } from './input.js'
import { config } from './config.js'
import { getSnakeBorder } from './input.js'
import { getUser } from '../index.js'

const snakeBody = [{ x: 11, y: 11 }]
let newSegment = 0

export function update() {
    addSegments()
    const inputDirection = getInputDirection()
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] }
    }

    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y
}

export function draw(gameBoard) {
    
    let data = getUser()
    snakeBody.forEach((segment) => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.y
        snakeElement.style.gridColumnStart = segment.x
        snakeElement.classList.add('snake')
        snakeElement.style.backgroundColor = config.SNAKE_COLOR.body
        if(data) {
          snakeElement.style.backgroundColor = data.snakeBody
        }
        snakeElement.style.border = getSnakeBorder()
        gameBoard.appendChild(snakeElement)
    })
    const snakeHead = document.querySelectorAll('.snake')
    snakeHead[0].style.backgroundColor = config.SNAKE_COLOR.head
    if(data){
      snakeHead[0].style.backgroundColor = data.snakeHead
    }
}

export function expandSnake(amount) {
    newSegment += amount
}

export function getSnakeHead() {
    return snakeBody[0]
}

export function onSnake(position, { ignoreHead = false } = {}) {
    return snakeBody.some((segment, index) => {
        if (ignoreHead && index === 0) return false
        return equalPosition(segment, position)
    })
}

function equalPosition(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y
}

function addSegments() {
    for (let i = 0; i < newSegment; i++) {
        snakeBody.push({ ...snakeBody[snakeBody.length - 1] })
    }

    newSegment = 0
}

export function snakeIntersection() {
    return onSnake(snakeBody[0], { ignoreHead: true })
}

export function updatePoint() {
    return snakeBody.length - 1
}
