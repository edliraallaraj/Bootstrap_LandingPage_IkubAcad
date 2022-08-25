
let MovieTitles =["The Batman","The Cellar","The Lost City" ,"Morbius" ,"Monstrous"];
document.getElementById("CinemaMovie1").innerHTML = MovieTitles[0];
document.getElementById("CinemaMovie2").innerHTML = MovieTitles[1];
document.getElementById("CinemaMovie3").innerHTML = MovieTitles[2];
document.getElementById("CinemaMovie4").innerHTML = MovieTitles[3];
document.getElementById("CinemaMovie5").innerHTML = MovieTitles[4];

const MovieDescription={
Genre : {
    GenreMovies :["Action","Animation","Adventure","Biography","Documentar" ,"Drama","Family","Fiction","Fantasy","Horror","Thriller","Romance"]
},
evaluation : {
    value :["5☆☆☆☆☆","6☆☆☆☆☆☆","7☆☆☆☆☆☆☆","9☆☆☆☆☆☆☆☆","10☆☆☆☆☆☆☆☆☆☆"]
},
actors :{
    ActorNames :["Robert De Niro","Jack Nicholson","Denzel Washington"," Johnny Depp","Kevin Spacey","Russell Crowe","Brad Pitt","Angelina Jolie","Leonardo DiCaprio"]
},
duration_time : {
    time : [80 , 100 , 110 , 120 , 130]
},
}
// Genres
document.getElementById("GenreMovie1").innerHTML = MovieDescription.Genre.GenreMovies[0] + " , " + MovieDescription.Genre.GenreMovies[10];
document.getElementById("GenreMovie2").innerHTML = MovieDescription.Genre.GenreMovies[9] + " , " + MovieDescription.Genre.GenreMovies[10];
document.getElementById("GenreMovie3").innerHTML = MovieDescription.Genre.GenreMovies[2] + " , "+ MovieDescription.Genre.GenreMovies[8];
document.getElementById("GenreMovie4").innerHTML = MovieDescription.Genre.GenreMovies[5] + " , "+ MovieDescription.Genre.GenreMovies[8];
document.getElementById("GenreMovie5").innerHTML = MovieDescription.Genre.GenreMovies[8] + " , "+ MovieDescription.Genre.GenreMovies[10];

// Actors
document.getElementById("ActorMovie1").innerHTML = MovieDescription.actors.ActorNames[0] + " , " + MovieDescription.actors.ActorNames[1];
document.getElementById("ActorMovie2").innerHTML = MovieDescription.actors.ActorNames[2] + " , " + MovieDescription.actors.ActorNames[3];
document.getElementById("ActorMovie3").innerHTML = MovieDescription.actors.ActorNames[4] + " , " + MovieDescription.actors.ActorNames[5];
document.getElementById("ActorMovie4").innerHTML = MovieDescription.actors.ActorNames[6] + " , " + MovieDescription.actors.ActorNames[7];
document.getElementById("ActorMovie5").innerHTML = MovieDescription.actors.ActorNames[8] + " , " + MovieDescription.actors.ActorNames[1];

//evaluation 
document.getElementById("evaluationMOVIE1").innerHTML = MovieDescription.evaluation.value[1];
document.getElementById("evaluationMOVIE2").innerHTML = MovieDescription.evaluation.value[4];
document.getElementById("evaluationMOVIE3").innerHTML = MovieDescription.evaluation.value[3];
document.getElementById("evaluationMOVIE4").innerHTML = MovieDescription.evaluation.value[0];
document.getElementById("evaluationMOVIE5").innerHTML = MovieDescription.evaluation.value[2];

// duration_time
document.getElementById("timeMovie1").innerHTML = MovieDescription.duration_time.time[2] + " min";
document.getElementById("timeMovie2").innerHTML = MovieDescription.duration_time.time[4] + " min";
document.getElementById("timeMovie3").innerHTML = MovieDescription.duration_time.time[0] + " min";
document.getElementById("timeMovie4").innerHTML = MovieDescription.duration_time.time[3] + " min";
document.getElementById("timeMovie5").innerHTML = MovieDescription.duration_time.time[1] + " min";

const DateStart = new Date('August 25, 2022 16:15:30');
document.getElementById("data1").innerHTML = DateStart;

const DateStart2 = new Date('August 26, 2022 17:15:30');
document.getElementById("data2").innerHTML = DateStart2;

const DateStart3 = new Date('August 27, 2022 18:25:30');
document.getElementById("data3").innerHTML = DateStart3;

const DateStart4 = new Date('August 28, 2022 16:15:30');
document.getElementById("data4").innerHTML = DateStart4;

const DateStart5 = new Date('August 28, 2022 20:05:30');
document.getElementById("data5").innerHTML = DateStart5;

function CinemaMovie1(){
    let title = "The Batman";
    document.getElementById("movie1").innerHTML = title;
    
    const DateStart = new Date();
    DateStart.setDate(DateStart.getDate() + 2);
    document.getElementById("ChoosenDate1").innerHTML = DateStart;

    let barcode = 22345678;
    document.getElementById("barcode").innerHTML = "#" +barcode;
    document.getElementById("abc").innerHTML = "Make Sure That You Make a Screenshoot of Your Ticket";
    document.getElementById("cinema").innerHTML = "Cineplex QTU Tirane";
}

function CinemaMovie2(){
    let title = "The Cellar";
    document.getElementById("movie1").innerHTML = title;
    
    const DateStart = new Date();
    DateStart.setDate(DateStart.getDate() + 3);
    document.getElementById("ChoosenDate1").innerHTML = DateStart;

    let barcode = 33245679;
    document.getElementById("barcode").innerHTML = "#" +barcode;
    document.getElementById("abc").innerHTML = "Make Sure That You Make a Screenshoot of Your Ticket";
    document.getElementById("cinema").innerHTML = "Cineplex QTU Tirane";
    
}

function CinemaMovie3(){
    let title = "The Lost City";
    document.getElementById("movie1").innerHTML = title;
    
    const DateStart = new Date();
    DateStart.setDate(DateStart.getDate() + 4);
    document.getElementById("ChoosenDate1").innerHTML = DateStart;

    let barcode = 45245644;
    document.getElementById("barcode").innerHTML = "#" +barcode;
    document.getElementById("abc").innerHTML = "Make Sure That You Make a Screenshoot of Your Ticket";
    document.getElementById("cinema").innerHTML = "Cineplex QTU Tirane";
}

function CinemaMovie4(){
    let title = "Morbius";
    document.getElementById("movie1").innerHTML = title;
    
    const DateStart = new Date();
    DateStart.setDate(DateStart.getDate() + 5);
    document.getElementById("ChoosenDate1").innerHTML = DateStart;

    let barcode = 55243009;
    document.getElementById("barcode").innerHTML = "#" +barcode;
    document.getElementById("abc").innerHTML = "Make Sure That You Make a Screenshoot of Your Ticket";
    document.getElementById("cinema").innerHTML = "Cineplex QTU Tirane";
}

function CinemaMovie5(){
    let title = "Monstrous";
    document.getElementById("movie1").innerHTML = title;
    
    const DateStart = new Date();
    DateStart.setDate(DateStart.getDate() + 6);
    document.getElementById("ChoosenDate1").innerHTML = DateStart;

    let barcode = 65283709;
    document.getElementById("barcode").innerHTML = "#" +barcode;
    document.getElementById("abc").innerHTML = "Make Sure That You Make a Screenshoot of Your Ticket";
    document.getElementById("cinema").innerHTML = "Cineplex QTU Tirane";
}

function SendFullName(){
    let fname = document.forms["SendMyNameForm"]["FName"].value;
    if(fname === ""){
        alert("Put Your Data");
    }
    else{
        document.getElementById("FullName").innerHTML = fname;
    }

}

function Site(){
    let ChoosenSite = document.getElementById("sit");
    let price= 6.55;
    if(ChoosenSite.checked == true){
        document.getElementById("chair1").innerHTML = " Chair 1 Row A " ;
        document.getElementById("price1").innerHTML = price + "$";
    }
    else{
        document.getElementById("chair1").innerHTML = " ";
    }
}
function Site2(){
    let ChoosenSite = document.getElementById("sit1");
    let price= 6.55;
    if(ChoosenSite.checked == true){
        document.getElementById("chair2").innerHTML = " Chair 2 Row A ";
        document.getElementById("price2").innerHTML = price + "$";
    }
    else{
        document.getElementById("chair2").innerHTML = " ";
    }
}
function Site3(){
    let ChoosenSite = document.getElementById("sit2");
    let price= 6.55;
    if(ChoosenSite.checked == true){
        document.getElementById("chair3").innerHTML = " Chair 3 Row A ";
        document.getElementById("price3").innerHTML = price + "$";
    }
    else{
        document.getElementById("chair3").innerHTML = " ";
    }
}
function Site4(){
    let ChoosenSite = document.getElementById("sit3");
    let price= 6.55;
    if(ChoosenSite.checked == true){
        document.getElementById("chair4").innerHTML = " Chair 4 Row A ";
        document.getElementById("price4").innerHTML = price + "$";
    }
    else{
        document.getElementById("chair4").innerHTML = " ";
    }
}
function Site5(){
    let ChoosenSite = document.getElementById("sit4");
    let price= 6.55;
    if(ChoosenSite.checked == true){
        document.getElementById("chair5").innerHTML = " Chair 5 Row A ";
        document.getElementById("price5").innerHTML = price + "$";
    }
    else{
        document.getElementById("chair5").innerHTML = " ";
    }
}
function Site6(){
    let ChoosenSite = document.getElementById("sit6");
    if(ChoosenSite.checked == true){
        document.getElementById("chair1").innerHTML = " Chair 6 Row A ";
    }
    else{
        document.getElementById("chair1").innerHTML = " ";
    }
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
    if(text == "Euphoria" || text == "Movies" || text2 == "Bee Movie" || text2 == "Ronaldo" || text == "The 100" || text == "Avatar" || text2 == "Ammy" || text2 == "City Of Ember"){
        window.open("http://127.0.0.1:5500/Movies.html","_blank");
    }
    if(text == "" || text2 == " "){
        alert("Oops Empty Data!")
    }
    else{
        alert("Unknown Subject!")
    }
}