(() =>{
    // Undefined and null it's not support by inference, assigning null type
    let myNumber: number
    let myString: string

    let myNull: null = null
    let myUndefined: undefined = undefined

    // For the usage when we need to use the undefined, using union types we can set it
    let myUnionNumber: number | undefined = undefined

    function hi(name: string | null) {
        let hello: string = 'Hello'
        if (name) {
            `${hello} ${name}`
        } else {
            `${hello} nobody`
        }
    }

})()