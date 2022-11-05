input.onButtonPressed(Button.A, function () {
    if (input.temperature() >= 15) {
        basic.showString("funcionando correctamente")
    } else {
        basic.showIcon(IconNames.No)
    }
})
