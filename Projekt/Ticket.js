//Ticket AbonamentCard
const DateStart = new Date();
DateStart.getDate().innerHTML = DateStart;
document.getElementById("data1").innerHTML = DateStart;
document.getElementById("data3").innerHTML = DateStart;
document.getElementById("data5").innerHTML = DateStart;
document.getElementById("data7").innerHTML = DateStart;

const DateEnd = new Date();
DateEnd.setDate(DateEnd.getDate() + 30);
document.getElementById("data2").innerHTML = DateEnd;

const DateEnd2 = new Date();
DateEnd2.setDate(DateEnd2.getDate() + 90);
document.getElementById("data4").innerHTML = DateEnd2;

const DateEnd3 = new Date();
DateEnd3.setDate(DateEnd3.getDate() + 180);
document.getElementById("data6").innerHTML = DateEnd3;

const DateEnd4 = new Date();
DateEnd4.setDate(DateEnd4.getDate() + 365);
document.getElementById("data8").innerHTML = DateEnd4;

//Search Engine
function PaymentButton(){
    let fname = document.forms["Form"]["fname"].value;
    let lname = document.forms["Form"]["lname"].value;
    let passw = document.forms["Form"]["passw"].value;
    let cwc = document.forms["Form"]["cwc"].value;

    if(fname == "" || lname == "" || passw == "" || cwc == ""){
        alert("Plese put Data!");
    }
    if(passw.length < 22 || passw.length > 22){
        alert("Incorect Data on Your Pin Card !");
    }
    if(cwc.length < 3 || cwc.length > 3){
        alert("Incorect Data on Your CWC Code !");
    }

    else if(passw.length == 22 && cwc.length == 3 ){
        alert("Success , Enjoy Movies :)")
        window.open("http://127.0.0.1:5500/SignInForm.html", "_blank");
    }
}

function AbonamentCard(){
    window.open("http://127.0.0.1:5500/AbonamentCard.html", "_blank");
}

function GetCard(){
    window.open("http://127.0.0.1:5500/AbonamentCard.html", "_blank");
}


    let priceMonth = 7.99;
    let PriceThereMonth = priceMonth * 3;
    let PriceSixMonth = PriceThereMonth * 2;
    let PriceYear = PriceSixMonth *2;

    document.getElementById("price1").innerHTML = priceMonth +"$";
    document.getElementById("price2").innerHTML = PriceThereMonth +"$";
    document.getElementById("price3").innerHTML = PriceSixMonth +"$";
    document.getElementById("price4").innerHTML = PriceYear +"$";

    function GetMyOneMonthCard(){
        let priceMonth = 7.99;
        document.getElementById("GetMyOneMonthCard").innerHTML = "Checked Price : " + priceMonth +"$";
    }
    function GetMyThereMonthCard(){
        let PriceThereMonth= 23.97;
        document.getElementById("GetMyOneMonthCard").innerHTML = "Checked Price : " + PriceThereMonth +"$";
    }
    function GetMySixMonthCard(){
        let PriceSixMonth = 47.94;
        document.getElementById("GetMyOneMonthCard").innerHTML = "Checked Price : " + PriceSixMonth +"$";
    }
    function GetMyOneYearCard(){
        let PriceYear = 95.88;
        document.getElementById("GetMyOneMonthCard").innerHTML =  "Checked Price : " + PriceYear +"$";
    }