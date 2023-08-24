(() => {
    // In the case that we need to create variables with two types of variables
    let userId: string | number = 123
    userId = 1212
    userId = 'ididid'

    // With this case we can made the typing dynamic
    function greeting(myText: string | number) {
        if (typeof myText === 'string') {
            console.log(`string ${myText.toLocaleLowerCase()}`)
        } else {
            myText.toFixed(1)
        }
    }
    
    greeting('string')
    greeting(123123)
})()