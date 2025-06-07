//declaration and initialization of variables
function estimateTransactionFee() {
    let amount= prompt("Unatuma Ngapi"); //prompt message
    const amountToSend=parseFloat (amount); //converting string to numbers using parsefloat.

//stating the initial transaction fee & stating the formular to find the transacted amount after the fee is applied.
    const basicTransaction=0.015;
    let transactedAmount= basicTransaction*amountToSend;

//this is the logical bit, i have use the if, else if, else ladder.
    const minimumFee=10; //this shows there is a minimum limit if the transacted amount is less than 10 which will result to it being 10.
    const maximumFee=70;//this shows there is a maximum limit if the transacted amount is more than 70 which will result to it being 70.
    let calculatedTransactionFee;
    if (transactedAmount< minimumFee) {
        calculatedTransactionFee= minimumFee; //this logical operation seeks to compare the transacted amount and the minimum fee. if its below 10 its assigned 10.
    }
    else if( transactedAmount>maximumFee) {
        calculatedTransactionFee=maximumFee; //this logical operation seeks to compare the transacted amount and the maximum fee. if its above 70 its assigned 70.
    }
    else {
        calculatedTransactionFee=transactedAmount; 
    }

    const totalBill= amountToSend+calculatedTransactionFee;

//prints out the designed output
    console.log (`Sending ${amountToSend}KES`);
    console.log (`Calculated Transaction Fee ${transactedAmount}KES`);
    console.log (`Total amount to be debited ${totalBill}KES`);
    console.log (`Send Money Securely!`)
}
estimateTransactionFee() //call function