const display = document.querySelector(".display")

const numbers = document.querySelectorAll(".number")

const operators = document.querySelectorAll(".operator")

const clear = document.querySelector("#clear-btn")

const equal = document.querySelector("#equal-btn")


let firstNum = null
let secondNum = null
let operator = null

// // create a loop for all my buttons
numbers.forEach((number) => {
    number.addEventListener("click", () => {
        if (operator === null) {
            firstNum = display.value + number.value
            display.value = firstNum
        } else {
            secondNum = display.value + number.value
            display.value = secondNum
        }
    })
})

operators.forEach((operator) => {
    operator.addEventListener("click", () => {
        operator = operator.value + display.value
    })
})



// // create a loop for all buttons
// addButton.addEventListener("click",(e) => {
// console.log(e)
// display.innertText += e.target.value
// })

