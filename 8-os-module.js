const os = require('os')

//info about Tchinonso
const user = os.userInfo()
console.log(user);

//return system uptime
console.log(`system uptime ${os.uptime()} secs`);

const currentOs = {
	name: os.type(),
	release: os.release(),
	totalMem: os.totalmem(),
	freeMem:os.freemem()
}
console.log(currentOs);