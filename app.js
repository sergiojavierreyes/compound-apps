//importing necessary modules
const fs = require ('fs')

// Read the customer data json
fs.readFile(__dirname + "/customer.json", "utf8", (err,data)=>{
	//parse the file to a readable object
	let parsedData = JSON.parse(data)
	console.log(parsedData)
})