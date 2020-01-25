const server = require('./app') 
const PORT = process.env.PORT || 3001
server.listen(PORT, () => {
    console.log(`Server running on port 3001`)
})