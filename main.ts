input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 99999999999999; index++) {
        pins.analogWritePin(AnalogPin.P0, 1023)
        basic.pause(1000)
        pins.analogWritePin(AnalogPin.P0, 0)
        basic.pause(500)
        pins.analogWritePin(AnalogPin.P0, 1023)
        basic.pause(500)
        pins.analogWritePin(AnalogPin.P0, 0)
        basic.pause(500)
        pins.analogWritePin(AnalogPin.P0, 1023)
        basic.pause(200)
        pins.analogWritePin(AnalogPin.P0, 0)
        basic.pause(500)
        pins.analogWritePin(AnalogPin.P0, 1023)
        basic.pause(200)
        pins.analogWritePin(AnalogPin.P0, 0)
        basic.pause(200000)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index <= 10; index++) {
        pins.analogPitch(index + 2, 500)
        music.stopAllSounds()
        basic.pause(50)
    }
    music.stopAllSounds()
    basic.pause(500)
    for (let index = 0; index <= 10; index++) {
        pins.analogPitch(20 - (index + 2), 500)
        music.stopAllSounds()
        basic.pause(50)
    }
})
pins.analogWritePin(AnalogPin.P0, 1023)
music.setVolume(255)
basic.forever(function () {
	
})
