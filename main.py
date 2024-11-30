I2C_LCD1602.lcd_init(39)
I2C_LCD1602.on()
I2C_LCD1602.backlight_on()
I2C_LCD1602.show_string("ring the door bell", 4, 0)
basic.pause(200)
irRemote.connect_infrared(DigitalPin.P0)

def on_forever():
    if pins.digital_read_pin(DigitalPin.P8) == 0:
        music._play_default_background(music.built_in_playable_melody(Melodies.BA_DING),
            music.PlaybackMode.UNTIL_DONE)
        pins.digital_write_pin(DigitalPin.P8, 1)
        I2C_LCD1602.clear()
        I2C_LCD1602.show_string("ba ding", 4, 1)
        basic.pause(100)
        I2C_LCD1602.clear()
        pins.digital_write_pin(DigitalPin.P13, 0)
    elif irRemote.return_ir_button() == irRemote.ir_button(KBitIrButtons.NUMBER_3):
        basic.show_icon(IconNames.HAPPY)
        basic.pause(1000)
    elif irRemote.return_ir_button() == irRemote.ir_button(KBitIrButtons.NUMBER_2):
        basic.show_icon(IconNames.SAD)
        basic.pause(1000)
    elif irRemote.return_ir_button() == irRemote.ir_button(KBitIrButtons.NUMBER_1):
        basic.show_icon(IconNames.BUTTERFLY)
        basic.pause(1000)
    elif irRemote.return_ir_button() == irRemote.ir_button(KBitIrButtons.NUMBER_6):
        I2C_LCD1602.clear()
        I2C_LCD1602.show_string("open the gaage", 4, 0)
        basic.pause(100)
        I2C_LCD1602.clear()
        pins.servo_write_pin(AnalogPin.P4, 155)
        basic.pause(5000)
        pins.servo_write_pin(AnalogPin.P4, 55)
        basic.pause(5000)
        I2C_LCD1602.show_string("close the graage ", 4, 0)
    elif irRemote.return_ir_button() == irRemote.ir_button(KBitIrButtons.NUMBER_7):
        pins.servo_write_pin(AnalogPin.P2, 180)
        basic.pause(5000)
        pins.servo_write_pin(AnalogPin.P2, 0)
        basic.pause(5000)
basic.forever(on_forever)
