const { readFile , writeFile} = require('fs').promises
// const util = require('util');
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

// const getText = (path) => {
// 	return new Promise((resolve, reject) => {
// 		readFile(path, 'utf8', (err, data) => {
// 			if (err) {
// 				reject(err)
// 			} else {
// 				resolve(data)
// 			}
// 		})
// 	})
// }
// getText('./content/first.txt')
// 	.then((result) => console.log(result))
// 	.catch((err) => console.log(err));

// const start = async () => {
// 	const first = await getText("./content/first.txt");
// 	console.log(first);
// }
// start()
//always wrap async into a try catch block
// const start = async () => {
// 	try {
// 		const first = await readFilePromise("./content/first.txt", 'utf8')
// 		const second = await readFilePromise("./content/second.txt", 'utf8')
// 		await writeFilePromise('./content/mind-blow.txt',`this is awesome: ${first} ${second}`)
// 	     console.log(first, second)
// 	} catch (error) {
// 		console.log(error);
// 	}
// }
// start()
const start = async () => {
  try {
    const first = await readFile("./content/first.txt", "utf8");
    const second = await readFile("./content/second.txt", "utf8");
    await writeFile(
      "./content/mind-blow.txt",
      `this is awesome: ${first} ${second}`,{flag:'a'}
    );
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};
start();