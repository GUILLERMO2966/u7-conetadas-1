input.onButtonPressed(Button.A, function () {
    basic.showArrow(ArrowNames.West)
    Coordenada_X += 1
    basic.showNumber(Coordenada_X)
    basic.pause(2000)
})
input.onButtonPressed(Button.B, function () {
    basic.showArrow(ArrowNames.East)
    Coordenada_Y += 1
    basic.showNumber(Coordenada_Y)
    basic.pause(2000)
})
let Coordenada_Y = 0
let Coordenada_X = 0
Coordenada_X = 0
Coordenada_Y = 0
let Vuelos = 0
