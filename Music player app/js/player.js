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

var song = new Audio();
var currentSong = 0;
window.onload = loadSong;

function loadSong(){
	// alert("hdsj");
	song.src = "songs/" + songs[currentSong];
}