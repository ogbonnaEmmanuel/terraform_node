const express = require('express')
const app = express()
const http = require('http');


app.use(express.json())

app.get('/', (req, res) =>{
    return res.send('working');
})

const httpServer = http.createServer(app)

httpServer.listen(8080, () =>{
    console.log('listening on port 8080')
});

