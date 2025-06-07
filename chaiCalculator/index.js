//function declaration and initialization
function calculateChaiIngridients() { 
    let numberOfCups=prompt("Karibu! How many cups of Chai Bora would you like to make?"); //prompt message
    const number=parseFloat(numberOfCups); //changing string to number
    //initial values of ingridients
    const water=200;
    const milk=100;
    const Tealeaves=1;
    const sugar=1;
    
    //calculating ingridient amounts
    let totalWater=number*water;
    let totalmilk=number*milk;
    let totalTeaLeaves= number * Tealeaves;
    let totalsugar= number* sugar;

    //printing values
    console.log(`water needed: ${totalWater}ml`);
    console.log(`milk needed: ${totalmilk}ml`);
    console.log(`Tea leaves needed: ${totalTeaLeaves}tablespoons`);
    console.log(`sugar needed: ${totalsugar}tablespoons`);
}
//call function
calculateChaiIngridients();