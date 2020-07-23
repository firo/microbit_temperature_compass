function doStart () {
    list = [1, 2, 3]
    listCur = 0
    while (menu_home == true) {
        basic.showIcon(IconNames.Happy)
    }
}
function showNext () {
    menu_home = false
    if (listCur == list.length) {
        listCur = 0
    }
    basic.showString("" + (list[listCur]))
    listCur = listCur + 1
}
input.onButtonPressed(Button.A, function () {
    menu_home = false
    if (listCur == 1) {
        doTemperature()
    } else if (listCur == 2) {
        doCompass()
    } else {
    	
    }
})
function doTemperature () {
    menu_home = false
    while (listCur == 1) {
        basic.clearScreen()
        basic.showNumber(input.temperature())
        basic.pause(1000)
        basic.clearScreen()
        serial.writeValue("temperature", input.temperature())
        led.plotBarGraph(
        20,
        40
        )
        basic.pause(1000)
    }
}
function doCompass () {
    menu_home = false
    while (listCur == 2) {
        if (input.compassHeading() > 315 || input.compassHeading() < 45) {
            basic.showString("N")
        } else if (input.compassHeading() < 135) {
            basic.showString("E")
        } else if (input.compassHeading() < 225) {
            basic.showString("S")
        } else {
            basic.showString("W")
        }
    }
}
input.onButtonPressed(Button.AB, function () {
    menu_home = true
    doStart()
})
input.onButtonPressed(Button.B, function () {
    menu_home = false
    showNext()
})
let listCur = 0
let list: number[] = []
let menu_home = false
menu_home = true
doStart()
