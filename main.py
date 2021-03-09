num = 0

def on_button_pressed_a():
    global num
    num += -1
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global num
    for index in range(2):
        num2 = 0
        num1 = 0
        num = num1
        num = num2
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global num
    num += 1
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_forever():
    basic.show_number(num)
basic.forever(on_forever)

def on_forever2():
    pass
basic.forever(on_forever2)
