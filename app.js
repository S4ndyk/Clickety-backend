const http = require('http')
const express = require('express')
const app = express()
const server = http.createServer(app)
const io = require('socket.io')(server)
const cors = require('cors')

app.use(express.static('build'))
app.use(cors())

let clicks = 0

io.on('connect', socket => {
  io.emit('totalClicks', clicks)
  
  socket.on('click', () => {
    clicks = clicks + 1
    io.emit('totalClicks', clicks)
  })
})

module.exports = server