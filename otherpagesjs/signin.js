let signArr = [];
let textInput = document.getElementById('textInput');
let passInput = document.getElementById('passInput');
let message = document.getElementById('message');
let message2 = document.getElementById('message2')
function signIn() {
    event.preventDefault();
    let inputName = textInput.value.trim();
    let inputPass = passInput.value.trim();


    message.textContent = "";
    message2.textContent = "";


     if (inputName === "") {
    message.textContent = "(x) Please enter a valid email or mobile number.";
    // return;
    }

    if (inputPass === "") {
        message2.textContent = "(x) Your password must contain between 4 and 60 characters.";     
    }
    if (inputName !== "" && inputPass !== "") {
        alert("Sign in successful!");
    }
    // let nameExists = signArr.some(
    // (item) => item.toLowerCase() === lowerName
//   );

//   if (nameExists) {
//     message.textContent = "This name has already been used.";
//     return;
//   }

//   message.textContent = "";
//   nameArr.push(inputName);
//     console.log('hi');


}
// let textInput = document.getElementById('textInput');
// let passInput = document.getElementById('passInput');

// function signIn() {
//     let inputName = textInput.value.trim();
//     if(inputName === "") {
//     message.textContent = "Please enter a name.";
//     return;
//   }
// console.log('hi');


// }