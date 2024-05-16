"use strict";


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
    //I want my input fields to be empty
    principalLoanTextBox.value = "";
    interestRateTextBox.value = "";
    yearTextBox.value = "";
    outputTextBox.value = "";

    // let userEnterField1 = principalLoanTextBox;
    // let userEnterField2 = interestRateTextBox;
    // let userEnterField3 = yearTextBox;
    // console.log("" + userEnterField1);
    // console.log("" + userEnterField2);
    // console.log("" + userEnterField3);


    // //Hide the output
    // userEnterField1.value = "";
    // userEnterField2.value = "";
    // userEnterField3.value = "";
    // outputTextBox.value = "";
}