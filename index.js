// Import the express library and assign it to a variable
import express from 'express'
import fetch from 'node-fetch'


// Create an instance of an express application 
// const app = express()
// app.use(express.json())
const translate = require('google-translate-api')

// Set the port the application will be running on
const port = process.env.PORT || 3001

translate('I spea Dutch').then(res => {
  console.log(res.from.text.value)
  //=> I [speak] Dutch
}).catch(err => {
  console.error(err)
})

// // Set up a response for the root path of the application
// app.get('/dinner/:dinner', (req, res) => {
//   console.log("req.params")

//   res.json({ data: "WhatdoyouwantforDinner?" })
// })


// // Example of an application route that makes a request to another server
// app.get('/advice', async (req, res) => {
//   // Make a request to another wbesite and wait for a response
//   const response = await fetch('http://149.31.225.53:3001')

//   // Read the response
//   const body = await response.json()

//   // Print the repsonse body to the console
//   console.log(body)

//   // Get the advice text string from the response body object
//   const advice = body.slip.advice

//   res.json({ data: advice })
// })

// Set the application to listen a port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

