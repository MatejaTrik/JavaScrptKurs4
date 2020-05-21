try {
    // Produce a EeferenceError
    // myFunction();

    //produce a typeEroor
    null.myFunction();
} catch(e) {
    console.log('ITS NULL STUPID')
    // console.log(e)
    // console.log(e.message)
    // console.log(e.name)
    // console.log(e instanceof ReferenceError)
    // console.log(e instanceof TypeError)



} finally {
    console.log('Finally runs reguardless of result')
}

console.log('Program cantinues...')