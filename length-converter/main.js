let input = document.getElementById('input')
let result = document.getElementById('result')
let inputType = document.getElementById('inputType')
let resultType = document.getElementById('resultType')
let inputTypeValue, resultTypeValue;

// Add event listener
input.addEventListener("keyup", myResult);
result.addEventListener("change", myResult);
resultType.addEventListener("change", myResult);

// taking initial value
inputTypeValue = inputType.value;
resultTypeValue = resultType.value;


function myResult() {

    /* when we change the input and output type vale we need to update the
     inputTypeValue and resultTypeValue
     */

    inputTypeValue = inputType.value;
    resultTypeValue = resultType.value;

    // now compare the input and resultType value and add formula
    if (inputTypeValue === 'meter' && resultTypeValue === 'kilometer') {
        result.value = Number(input.value) * 0.001;
    } else if(inputTypeValue === "meter" && resultTypeValue === 'centimeter') {
        result.value = Number(input.value) * 100;
    } else if (inputTypeValue === 'meter' && resultTypeValue === 'meter') {{
        result.value = input.value;
    }}

    if (inputTypeValue === "kilometer" && resultTypeValue === "meter") {
        //this is kilometer to meter formula
        result.value = Number(input.value) * 1000;
    } else if (inputTypeValue === "kilometer" && resultTypeValue === "centimeter") {
        //this is kilometer to Centimeter formula
        result.value = Number(input.value) * 100000;
    } else if (inputTypeValue === "kilometre" && resultTypeValue === "kilometer") {
        //this is kilometer to kilometer formula
        result.value = input.value
    }

    if (inputTypeValue === "Centimeter" && resultTypeValue === "kilometer") {
        //this is Centimeter to kilometer formula
        result.value = Number(input.value) * 0.00001;
    } else if (inputTypeValue === "Centimeter" && resultTypeValue === "meter") {
        //this is Centimeter to meter formula
        result.value = Number(input.value) * 0.01;
    } else if(inputTypeValue === "Centimeter" && resultTypeValue === "centimeter") {
        //this is Centimeter to Centimeter formula
        result.value = input.value
    }

}