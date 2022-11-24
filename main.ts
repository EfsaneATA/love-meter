input.onButtonPressed(Button.A, function () {
    if (secilen_1 == 0) {
        for (let index = 0; index < randint(1, 25); index++) {
            secilen_1 += 1
        }
        basic.pause(200)
    }
})
input.onButtonPressed(Button.AB, function () {
    if (secilen_1 != 0 && secilen_2 != 0) {
        sonuc = secilen_1 * secilen_2
        if (sonuc >= 100) {
            sonuc = 100
        }
        basic.showIcon(IconNames.Heart)
        basic.showNumber(sonuc)
        basic.pause(2000)
        basic.clearScreen()
    } else {
        basic.pause(100)
        basic.showIcon(IconNames.No)
        basic.pause(1000)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    if (secilen_1 != 0) {
        for (let index = 0; index < randint(1, 25); index++) {
            secilen_2 += 1
        }
        basic.pause(200)
    }
})
let sonuc = 0
let secilen_2 = 0
let secilen_1 = 0
secilen_1 = 0
secilen_2 = 0
sonuc = 0
