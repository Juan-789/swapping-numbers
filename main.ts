input.onPinPressed(TouchPin.P0, function () {
    basic.showString("First #")
    basic.showNumber(num2)
})
input.onButtonPressed(Button.A, function () {
    num1 += -1
    basic.showNumber(num1)
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showString("Second #:")
    basic.showNumber(num1)
    basic.showString("First #:")
    basic.showNumber(num2)
})
input.onButtonPressed(Button.AB, function () {
    num2 = num1
})
input.onButtonPressed(Button.B, function () {
    num1 += 1
    basic.showNumber(num1)
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showString("Second #")
    basic.showNumber(num1)
})
let num1 = 0
let num2 = 0
num2 = 0
num1 = 0
