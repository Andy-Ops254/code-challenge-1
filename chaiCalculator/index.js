function calculateChaiIngridients() {
    let numberOfCups=prompt("Karibu! How many cups of Chai Bora would you like to make?");
    const number=parseFloat(numberOfCups);
    const water=200;
    const milk=100;
    const Tealeaves=1;
    const sugar=1;

    let totalWater=number*water;
    let totalmilk=number*milk;
    let totalTeaLeaves= number * Tealeaves;
    let totalsugar= number* sugar;

    console.log(`water needed: ${totalWater}ml`);
    console.log(`milk needed: ${totalmilk}ml`);
    console.log(`Tea leaves needed: ${totalTeaLeaves}tablespoons`);
    console.log(`sugar needed: ${totalsugar}tablespoons`);
}
calculateChaiIngridients();