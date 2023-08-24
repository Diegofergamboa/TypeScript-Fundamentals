(() => {
    // This var is used to set any kind of variable, something as take out the variables analysis or flexibility
    // The any never should be used, it's a restricted rule
    let myDynamicVar: any
    myDynamicVar = 100
    myDynamicVar = 'string'
    myDynamicVar = true

    // Exists the "cast" and is a tool used for give an especial treatment to the variables, for example here.
    const rta = (myDynamicVar as string)
    // Given this property we can set anything trelated to the type set for the cast
    rta.toLocaleUpperCase()

    // This is another way to made a cast
    // THis is made when we're using libraries that are given to us data
    const rta2 = (<number>myDynamicVar)
    console.log(rta2)
})()