
//getting value of various ids
var principal = document.getElementById("principal").value;
var rate = document.getElementById("rate").value;
var years = document.getElementById("years").value;
var interest = principal * years * rate /100;
var year = new Date().getFullYear()+parseInt(years);
var result = document.getElementById("result").value;

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerHTML=rateval;
}
             
function compute()
{
    

   
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = (principal * years * rate) /100;
    var year = new Date().getFullYear()+parseInt(years);
    
    //condition: alert enter positive number if empty or value is 0
    if (principal == 0 || principal== "" || principal < 0 ){
        alert("Enter a positive number")
    }
    else{ 
    //get value and display  for principal
    var principal1 = document.getElementById("principal").value;
    document.getElementById("principal1").innerHTML="If you deposit" + " " + "<span>"+principal1+ "</span>" +"," +"<br/>" ; 
    //get value and display for rate 
    var rate1 = document.getElementById("rate").value;
    document.getElementById("rate1").innerHTML="at an interest rate of" + " " +  "<span>"+rate1  + "&#37"+"</span>"+ "." +"<br/>" ;
   
    //display value for reult and year
    document.getElementById("result").innerHTML="You will receive an amount of" + " " +"<span>"+ interest+"</span>" + "," +"<br/>";
    document.getElementById("year1").innerHTML="in the year" + " " + "<span>" +year+ "</span>" +"." +"<br/>";
}
}

      