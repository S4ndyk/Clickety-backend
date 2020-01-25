const http = require('http')
const app = require('express')()
const server = http.createServer(app)
const io = require('socket.io')(server)

let clicks = 0

io.on('connect', socket => {
  io.emit('totalClicks', clicks)
  
  socket.on('click', () => {
    clicks = clicks + 1
    io.emit('totalClicks', clicks)
  })
})

module.exports = server