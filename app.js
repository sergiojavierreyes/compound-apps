//importing necessary modules
const fs = require ('fs')

// Read the customer data json
fs.readFile(__dirname + "/customer.json", "utf8", (err,data)=>{
	//parse the file to a readable object
	let parsedData = JSON.parse(data)
	calcCompound(parsedData)
})

//function to calculate compound interest from a customer object
var calcCompound = (customer) => {

	//Set end amount prop and calculate total duration
	customer.pension.endamount = {
		pessimistic: customer.finances.startcapital,
		average: customer.finances.startcapital,
		optimistic: customer.finances.startcapital
	} 
	customer.pension.duration = (customer.pension.age - customer.age)

	//Do the interest math
	for (var i = customer.pension.duration - 1; i >= 0; i--) {
		customer.pension.endamount.pessimistic  += (customer.finances.monthlyadd * 12)
		customer.pension.endamount.average  += (customer.finances.monthlyadd * 12)
		customer.pension.endamount.optimistic  += (customer.finances.monthlyadd * 12)
		//calculate the added itnerest
		customer.pension.endamount.pessimistic *= (customer.pension.interest.pessimistic)
		customer.pension.endamount.average *= (customer.pension.interest.average)
		customer.pension.endamount.optimistic *= (customer.pension.interest.optimistic)

	}
		//output our data
		console.log("Welcome " + customer.name + " to our advanced pension planner!")
		console.log("You are starting with: " + customer.finances.startcapital + " and add a monthly amount of " + customer.finances.monthlyadd)
		console.log("When you retire at age: " + customer.pension.age + " you will have the following: ")
		console.log("In a pessimistic scenario: $" + customer.pension.endamount.pessimistic)
		console.log("In a pessimistic scenario: $" + customer.pension.endamount.average)
		console.log("In a pessimistic scenario: $" + customer.pension.endamount.optimistic)
}