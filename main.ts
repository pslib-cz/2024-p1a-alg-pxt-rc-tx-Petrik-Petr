radio.setGroup(123)
radio.setTransmitSerialNumber(true)
control.deviceSerialNumber()
 
basic.forever(function () {
    let X = input.acceleration(Dimension.X)
    let Y = input.acceleration(Dimension.Y)
    radio.sendValue('X',X)
    basic.pause(10)
    radio.sendValue('Y',Y)
    basic.pause(10)
})
