function updateClock(){
    let now=new Date();
    let currentHour=now.getHours();
    let currentMin=now.getMinutes();
    let currentSec=now.getSeconds();

    currentMin=(currentMin<10)?"0"+currentMin:currentMin;
    currentSec=(currentSec<10)?"0"+currentSec:currentSec;


    let timeOfday=(currentHour<12)?'AM':'PM';

    currentHour=(currentHour>12)?currentHour-12:currentHour;
    currentHour=(currentHour==0)?12:currentHour;

    let currentTimeStr=currentHour+":"+currentMin+":"+currentSec+" "+timeOfday;
    document.getElementById("clock").innerHTML=currentTimeStr;
    

    const deg=6;
    currentHour=currentHour*30;
    currentMin=currentMin*deg;
    currentSec=currentSec*deg;

    document.getElementById("hr").style.transform=`rotateZ(${
        currentHour+(currentMin)/12
    }deg)`;
    document.getElementById("m").style.transform=`rotateZ(${
     currentMin}deg)`;
    document.getElementById("s").style.transform=`rotateZ(${
        currentSec}deg)`;

   

}

setInterval(
    ()=>{
updateClock();
    }
)