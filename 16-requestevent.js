const http = require('http')
// const server = http.createServer((req,res)=>{
//  res.end('welcome')
// })


//using event emitter api
const server = http.createServer()
//emits events request
//subscribes to it/listens for it /responds to it
server.on('req',(req,res)=> {
	res.end('welcome')
})
server.listen(5000)