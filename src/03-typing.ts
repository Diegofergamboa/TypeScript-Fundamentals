//* If we redeclare in the same context a function TSC will be show an error.
// let myProductName = 'hola mundo'
// let myProductName = 'hola mundo'
// TO fix this error we should execute an anonymous executable function that close in another scope the function

(() => {
    let myProductName = 'hola mundo'
})()