input.onButtonPressed(Button.A, function () {
    radio.sendValue("quietCmd", 1)
    quietMode = 1
})
input.onButtonPressed(Button.B, function () {
    radio.sendValue("quietCmd", 0)
    quietMode = 0
})
radio.onReceivedValue(function (name, value) {
    if (name == "quietCmd") {
        quietMode = value
    }
})
let quietMode = 0
radio.setGroup(1)
quietMode = 0
let strip = neopixel.create(DigitalPin.P2, 30, NeoPixelMode.RGB)
basic.forever(function () {
    if (quietMode == 0) {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else if (quietMode == 1) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    basic.pause(200)
})
