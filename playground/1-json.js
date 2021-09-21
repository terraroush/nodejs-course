const fs = require('fs')

const dataBuffer = fs.readFileSync("1-json.json")
console.log("databuffer", dataBuffer)

const dataJSON = dataBuffer.toString()
console.log("dataJSON", dataJSON)

const user = JSON.parse(dataJSON)
console.log("user", user)

user.name = "Scott"
user.planet = "Mars"
user.age = 36

const userJSON = JSON.stringify(user)
console.log("userJSON", userJSON)
fs.writeFileSync("1-json.json", userJSON)

console.log("user", user)
