let Tidtagning = 0
let Bliv_Nat = 0
let Kan_Vågne = 0
let Vågn_Op = 0
let strip = neopixel.create(DigitalPin.P0, 12, NeoPixelMode.RGB)
let Lysværdi = 100
let Søvn = 0
let Bliv_Aften = 0
Søvn = 0
strip.showColor(neopixel.hsl(0, 85, Lysværdi))
let Dag = 1
loops.everyInterval(10, function () {
    strip.showColor(neopixel.hsl(0, 85, Lysværdi))
    strip.show()
})
basic.forever(function () {
    if (Dag == 1) {
        Vågn_Op = 0
        basic.pause(3000)
        Bliv_Aften = 1
    }
})
basic.forever(function () {
    if (Bliv_Aften == 1) {
        Dag = 0
        Kan_Vågne = 0
        while (Lysværdi > 50) {
            Lysværdi += -1
            basic.pause(10)
        }
        Bliv_Nat = 1
        Bliv_Aften = 0
    }
})
basic.forever(function () {
    basic.showNumber(Kan_Vågne)
})
basic.forever(function () {
    if (Bliv_Nat == 1) {
        basic.pause(3000)
        while (Lysværdi > 0) {
            Lysværdi += -1
            basic.pause(10)
        }
        Søvn += 1
        Bliv_Nat = 0
    }
})
basic.forever(function () {
    if (Søvn == 1) {
        Tidtagning = 1
        if (Kan_Vågne == 1 && input.magneticForce(Dimension.X) > 1000) {
            Vågn_Op = 1
            Kan_Vågne = 0
            Søvn = 0
        }
    }
})
basic.forever(function () {
    if (Tidtagning == 1) {
        basic.pause(8500)
        Kan_Vågne = 1
        Tidtagning = 0
    }
})
basic.forever(function () {
    if (Vågn_Op == 1) {
        while (Lysværdi < 100) {
            Lysværdi += 5
            basic.pause(100)
        }
        basic.pause(3000)
        Dag = 1
    }
})
