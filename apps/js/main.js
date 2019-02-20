function devDetect(){
hide(document.getElementById('lightdiv'));
toggle(document.getElementById('device-detector'));
}



document.getElementById('device-button').addEventListener('click', function(){
    var platform = document.getElementById('platform');
    var vendor = document.getElementById('vendor');
    var memory = document.getElementById('memory');
    var platformversion = document.getElementById('platform-verson');

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
