// setTimeout(() => {
//     console.log("2 seconds are up!")
// }, 2000)

// const names = ["Terra", "Bob", "George", "Pam"]
// const shortNames = names.filter((name) => {
//     return name.length <= 4
// })

// const geocode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             latitude: 0,
//             longitude: 0
//         }

//         callback(data)
//     }, 2000)
// }

// geocode("Philidelphia", (data) => {
//     console.log(data)
// })


const add = (num1, num2, callback) => {
    setTimeout(() => {
        callback(num1 + num2) 
    }, 2000)
}

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})