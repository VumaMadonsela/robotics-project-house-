I2C_LCD1602.LcdInit(39)
I2C_LCD1602.on()
I2C_LCD1602.BacklightOn()
I2C_LCD1602.ShowString("ring the door bell", 4, 0)
basic.pause(200)
irRemote.connectInfrared(DigitalPin.P0)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P8) == 0) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.BaDing), music.PlaybackMode.UntilDone)
        pins.digitalWritePin(DigitalPin.P8, 1)
        I2C_LCD1602.clear()
        I2C_LCD1602.ShowString("ba ding", 4, 1)
        basic.pause(100)
        I2C_LCD1602.clear()
        pins.digitalWritePin(DigitalPin.P13, 0)
    } else if (irRemote.returnIrButton() == irRemote.irButton(KBitIrButtons.Number_3)) {
        basic.showIcon(IconNames.Happy)
        basic.pause(1000)
    } else if (irRemote.returnIrButton() == irRemote.irButton(KBitIrButtons.Number_2)) {
        basic.showIcon(IconNames.Sad)
    } else if (irRemote.returnIrButton() == irRemote.irButton(KBitIrButtons.Number_1)) {
        basic.showIcon(IconNames.Butterfly)
        basic.pause(1000)
    } else if (irRemote.returnIrButton() == irRemote.irButton(KBitIrButtons.Number_6)) {
        I2C_LCD1602.clear()
        I2C_LCD1602.ShowString("open the gaage", 0, 0)
        basic.pause(100)
        I2C_LCD1602.clear()
        pins.servoWritePin(AnalogPin.P4, 180)
        basic.pause(5000)
        I2C_LCD1602.ShowString("close the garage ", 0, 0)
        pins.servoWritePin(AnalogPin.P4, 0)
        basic.pause(5000)
    } else if (irRemote.returnIrButton() == irRemote.irButton(KBitIrButtons.Number_7)) {
        I2C_LCD1602.ShowString("open the door ", 0, 0)
        pins.servoWritePin(AnalogPin.P2, 180)
        basic.pause(5000)
        I2C_LCD1602.ShowString("close the door ", 0, 0)
        pins.servoWritePin(AnalogPin.P2, 0)
        basic.pause(5000)
    }
})
