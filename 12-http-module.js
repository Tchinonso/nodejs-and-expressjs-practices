const http = require('http')

const server = http.createServer((req, res) => {
	if (req.url === '/') {
		res.end('welcome to home page')
	}
	if (req.url === '/about') {
		res.end('you are in about page')
	}
	res.end(
		`<h1>oops</h1>
		<p>we can't find it</p>
		<a href="/">home</a>`
	)
})
server.listen(5000)