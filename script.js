const words = ["javascript", "html", "css", "coding", "developer", "puzzle", "keyboard"];
let wordDisplay = document.getElementById("word-display");
let userInput = document.getElementById("user-input");
let result = document.getElementById("result");

function newWord() {
    let randomIndex = Math.floor(Math.random() * words.length);
    wordDisplay.textContent = words[randomIndex];
    userInput.value = "";
}

userInput.addEventListener("input", function() {
    if (userInput.value === wordDisplay.textContent) {
        result.textContent = "✅ Correct!";
        setTimeout(() => {
            result.textContent = "";
            newWord();
        }, 1000);
    }
});

newWord();