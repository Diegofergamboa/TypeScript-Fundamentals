(() => {
    // TSC dones´t allow to add elements with different type of of data, for example on the numbers array we can assign only numbers
    let prices = [1,2,1,2,1,2,3,4,2,11,12,13,14,15,16]
    prices.push(2)

    // We can create different types of data but when they're assign in the begin
    let products = [1,'2',1,2,1,2,3,4,2,11,12,13,14,15,16,true]
    prices.push(2)

    // We can set the type of data in the array
    let mixed: (number | string | boolean)[] = ['hola', true, 1, 2, false]
})()