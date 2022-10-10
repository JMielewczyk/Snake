const snake = document.querySelector('.main__snake')
const main = document.querySelector('.main')

let y_axis = '0';
let x_axis = '0'
let axis = '';
let direction = 'Up'
let board_leftBorder = main.getBoundingClientRect().left;
let board_rightBorder = main.getBoundingClientRect().right;
let board_topBorder = main.getBoundingClientRect().top;
let board_bottomBorder = main.getBoundingClientRect().bottom;

const steerSnake = (e) => {
    if (e.key === direction) return
    switch (e.key) {
        case 'ArrowUp':
            direction = 'ArrowUp'
            break;
        case 'ArrowDown':
            direction = 'ArrowDown'
            break;
        case 'ArrowLeft':
            direction = 'ArrowLeft'
            break;
        case 'ArrowRight':
            direction = 'ArrowRight'
            break;
        default:
            return;
    }

}
window.addEventListener('keydown', steerSnake)


function moveSnake(direction) {

    console.log(direction)
    if (direction === 'ArrowUp') {
        y_axis -= 5;
    } else if (direction === 'ArrowDown') {
        y_axis += 5;
    } else if (direction === 'ArrowLeft') {
        x_axis -= 5;
    } else if (direction === 'ArrowRight') {
        x_axis += 5;
    }
    snake.style.transform = `translate(${x_axis}px, ${y_axis}px)`
}

setInterval(function () {
    moveSnake(direction);
}, 20);

function spawnFood() {
    const x_axisRandom = Math.floor(Math.random() * (board_rightBorder - board_leftBorder) + board_leftBorder);
    const y_axisRandom = Math.floor(Math.random() * (board_bottomBorder - board_topBorder) + board_topBorder);
    console.log(x_axisRandom, y_axisRandom)
    const el_food = document.createElement('div');
    el_food.style.height = '20px';
    el_food.style.width = '20px';
    el_food.style.backgroundColor = 'green';
    el_food.style.position = `fixed`;
    el_food.style.top = `${y_axisRandom}px`
    el_food.style.left = `${x_axisRandom}px`
    el_food.style.transform = `translate(-50%, -50%)`
    main.appendChild(el_food)
}
// spawnFood()

setInterval(spawnFood, 5000);