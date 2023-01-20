//Business Logic

window.onload = initialize

function initialize() {
    let form = document.querySelector("form")
    form.onsubmit = takeForm
}

function takeForm(event) {
    event.preventDefault()
    let number1 = parseInt(document.getElementById("number1").value)
    let numberArray = makeBeepCalculations(number1)
    displayArray(numberArray)
}

function makeBeepCalculations(number1) {
    let numbers = [];
    for (let i = 0; i <= number1; i++) {
        numbers.push(i);
    }
    return numbers;

}

//User Interface Logic

function displayArray(numberArray) {
    const output1 = document.createElement("p")
    document.getElementById("results").append(output1);
    output1.append(numberArray)
}