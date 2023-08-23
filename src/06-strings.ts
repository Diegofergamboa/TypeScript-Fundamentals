(() => {
    // We can create a string inference based in the string
    // Using different "comillas"
    const productTitle = "My amazing product"
    const productDescription = 'My description in the string'
    const summaryProduct = `
        We can create
        block of codes
        with need use the line wrap
        We can use too the concat of the variables with the ${productDescription}
    `
    console.log(summaryProduct)
})()