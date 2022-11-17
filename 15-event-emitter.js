const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('res', () => {
	console.log(`data recieved`);
})
customEmitter.emit('res')