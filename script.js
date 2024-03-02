let userInput
let encryptRules = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
]


//Function to alter the text of various parts of the code
function showText(tag , text){
    let line = document.getElementById(tag);
    line.innerHTML = text;
}

//Function to erase the default text when the input area is selected
function eraseDefaultText(){
    showText("input", "")   
}

//Funtion to return the default text when the input area stops being selected
function returnDefaultText(){
    showText("input", "Type here")
}

//Function to encrypt the input
function encrypt(){
    userInput = document.getElementById("input").value;
    let userInputNormalized = userInput.normalize("NFD"); 
    
    //Applies the rules of the encryption
    let encryptedText =
        userInputNormalized
        .replace(/e/g, "enter")
        .replace(/E/g, "ENTER")
        .replace(/I/g, "IMEA")
        .replace(/i/g, "imea")
        .replace(/A/g, "AI")
        .replace(/a/g, "ai")
        .replace(/O/g, "OBER")
        .replace(/o/g, "ober")
        .replace(/U/g, "UFAT")
        .replace(/u/g, "ufat")

    //Displays the Encrypted text
    showText("text_output", encryptedText)
    showText("default_paragraph", "")
}

//Function to encrypt the input
function decrypt(){
    userInput = document.getElementById("input").value;
    let userInputNormalized = userInput.normalize("NFD"); 

    //Applies the rules of the decryption
    let encryptedText = userInputNormalized
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u")

    //Displays the Encrypted text
    showText("text_output", encryptedText)
    showText("default_paragraph", "")

    //Removes image after encrypting
    document.getElementById("image").src=""

    //removes alt of the image
    document.getElementById("image").alt=""
}

function copyEncryptedText(){
    let outputText = document.getElementById("text_output").innerText;
    navigator.clipboard.writeText(outputText);
    showText("copy_button", "Copied to clipboard!");

}