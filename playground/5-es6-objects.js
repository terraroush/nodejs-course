// Object property shorthand

const name = "Terra"
const userAge = 36

const user = {
    name,
    age: userAge,
    location: "Nashville"
}

// console.log(user)

// Object descructuring

const product = {
    label: "Red notebook",
    price: 3,
    stock: 201,
    rating: 3,
    salePrice: undefined
}

// const label = product.label
// const stock = product.stock

// const {label:productLabel, stock, rating = 5} = product

// console.log(productLabel)
// console.log(stock)
// console.log(rating)

const transaction = (type, { label, stock = 0 } = {}) => {
    console.log(type, label, stock)
}

transaction('order')