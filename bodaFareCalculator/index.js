// Declaration and initialization.
function calculateBodaFare() {
    let bodaFare= prompt("Unafika wapi Mkubwa? Kilometer ngapi");  //prompt message
    const distanceInKilometer=parseFloat (bodaFare); //converting input into number using parsefloat.

//initial values
    const basefare=50;
    const kilometerCharge=15;

//totalfare calculation formular
    let totalFare= basefare + (distanceInKilometer * kilometerCharge);

//printing of the values
    console.log (`Uko kwote?: ${distanceInKilometer}km`);
    console.log (`Ukikalia Pikipiki: ${basefare}KES`);
    console.log (`Mpaka Uko ${distanceInKilometer*kilometerCharge}KES`);
    console.log (`Total ${totalFare}KES`);
}
calculateBodaFare() //invoking/calling the function