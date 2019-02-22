function devDetect(){
hide(document.getElementById('lightdiv'));
show(document.getElementById('device-detector'));
}

function stopwatch(){
    show(document.getElementById('stopwatch'));
    hide(document.getElementById('lightdiv'));
    hide(document.getElementById('device-detector'));
}

document.getElementById('device-button').addEventListener('click', function(){
    var platform = document.getElementById('platform');
    var vendor = document.getElementById('vendor');
    var memory = document.getElementById('memory');
    var platformversion = document.getElementById('platform-verson');

       $("#loader").show();
   setTimeout(wen, 1900);
   function wen(){
    $("#loader").hide();
    $(".output").show();
   }
    if(navigator.userAgent.match(/Windows/i)){
       platform.innerHTML = `<b>OS :</b> Its windows`
       vendor.innerHTML = `<b>Vendor: </b> ${navigator.vendor}`;
        memory.innerHTML= `<b>Memory: </b> ${navigator.deviceMemory} GB`;
        platformversion.innerHTML= `<b>Version :</b>${navigator.platform}`;
   } else if(navigator.userAgent.match(/Mac OS X/i)){
       platform.textContent = "Its Mac !!!";
   } else if(navigator.userAgent.match(/Linux/i)){
       platform.textContent = "Its Linux !!!";
   }
})


function show(elem){
    elem.style.display="block";
}
function hide(elem){
    elem.style.display="none";
}
function toggle(elem){
    console.log(elem);
    if (elem.style.display == "block"){
        elem.style.display = "none";
    } else{
        elem.style.display = "block";
    }
}


// for stopwatch
var ms=0, s=0, m=0;
var timer;

var stopwatchelement = document.querySelector('.stopwatch-text');
var lapseContainer = document.querySelector('.laps');
var timespan = document.querySelector('#timespan');

setInterval(mytime, 1000);
function mytime(){
var date = new Date();
// var hours = (date.getHours() < 10 ? "0"+date.getHours() :date.getHours() );
// var mins = (date.getMinutes() < 10 ? "0"+date.getMinutes() :date.getMinutes() );
// timespan.innerText = hours +":"+ mins;
timespan.textContent = date.toLocaleTimeString();

}

function start(){
    if(!timer){
        timer = setInterval(run, 10);
    }
}

function run(){
    stopwatchelement.innerText = getTimer();
    ms++;
    if(ms == 100){
        ms= 0;
        s++;
    }
    if( s == 60){
        s=0;
        m++;
    }
}
function pause(){
    stopTimer();
}
function stop(){
    stopTimer();
    ms=0;
    s=0;
    m=0;
    stopwatchelement.innerText = getTimer();
}
function stopTimer(){
    clearInterval(timer);
    timer = false;
}
function getTimer(){
    return  (m < 10 ? "0"+m: m) + ":" + (s < 10 ? "0"+s: s)  + ":" + (ms < 10 ? "0"+ms : ms); 
}
function restart(){
    stop();
    start();
}
function lap(){
    if(timer){
        var li = document.createElement('li');
        li.innerText = getTimer();
        lapseContainer.appendChild(li);
    }
}
function resetLaps(){
    lapseContainer.innerHTML = '';
}