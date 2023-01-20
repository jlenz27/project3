function handleFormSubmission() {
    event.preventDefault();
    const firstLength = parseInt(document.querySelector("input#input1").value);
    document.getElementById("total-count").innerText = firstLength;
    console.log(firstLength);

}

window.addEventListener("load", function () {
    document.querySelector("form#input1").addEventListener("submit", handleFormSubmission);
});