let num = 0
let num2 = 0
let num1 = 0
input.onButtonPressed(Button.A, function () {
    num += -1
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 2; index++) {
        num2 = 0
        num1 = 0
        num = num1
        num = num2
    }
})
input.onButtonPressed(Button.B, function () {
    num += 1
})
basic.forever(function () {
    basic.showNumber(num)
})
basic.forever(function () {
	
})
