input.onButtonPressed(Button.A, function () {
    if (input.temperature() > 20) {
        basic.showString("FUNCIONANDO")
    } else {
        basic.showIcon(IconNames.No)
    }
})
