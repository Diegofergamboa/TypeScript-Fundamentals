(() => {
    // As a inference of the type
    let isEnable = true

    // Correct syntax for this data type
    let isNew: boolean = false
    console.log(`isNew ${isNew}`)
    isNew = true

    const random = Math.random()
    console.log(random)
    isNew = random > 0.5

    // Never use on mayus the write of the type of the data
    const myBoolean: Boolean = true
})()