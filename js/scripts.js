//Business Logic

window.onload = initialize

function initialize() {
  let form = document.querySelector("form")
  form.onsubmit = takeForm
}

function takeForm(event) {
  event.preventDefault()
  let number1= parseInt(document.getElementById("number1").value)
  let numberArray = makeBeepCalculations(number1)
  displayArray(numberArray)
}

function makeBeepCalculations(number1) {



  //User Interface Logic

  function displayArray(numberArray) {
    let ulFromArray = makeULFromArray(array)
    let output = document.getElementById("output")
    output.innerText = ""
   output.append(ulFromArray)
  }
  