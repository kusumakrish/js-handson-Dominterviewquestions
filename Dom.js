function changeText(){
    document.getElementById("changeText").innerHTML = "MERN stack";
}

let element = document.getElementsByTagName("h1");
let firstElement = element[0].innerText;
console.log(firstElement);


function showTime(){
let date = new Date();
let HH = date.getHours();
let MM = date.getMinutes();
let SS = date.getSeconds();

document.getElementById("HH").innerText = HH;
document.getElementById("MM").innerText = MM;
document.getElementById("SS").innerText = SS;

setTimeout(showTime , 1000);
}

showTime();

function replaceText(){
    document.getElementById("text").innerText = "Welcome to Evelution accademey";
}

$("#hideText").click(function(){
    $("#Hide").hide();
})