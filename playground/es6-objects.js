const name ='Ishkhan'
const age = 24;

const user = {
    name,
    age,
    location:'Armavir'
}

console.log(user)

const product = {
    label:'Red notebook',
    price:3,
    stock:201,
    salePrice:undefined
}

// const label = product.label
// const stock = product.stock

const { label:productLabel,stock,raining } =product

console.log(productLabel)

console.log(stock)
console.log(raining)