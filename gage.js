
const usernameInput = document.getElementById("usernameInput");
const passwordInput = document.getElementById("passwordInput");
const emailInput = document.getElementById("emailInput");
const loginBtn = document.getElementById("loginBtn");
const registerBtn = document.getElementById("registerBtn");
const resultElement = document.getElementById("resultElement");

//Hardcoded credentials
const storedUsername = "Tshepang";
const storedPassword = "1608oliver";
const storedEmail = "oliver@gmail.com";

//LOGIN
loginBtn.onclick = function(e){ 
    e.preventDefault();

    if(usernameInput.value.trim() === storedUsername &&
       passwordInput.value.trim() === storedPassword &&
       emailInput.value.trim() === storedEmail
    ){
    resultElement.textContent = "Login successful ";
    resultElement.style.color = "green";
    }
    else{resultElement.textContent = "Incorrect credentials. Try again.";
        resultElement.style.color = "red";
    }
};
//REGISTER
registerBtn.onclick = function(e){
     e.preventDefault();
    const enteredUsername = usernameInput.value.trim();
    const enteredPassword = passwordInput.value.trim();
    const enteredEmail = emailInput.value.trim();
//basic field validation
    if(!enteredUsername || !enteredPassword || 
        !enteredEmail){
            resultElement.textContent = "All fields are required";
            resultElement.style.color = "orange";
            return;
    
        };
        //minimum lenght check
     if(enteredUsername.length < 6 || enteredPassword.length < 6){
        resultElement.textContent = "Username and password must be at least 6 characters.";
        resultElement.style.color = "orange";
        return;
     };
     //email check
     if(!enteredEmail.includes("@") || !enteredEmail.includes(".")){
        resultElement.textContent = "Enter a valid email address.";
        resultElement.style.color = "orange";
        return;
     };
     //success
     resultElement.textContent = "Registration successful!";
     resultElement.style.color = "green";   
     
};
//TOGGLE PASSWORD VISIBILITY
togglePassword.onclick = function(){
    const type = passwordInput.getAttribute("type");
    if (type === "password"){
        passwordInput.setAttribute("type", "text");
        togglePassword.classList.remove("fa-eye");
        togglePassword.classList.add("fa-eye-slash");
    }
    else{
        passwordInput.setAttribute("type", "password");
        togglePassword.classList.remove("fa-eye-slash");
        togglePassword.classList.add("fa-eye");
    }
};