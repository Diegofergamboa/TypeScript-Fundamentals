(() => {
    // With the inference we can assign the type of number for the variable
    let productPrice = 100
    productPrice = 150
    console.log(productPrice)

    // But we can use the tsc alert with operations with not valid types as sum an string with a number
    let customerAge : number = 26
    customerAge = customerAge + 1
    console.log(`The customer age is: ${customerAge}`)

    // To initialize the type of variable we should use the type of variable as in the next example
    let productInStock: number
    console.log(`product in stock ${productInStock}`)

    if (productInStock > 10) {
        console.log(`Is greater than 10`)
    }

    let discount = parseInt('123')
    console.log(`Discount: ${discount}`)


    // TSC allow to us to create the type including hexadecimals and binaries 
    let hex = 0xfff
    console.log(`hexadecimal ${hex}`)
    let bin = 0b110
    console.log(`binary ${bin}`)

    // DO not use never the mayus type
    const myNumber: Number = 10
})()