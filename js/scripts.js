function handleFormSubmission() {
    event.preventDefault();
    const passage = document.getElementById("text-passage").value;
    const word = document.getElementById("word").value;
    document.getElementById("total-count").innerText = wordCount;
    document.getElementById("selected-count").innerText = occurrencesOfWord;
    
  }
  
  window.addEventListener("load", function() {
    document.querySelector("form#word-counter").addEventListener("submit", handleFormSubmission);
  });