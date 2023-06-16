function loginUser(){
    var email =document.getElementById("email").value;
    var password =document.getElementById("password").value;
    console.log(email+ ""+ password);

    document.getElementById("answer").innerHTML=email + "" +password;
}
var age =20;
var address ="colombo"



 var num=20;
if(num>40){
    console.log("yes")
}

//family has three children 
//get each child weight from user input 
//find average 
//if avg >55 
//alert no worries 

function weight(){
var input1 =parseInt(document.getElementById("num1").value);
var input2 =parseInt(document.getElementById("num2").value)
var input3 =parseInt(document.getElementById("num3").value)


Avg=(input1 +input2 +input3)/3;

console.log(Avg)
if(Avg>55){
    alert("No wories ")
}

}

 var num =19;
 var answer=num%2;

 if (answer==0){
alert("even ")


 }
 else
 {
    alert("odd")
 }

 

//loginuser2 


function loginUser2(){



var email = document.getElementById("email2").value;
var password = document.getElementById("password2").value;


var uEmail ="abc@gmail.com"
var uPassword ="12345"


if (email==uEmail && password==uPassword)
{
    alert("login success")
}
else{
    alert("login fail")
}












}


