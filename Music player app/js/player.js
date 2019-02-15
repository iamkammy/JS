var songs = ["Breaking20The20Habit20Official20Video20-20Linkin20Park-v2H4l9RpkwM.mp3",
			"Crawling20Official20Video20-20Linkin20Park-Gd9OhYroLN0.mp3",
			"Faint20Official20Video20-20Linkin20Park-LYU-8IFcDPw.mp3",
			"Numb20Official20Video20-20Linkin20Park-kXYiU_JCYtU.mp3",
			"One20More20Light20Official20Audio20-20Linkin20Park-3kaUvGSLMew.mp3",
			"Somewhere20I20Belong20Official20Video20-20Linkin20Park-zsCD5XCu6CM.mp3"];



var songTitle = document.getElementById('songTitle');
var songSlider = document.getElementById('songSlider');
var currentTime = document.getElementById('currentTime');
var duration = document.getElementById('duration');
var volumeSlider = document.getElementById('volumeSlider');
var nextSongTitle = document.getElementById('nextSongTitle');
var fileupload = document.getElementById('fileupload');
var uploadbutton = document.getElementById('uploadbutton');

// file upload section
	// fileupload.addEventListener("change", filestore);
	// function filestore(e){
	// 	let val = fileupload.value;
	// 	// val = val.split('-');
	// 	// console.log(val);
	// 	var target = e.currentTarget;
	// 	var filename = target.files[0].name;
	// }

// var $audio = $('#myAudio');
// $('input').on('change', function(e) {
//   var target = e.currentTarget;
//   var file = target.files[0];
//   console.log(file.name);
//   songs.push(file.name);
//   console.dir(songs);
//   var reader = new FileReader();
  
//   console.log($audio[0]);
//    if (target.files && file) {
//         var reader = new FileReader();
//         reader.onload = function (e) {
//         	// console.log(e.target.result);
//             $audio.attr('src', e.target.result);
//             $audio.play();
//         }
//         reader.readAsDataURL(file);
//     }
// });


document.getElementById('listbtn').addEventListener("click", function(e){
 	let temp = '';
 	for(var i=0; i<songs.length; i++){
 		temp+= `<div class="div">${songs[i]} <i class="fa fa-play" onclick="handle(this.parentElement)"></i> </div> </br>`
 	}
 	document.getElementById("listsec").innerHTML = temp;
})

function handle(t){
	alert("sdsd");
	console.log(t.innerHTML);
	var x = t.innerHTML;
	x = x.split('<');
	console.log(x);

	song.src = "songs/" + x[0];
	console.log(songTitle);
	songTitle.textContent = x[0]
	nextSongTitle.innerHTML = "<b>Next Song: </b>" + songs[currentSong + 1 % songs.length];
	song.playbackRate = 1;
	song.volume = volumeSlider.value;
	song.play();
	setTimeout(showDuration, 1000);

}

// song section
var song = new Audio();
var currentSong = 0;
// window.onload = loadSong;
 var playbutton=document.getElementById('btn1');
playbutton.onclick = loadSong;
function loadSong(){
	// alert("hdsj");
	song.src = "songs/" + songs[currentSong];
	console.log(songTitle);
	console.log("src="+ song.src);
	songTitle.textContent = (currentSong +1) +". "+ songs[currentSong];
	nextSongTitle.innerHTML = "<b>Next Song: </b>" + songs[currentSong + 1 % songs.length];
	song.playbackRate = 1;
	song.volume = volumeSlider.value;
	song.play();
	setTimeout(showDuration, 1000);
}
setInterval(updateSongSlider, 1000);

function updateSongSlider(){
	var c =Math.round(song.currentTime);
	songSlider.value = c;
	currentTime.textContent = convertTime(c);
	if(song.ended){
		next();
	}
}
function convertTime(secs){
	var min =Math.floor(secs/60);
	var sec = secs%60;
	min = (min < 10) ? "0"+ min : min; 
	sec = (sec<10) ? "0" + sec : sec; 
	return (min + ":" + sec);
}
function showDuration(){
	var d = Math.floor(song.duration);
	songSlider.setAttribute("max", d);
	duration.textContent = convertTime(d);
}
function playOrPauseSong(img){
	song.playbackRate = 1;

	if(song.paused){
		song.play();
			img.classList.remove('fa-play');
			img.classList.add('fa-pause-circle-o');
		// img.setAttribute("class", fa-pause-circle-o);
	} else{
		song.pause();
		img.classList.remove('fa-pause-circle-o');
			img.classList.add('fa-play');
		// img.setAttribute("class", fa-play);
	}
}

function next(){
currentSong = currentSong + 1 % songs.length;
loadSong(); 
}
function previous(){
	currentSong--;
	currentSong = (currentSong < 0) ? songs.length - 1 : currentSong;
	loadSong();
}
function seekSong(){
	song.currentTime = songSlider.value;
	currentTime.textContent = convertTime(song.currentTime);
}
function adjustVolume(){
	song.volume = volumeSlider.value;
}
function increasePlaybackRate(){
	song.playbackRate +=0.5;
	// console.log(songs.playbackRate);
}
function decreasePlaybackRate(){
	song.playbackRate -=0.5;
}