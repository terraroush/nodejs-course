// const square = function (x) {
//     return x*x
// }

// const square = (x) => x*x

// console.log(square(6))

const event = {
    name: "Birthday Party",
    guestList: ["Terra", "Scott", "Carly"],
    printGuestList() {
        console.log("Guest list for " + this.name)
        
        this.guestList.forEach((guest) => {
            console.log(guest + " is attending " + this.name)
        })
    }
}

event.printGuestList()