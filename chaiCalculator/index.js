//function declaration and initialization
function calculateChaiIngridients() { 
    let numberOfCups=prompt("Karibu! How many cups of Chai Bora would you like to make?"); //prompt message
    const number=parseFloat(numberOfCups); //changing string to number
    //initial values of ingridients
    const water=200;
    const milk=100;
    const Tealeaves=1;
    const sugar=1;
    
// calculation of values
let totalWater= water*number;
let totalmilk= milk*number;
let totalTealeaves= Tealeaves*number;
let totalsugar=sugar*number;

//print the values on to the console
console.log(`water :${totalWater}`)
console.log(`milk: ${totalmilk}`)
console.log(`Tea leaves: ${totalTealeaves}`)
console.log(`Sugar(Sukari) ${totalsugar}`)

}
//call function
calculateChaiIngridients()
