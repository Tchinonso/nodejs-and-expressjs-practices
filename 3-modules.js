//modules
// const john = 'john'
// const peter = 'peter'

// const sayHi = (name) => {
// 	console.log(`hello there ${name}`)
// }

const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative')
require("./7-adding-values")

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)