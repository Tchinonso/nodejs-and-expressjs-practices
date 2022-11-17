const console = require('console');
const { readFile, writeFile, readFileSync } = require('fs')

readFile('./content/first.txt','utf8', (err, result) => {
	if (err) {
		console.log(err);
		return
	} else {
		console.log(result)
		const first = result
		readFile('./content/second.txt', 'utf8',(err,result)=> {
			if(err) {
				console.log(err)
				return
			} else {
				const second = result
				writeFile(
          "./content/result-async.txt",
          `the new result: ${first}, ${second}`,
					{ flag: "a" }, (err, result) => {
						if (err) {
							console.log(err)
							return(err)
						} else {
							return (result)
							console.log(result);
			  }
		  }
        );
			}
		})
	}
})
