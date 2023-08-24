(() => {
    // With the reserver word we can create a capsule of all the types that we want to set
    type UserId = string | number
    let userId: UserId

    // With this case we can made the typing dynamic
    function greeting(myText: UserId) {
        if (typeof myText === 'string') {
            console.log(`string ${myText.toLocaleLowerCase()}`)
        }
    }

    // Literal types. We can just close with this espefici variables that we need
    type Sizes = 's' | 'M' | 'L' | 'XL'
    
})()