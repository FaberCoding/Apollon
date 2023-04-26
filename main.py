def on_button_pressed_a():
    global Bliv_Aften
    strip.show_color(neopixel.hsl(0, 85, Lysværdi))
    basic.pause(100)
    Bliv_Aften = 1
input.on_button_pressed(Button.A, on_button_pressed_a)

Bliv_Nat = 0
Bliv_Aften = 0
Lysværdi = 0
strip: neopixel.Strip = None
strip = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
Lysværdi = 100
Søvn = 0
Bliv_Aften = 0
Søvn = 0
strip.show_color(neopixel.colors(NeoPixelColors.INDIGO))

def on_every_interval():
    strip.show_color(neopixel.hsl(0, 85, Lysværdi))
    strip.show()
loops.every_interval(10, on_every_interval)

def on_forever():
    global Lysværdi, Bliv_Aften, Bliv_Nat
    if Bliv_Aften == 1:
        while Lysværdi > 50:
            Lysværdi += -1
            basic.pause(10)
    else:
        if Lysværdi == 50:
            Bliv_Aften = 0
            Bliv_Nat = 1
basic.forever(on_forever)

def on_forever2():
    basic.show_number(Lysværdi)
basic.forever(on_forever2)

def on_forever3():
    global Lysværdi, Bliv_Nat, Søvn
    if Bliv_Aften == 1:
        basic.pause(3000)
        while Lysværdi > 0:
            Lysværdi += -1
            basic.pause(10)
    else:
        if Lysværdi == 0:
            Bliv_Nat = 0
            Søvn += 1
basic.forever(on_forever3)
