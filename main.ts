let count = 0
input.onButtonPressed(Button.A, function () {
    count = 1
    for (let index = 0; index < 9; index++) {
        basic.showNumber(count)
        count += 1
    }
})
input.onButtonPressed(Button.B, function () {
    count = 9
    for (let index = 0; index < 9; index++) {
        basic.showNumber(count)
        count += -1
    }
})
