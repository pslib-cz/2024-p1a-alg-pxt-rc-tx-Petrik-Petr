radio.setGroup(123)
radio.setFrequencyBand(48)
radio.setTransmitSerialNumber(true)
let packet : string
type zolik = {
    x: Number,
    y: Number
}
let gril = 0
let f = 0
let kolik: zolik = {x:0, y:0}
let zprava: string
let zprva: string
let tohle = control.deviceSerialNumber().toString()

basic.forever(function () {
    kolik.x = input.acceleration(Dimension.X)
    kolik.y = input.acceleration(Dimension.Y)
    zprva = convertToText((kolik.x))
    zprava = convertToText((kolik.y))
    basic.pause(10)
    radio.sendString(tohle +','+ zprava +','+ zprva)
    basic.pause(10)
})
 
