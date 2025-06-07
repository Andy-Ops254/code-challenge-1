function calculateBodaFare() {
    let bodaFare= prompt("Unafika wapi Mkubwa? Kilometer ngapi");
    const distanceInKilometer=parseFloat (bodaFare);


    const basefare=50;
    const kilometerCharge=15;


    let totalFare= basefare + (distanceInKilometer * kilometerCharge);


    console.log (`Uko kwote?: ${distanceInKilometer}km`);
    console.log (`Ukikalia Pikipiki: ${basefare}KES`);
    console.log (`Mpaka Uko ${distanceInKilometer*kilometerCharge}KES`);
    console.log (`Total ${totalFare}KES`);
}
calculateBodaFare()