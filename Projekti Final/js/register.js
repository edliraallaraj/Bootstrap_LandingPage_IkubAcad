let myName = document.getElementById("myName");
let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmpasw = document.getElementById("confirmpasw");
let form = document.querySelector("form");
    
function validateInput(){
    //check username is empty
    if(myName.value.trim()===""){
        onError(myName,"Your Name cannot be empty");
     }else{
        myNameBool = true;
        onSuccess(myName);
     }
    if(username.value.trim()===""){
       onError(username,"Username cannot be empty");
    }else{
        usernameBool = true;
        onSuccess(username);
    }
    if(email.value.trim()===""){
        onError(email,"Email cannot be empty");
    }else{
        if(!isValidEmail(email.value.trim())){
            onError(email,"Email is not valid");
        }else{
            emailBool = true;
            onSuccess(email);
        }
    }
    //password
    if(password.value.trim()===""){
        onError(password,"Password cannot be empty");
     }else{
        passwordBool = true;
        onSuccess(password);
     }
     if(confirmpasw.value.trim()===""){
        onError(confirmpasw,"Confirm Passowrd cannot be empty");
     }else{
         if(password.value.trim()!==confirmpasw.value.trim()){
            onError(confirmpasw,"Password & Confirm password not matching");
         }else{
         confirmpaswBool = true;
         onSuccess(confirmpasw);
        }
        if(myNameBool === true && usernameBool === true && emailBool === true && passwordBool === true && confirmpaswBool == true){
            alert("Ju jeni regjistruar me sukses!")
            window.location.href="home.html";
        } 
    }
}

document.querySelector("button").addEventListener("click",(event)=>{
    event.preventDefault();
    validateInput();
});

function onSuccess(input){
    let parent=input.parentElement;
    let messageEle=parent.querySelector("span");
    messageEle.style.visibility="hidden"; 
    parent.classList.remove("error");
    parent.classList.add("success"); 
}
function onError(input,message){
    let parent=input.parentElement;
    let messageEle=parent.querySelector("span");
    messageEle.style.visibility="visible";
    messageEle.innerText=message;  
    parent.classList.add("error");
    parent.classList.remove("success");
}

function isValidEmail(email){
   return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
