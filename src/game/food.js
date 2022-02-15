import { expandSnake, onSnake } from './snake.js'
import { randomGridPosition } from './grid.js'
import { config } from './config.js'

let food = getRandomFoodPosition()

export function update() {
  if(onSnake(food)){
    expandSnake(config.EXPANSION_RATE)
    food = getRandomFoodPosition()
  }
}

export function draw(gameBoard) {
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')
    foodElement.style.backgroundColor = config.FOOD_COLOR
    gameBoard.appendChild(foodElement)
}

function getRandomFoodPosition() {
  let newFoodPosition
  while( newFoodPosition == null || onSnake(newFoodPosition)){
    newFoodPosition = randomGridPosition()
  }
  
  return newFoodPosition
}