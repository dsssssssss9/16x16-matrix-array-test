input.onButtonPressed(Button.A, function () {
    ArexxMatrix.setPixel(0, 0, neopixel.colors(NeoPixelColors.Red))
    ArexxMatrix.showMatrix()
    basic.pause(100)
    ArexxMatrix.setPixel(15, 0, neopixel.colors(NeoPixelColors.Violet))
    ArexxMatrix.showMatrix()
    basic.pause(100)
    ArexxMatrix.setPixel(0, 15, neopixel.colors(NeoPixelColors.Green))
    ArexxMatrix.showMatrix()
    basic.pause(100)
    ArexxMatrix.setPixel(15, 15, neopixel.colors(NeoPixelColors.Blue))
    ArexxMatrix.showMatrix()
})
ArexxMatrix.createMatrix(
16,
16,
NeoPixelMode.RGB,
DigitalPin.P2
)
ArexxMatrix.legen()
ArexxMatrix.showMatrix()
basic.showIcon(IconNames.Heart)
