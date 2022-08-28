let username = document.getElementById("username");
let password = document.getElementById("password");
let form = document.querySelector("form");

function validateInput(){
    //check username is empty
    if(username.value.trim()===""){
       onError(username,"Username cannot be empty");
    }else{
        usernameBool = true;
        onSuccess(username);
    }
    //password
    if(password.value.trim()===""){
        onError(password,"Password cannot be empty");
     }else{
        passwordBool = true;
        onSuccess(password);
     }if(usernameBool === true && passwordBool === true){
        alert("Ju jeni loguar me sukses!")
         window.location.href="home.html";
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


