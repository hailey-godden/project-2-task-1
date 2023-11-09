count = 0

def on_button_pressed_a():
    global count
    count = 0
    if input.button_is_pressed(Button.A):
        for index in range(1-9):
            count += 1
            basic.show_number(count)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_forever():
    pass
basic.forever(on_forever)
