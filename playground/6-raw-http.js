const http = require("http")

const url = "http://api.weatherstack.com/current?access_key=f2edd5254dec3786b413366cb5cd31fc&query=40,-75$&units=f"

const request = http.request(url, (response) => {
    let data = ""

    response.on("data", (chunk) => {
        data = data + chunk.toString()
    })

    response.on("end", () => {
        const body = JSON.parse(data)
        console.log(body)
    })

})

request.on("error", (error) => {
    console.log("an error", error)
})

request.end()