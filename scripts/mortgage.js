"use strict";

window.onload = init;

// text values
const principalLoanTextBox = document.getElementById("principalLoanTextBox");
const interestRateTextBox = document.getElementById("interestRateTextBox");
const yearTextBox = document.getElementById("yearTextBox");
const outputTextBox = document.getElementById("outputTextBox");

//buttons
const submitButton = document.getElementById("submitButton");
const resetButton = document.getElementById("resetButton");

window.onload = init;

function init (){
    submitButton.onclick = onSubmitButtonClicked;
    resetButton.onclick = onResetButtonClicked;
}

function onSubmitButtonClicked(){
    let userEnterField1 = Number(principalLoanTextBox.value);
    let userEnterField2 = Number(interestRateTextBox.value);
    let userEnterField3 = Number(yearTextBox.value);
    console.log("userEnterField1, " + userEnterField1);
    console.log("userEnterField2, " + userEnterField2);
    console.log("userEnterField3, " + userEnterField3);


    let sum = (userEnterField1 * userEnterField2) / userEnterField3;

    console.log(sum);

    outputTextBox.value = sum;
}

function onResetButtonClicked(){

}