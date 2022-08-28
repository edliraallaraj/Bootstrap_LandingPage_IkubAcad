let myName = document.getElementById("myName");
let username = document.getElementById("username");
let email = document.getElementById("email");
let message = document.getElementById("message");
let form = document.querySelector("form");
    
function validateInput(){
    //check username is empty
    if(myName.value.trim()===""){
        onError(myName,"Your Name cannot be empty");
     }else{
        myNameBool = true;
        onSuccess(myName);
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
    if(message.value.trim()===""){
        onError(message,"Message cannot be empty");
     }else{
        messageBool = true;
        onSuccess(message);
     }
     if(myNameBool === true && emailBool === true && messageBool === true){
            alert("Ju keni derguar me sukses! Falemnderit!");
    } 
}

document.querySelector("button").addEventListener("click",(event)=>{
    event.preventDefault();
    validateInput();
});

function onSuccess(input){
    let parent=input.parentElement;
    let messageEle=parent.querySelector("i");
    messageEle.style.visibility="hidden"; 
    parent.classList.remove("error");
    parent.classList.add("success"); 
}
function onError(input,message){
    let parent=input.parentElement;
    let messageEle=parent.querySelector("i");
    messageEle.style.visibility="visible";
    messageEle.innerText=message;  
    parent.classList.add("error");
    parent.classList.remove("success");
}

function isValidEmail(email){
   return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}