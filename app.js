const express = require('express')
const path = require('path')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const PORT = process.env.PORT || 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"))
})

io.on('connection', socket => {
    console.log(`Socket connected ${socket.id}`)
})

server.listen(PORT, () => {
    console.log(`✔ Our server is running on http://localhost:${PORT}`)
})