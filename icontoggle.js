var m=document.getElementsByClassName("moon")[0];
var s=document.getElementsByClassName("sun")[0];
var sec=document.getElementsByClassName("s")[0];
var min=document.getElementsByClassName("m")[0];
var content=document.getElementById("main");
var clock=document.getElementById("full-clock");


function sun()
{
   
     m.classList.remove("dark-show");
     m.classList.add("dark-hide");
   
    
    s.classList.remove("light-hide");
    s.classList.add("light-show");

    document.getElementById("clock").style.color="black";
    
    sec.classList.remove("s-light");
    sec.classList.add("s-dark");
    min.classList.remove("m-light");
    min.classList.add("m-dark");

    content.classList.remove("container");
    content.classList.add("container1");

    clock.classList.remove("clock-in-dark");
    clock.classList.add("clock-in-light");
    
}
function moon()
{
    s.classList.remove("light-show");
    s.classList.add("light-hide");

    clock.classList.remove("clock-in-light");
    clock.classList.add("clock-in-dark");

    m.classList.remove("dark-hide");
    m.classList.add("dark-show");

    sec.classList.remove("s-dark");
    sec.classList.add("s-light");
    min.classList.remove("m-dark");
    min.classList.add("m-light");

    content.classList.remove("container1");
    content.classList.add("container");
    
    document.getElementById("clock").style.color="rgb(209, 185, 185)";
}