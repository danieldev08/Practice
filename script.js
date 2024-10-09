const square1 = document.querySelector('.square1')
const btn1 = document.querySelector('.btn1')
btn1.addEventListener('click', () => {
    square1.classList.remove('hidden')
})
square1.addEventListener('click', () => {
    square1.classList.add('hidden')
})


const square2 = document.querySelector('.square2')
const btn2on = document.querySelector('.btn2on')
const btn2off = document.querySelector('.btn2off')


btn2on.addEventListener('click', () => {
    square2.classList.remove('hidden')
    btn2on.disabled = true
    btn2off.disabled = false
})


btn2off.addEventListener('click', () => {
    square2.classList.add('hidden')
    btn2on.disabled = false
    btn2off.disabled = true
})


const square3 = document.querySelector('.square3')
const btn3 = document.querySelector('.btn3')
let isSquare3Visible = false
btn3.addEventListener('click', () => {
    if (isSquare3Visible) {
        square3.classList.add('hidden')
    } else {
        square3.classList.remove('hidden')
    }
    isSquare3Visible = !isSquare3Visible
})

const square4 = document.querySelector('.square4')
const btn4 = document.querySelector('.btn4')
const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange']
let colorIndex = 0
btn4.addEventListener('click', () => {
    square4.style.backgroundColor = colors[colorIndex]
    colorIndex = (colorIndex + 1) % colors.length
    square4.classList.remove('hidden')
})
square4.addEventListener('click', () => {
    square4.classList.add('hidden')
})