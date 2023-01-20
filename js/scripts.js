//Business Logic

window.onload = initialize

function initialize() {
    let form = document.querySelector("form")
    form.onsubmit = takeForm
}

function takeForm(event) {
    event.preventDefault()
    let number1 = parseInt(document.getElementById("number1").value)
    let numberArray = makeCalculations(number1)
    displayArray(numberArray)
}

function makeCalculations(number1) {
    let numberOutput = [];
    for (let i = 0; i <= number1; i++) {
       numberOutput.push(i);
    }
    for (let i=0; i <= numberOutput.length -1; i++){
        if (numberOutput[i].toString().includes(3)) {
          numberOutput[i] = "Won't you be my neighbor?"
        }
        else if (numberOutput[i].toString().includes(2)) {
          numberOutput[i] = "Boop!"
        }
        else if (numberOutput[i].toString().includes(1)) {
          numberOutput[i] = "Beep!"
        };
      };

      const finalOutput = numberOutput.join(", ");



    return finalOutput;
}




//User Interface Logic

function displayArray(numberArray) {
    const output1 = document.createElement("p")
    document.getElementById("results").append(output1);
    output1.append(numberArray)
}