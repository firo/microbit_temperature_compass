function goNext () {
    if (listCur == list.length) {
        listCur = 0
        basic.showString("" + (list[listCur]))
    } else {
        basic.showString("" + (list[listCur]))
    }
    listCur = listCur + 1
}
function doStart () {
    list = [1, 2, 3]
    listCur = 0
    basic.showIcon(IconNames.Happy)
}
input.onButtonPressed(Button.A, function () {
    if (listCur == 1) {
        doTemperature()
    } else if (listCur == 2) {
        doCompass()
    } else {
    	
    }
})
function doTemperature () {
    while (true) {
        basic.showNumber(input.temperature())
        basic.pause(1000)
        basic.clearScreen()
        serial.writeValue("temperature", input.temperature())
        led.plotBarGraph(
        20,
        40
        )
        basic.pause(2000)
        basic.clearScreen()
    }
}
function doCompass () {
    while (true) {
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
    doStart()
})
input.onButtonPressed(Button.B, function () {
    goNext()
})
let list: number[] = []
let listCur = 0
doStart()
