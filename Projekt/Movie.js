//API
// const options = {
// 	method: 'POST',
// 	headers: {
// 		'X-RapidAPI-Key': '1d9d61b628msha45d7641e9311dfp15b749jsnbbaf28d2625d',
// 		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
// 	}
// };

// fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=game%20', options)
// 	.then(response => response.json())
// 	.then(data => console.log(data))
// 	.catch(err =>{
//         console.error(err);
//     });

// Movies.html
const nav_Genre = {
    genreNavCol1: {
        genre :["Action","Animation","Adventure","Biography"],
    },
    genreNavCol2 :{
        genre :["Documentar" ,"Drama","Family","Fiction"],
    },
    genreNavCol3 :{
        genre :["Fantasy","Horror","Thriller","Romance"],
    },
    genreNavCol4 : {
        genre : ["Western"]
    }
    }
    document.getElementById("Col1Gen1").innerHTML=nav_Genre.genreNavCol1.genre[0];
    document.getElementById("Col1Gen2").innerHTML=nav_Genre.genreNavCol1.genre[1];
    document.getElementById("Col1Gen3").innerHTML=nav_Genre.genreNavCol1.genre[2];
    document.getElementById("Col1Gen4").innerHTML=nav_Genre.genreNavCol1.genre[3];
    
    document.getElementById("Col2Gen1").innerHTML=nav_Genre.genreNavCol2.genre[0];
    document.getElementById("Col2Gen2").innerHTML=nav_Genre.genreNavCol2.genre[1];
    document.getElementById("Col2Gen3").innerHTML=nav_Genre.genreNavCol2.genre[2];
    document.getElementById("Col2Gen4").innerHTML=nav_Genre.genreNavCol2.genre[3];
    
    document.getElementById("Col3Gen1").innerHTML=nav_Genre.genreNavCol3.genre[0];
    document.getElementById("Col3Gen2").innerHTML=nav_Genre.genreNavCol3.genre[1];
    document.getElementById("Col3Gen3").innerHTML=nav_Genre.genreNavCol3.genre[2];
    document.getElementById("Col3Gen4").innerHTML=nav_Genre.genreNavCol3.genre[3];
    
    document.getElementById("Col4Gen1").innerHTML =nav_Genre.genreNavCol4.genre[0];
    
    const BodyGenre ={
        genre : ["Action","Animation","Adventure","Biography","Documentar" ,"Drama","Family","Fiction","Fantasy","Horror","Thriller","Romance","Western"] 
    }
    document.getElementById("BodyGenre1").innerHTML =BodyGenre.genre[0];
    document.getElementById("BodyGenre01").innerHTML =BodyGenre.genre[0];
    document.getElementById("BodyGenre2").innerHTML =BodyGenre.genre[1];
    document.getElementById("BodyGenre02").innerHTML =BodyGenre.genre[1];
    document.getElementById("BodyGenre3").innerHTML =BodyGenre.genre[2];
    document.getElementById("BodyGenre03").innerHTML =BodyGenre.genre[2];
    document.getElementById("BodyGenre4").innerHTML =BodyGenre.genre[3];
    document.getElementById("BodyGenre04").innerHTML =BodyGenre.genre[3];
    document.getElementById("BodyGenre5").innerHTML =BodyGenre.genre[4];
    document.getElementById("BodyGenre05").innerHTML =BodyGenre.genre[4];
    document.getElementById("BodyGenre6").innerHTML =BodyGenre.genre[5];
    document.getElementById("BodyGenre06").innerHTML =BodyGenre.genre[5];
    document.getElementById("BodyGenre7").innerHTML =BodyGenre.genre[6];
    document.getElementById("BodyGenre07").innerHTML =BodyGenre.genre[6];
    document.getElementById("BodyGenre8").innerHTML =BodyGenre.genre[7];
    document.getElementById("BodyGenre08").innerHTML =BodyGenre.genre[7];
    document.getElementById("BodyGenre9").innerHTML =BodyGenre.genre[8];
    document.getElementById("BodyGenre09").innerHTML =BodyGenre.genre[8];
    document.getElementById("BodyGenre10").innerHTML =BodyGenre.genre[9];
    document.getElementById("BodyGenre010").innerHTML =BodyGenre.genre[9];
    document.getElementById("BodyGenre11").innerHTML =BodyGenre.genre[10];
    document.getElementById("BodyGenre011").innerHTML =BodyGenre.genre[10];
    document.getElementById("BodyGenre12").innerHTML =BodyGenre.genre[11];
    document.getElementById("BodyGenre012").innerHTML =BodyGenre.genre[11];
    document.getElementById("BodyGenre13").innerHTML =BodyGenre.genre[12];
    document.getElementById("BodyGenre013").innerHTML =BodyGenre.genre[12];
    
    // Form.html
    const form=document.getElementById('form');
    const ussername=document.getElementById('name');
    const lastName=document.getElementById('lname');
    const email=document.getElementById('EMAIL');
    const tel=document.getElementById('phone');
    const password=document.getElementById('pass');
    const checked=document.getElementById('myCheck');
    
    form.addEventListener('submit', (e) =>{
        e.preventDefault();
        checkInputs();
    })
    function checkInputs(){
        const ussernameValue = ussername.value.trim();
        const lastNameVlue = lastName.value.trim();
        const emailValue = email.value.trim();
        const phoneValue = phone.value
        const passwordValue = password.value
        const checkedValue = checked.value
    }
    
    function RegisterForm(){
        let  ussername = document.forms["form"]["name"].value;
        let  lastName = document.forms["form"]["lname"].value;
        let  email = document.forms["form"]["email"].value;
        let  tel = document.forms["form"]["phone"].value;
        let password = document.forms["form"]["password"].value;
        let checked = document.forms["form"]["checked"].value;
        
        if(ussername === "" || lastName=="" || email=="" || tel=="" || password=="" || checked==""){
            alert("Please enter information");
        }
        if(password.length <8 || password.length >20 ){
            alert("Password should be 8-20 characters");
        }
        if(password == "password" || password == "Password"){
            alert("Password can not be Password");
        }
        if(password >  8 || password < 20){  
            window.open("http://127.0.0.1:5500/SignInForm.html", "_blank");
        }
    }
    // Sing in Form
    function SingIn(){
        let ussername = document.forms["MyForm"]["Emaili"].value;
        let password = document.forms["MyForm"]["pass"].value;
    
        if(ussername == "" &&  password == ""){
            alert("Pleade put Data!")
        }
        if(ussername=="majaegli27@gmail.com" && password=="12345678" ){
        window.open("http://127.0.0.1:5500/Movies.html", "_blank");
        }
    
        if(ussername=="eglimaja247@gmail.com" && password=="87654321" ){
        window.open("http://127.0.0.1:5500/Movies.html", "_blank");
        }
    
        if(ussername=="majaegli1337@gmail.com" && password=="1234abcd" ){
        window.open("http://127.0.0.1:5500/Movies.html", "_blank");
        }
        if(ussername != "" &&  password != ""){
            alert("Unknown User : Regist Here:");
            window.open("http://127.0.0.1:5500/RegistForm.html", "_blank");
            
        }
        
    }
    
    function subscribtion(){
        window.open("http://127.0.0.1:5500/Event.html", "_blank");
    }
    function CinemaTicket(){
        window.open("http://127.0.0.1:5500/Cinema.html", "_blank");
    }
    
    
    
    function ContactForm(){
        let name = document.forms["ContactForm"]["fname"].value;
        let lname = document.forms["ContactForm"]["lname"].value;
        let City = document.forms["ContactForm"]["country"].value;
        if(name == "" || lname == "" || City == ""){
            alert("Please Put Data !");
        }
        else{
            alert("Your Message is Successfully Send :)");
        }
    }
    
    function WatchMovie(){
        window.open("http://127.0.0.1:5500/WatchMovie.html");
    }
    
    function SearchEngine(){
        let text = document.forms["Form"]["Search"].value;
        let text2 =document.getElementById("Search").value;
        if(text == "Regist" || text2 == "regist" ){
            window.open("http://127.0.0.1:5500/RegistForm.html" , "_blank");
        }
        if(text == "Subscribe" || text2== "subscribe"){
            window.open("http://127.0.0.1:5500/Event.html" , "_blank");
        }
        if(text == "Cinema" || text == "Ticket" || text2 == "cinema" || text2 == "ticket"){
            window.open("http://127.0.0.1:5500/Cinema.html","_blank");
        }
        if(text == "drama" || text == "thriller" || text2 == "horror" || text2 == "family" || text == "adventure" || text == "biography" || text2 == "fantasy" || text2 == "animation"){
            window.open("http://127.0.0.1:5500/Movies.html");
        }
        if(text == "" || text2 == " "){
            alert("Oops Empty Data!")
        }
        else{
            alert("Unknown Subject!")
        }
    }