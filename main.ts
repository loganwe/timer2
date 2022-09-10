input.onButtonPressed(Button.A, function () {
    in_num += 1
    basic.showString("" + (in_num))
})
input.onButtonPressed(Button.AB, function () {
    start()
})
input.onButtonPressed(Button.B, function () {
    in_num += 0 - 1
    basic.showString("" + (in_num))
})
function start () {
    time = in_num * 1000
    while (!(time == 0)) {
        basic.showString("" + (time / 1000))
        time += -1000
        if (time == 1000) {
            while (loop) {
                basic.showIcon(IconNames.Yes)
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    `)
            }
        }
    }
}
let time = 0
let in_num = 0
let loop = false
loop = true
