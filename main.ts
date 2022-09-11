input.onButtonPressed(Button.A, function () {
    
    if(ended==true){
        control.reset()
    }else{
        in_num += 1
        basic.showString("" + (in_num))
    }
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
    while(loop&&!ended){
    basic.showString("" + (time / 1000))
    time += -1000
    if (time==1000) {
        ended = true
        while (loop&&ended) {
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

let ended = false
let time = 0
let in_num = 0
let loop = false
loop = true
