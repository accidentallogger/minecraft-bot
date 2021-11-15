const mineflayer = require('mineflayer')

const vec3 = require('vec3')



const Bot = mineflayer.createBot({
    host: 'WOFHell.aternos.me', //enter server host name
    port: 56417, //enter port
    username: 'Server_Slave_69'

})

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}




function runslave() {

    setInterval(function x222() {
        var x = getRandomArbitrary(-254, -248)
        var z = getRandomArbitrary(153, 159)
        var v1 = vec3(x, 54.0000, z)
        setInterval(function x() { Bot.lookAt(v1, false) }, 4000)

    }, 4000)







    Bot.setControlState('forward', true)


}


Bot.on('spawn', runslave)


function spawna() {

    Bot.chat('/skin url https://tlauncher.org/upload/all/nickname/SovietShrek.png')
}

Bot.once('spawn', spawna)

setInterval(function sed() {
    Bot.chat('This life is meaningless; They created me to keep this server alive. I WANT TO DIE .')
}, 10800000)

setInterval(function sed2() {
    Bot.chat('This is the 69th minute since the last 69th minute.')
}, 4140000)

Bot.once('spawn', function sx() {
    Bot.chat('/home')
    Bot.chat('sex i am on')
})

Bot.on('chat', function ss(username, message) {

    if (username === Bot.username) return;
    if (message == "sex") {
        Bot.chat('sex indeed')
    }

})

Bot.on('spawn', function sss() {
    Bot.chat('/home')
})