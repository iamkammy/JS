$(document).ready(()=>{
$('#searchForm').on('submit', (e)=>{
	$('.loader').show();
	let searchText = $('#searchText').val();
	getMovies(searchText);
	e.preventDefault();
	$('#searchText').val('');
});
});


function getMovies(searchText){
	console.log(searchText);
	axios.get(`http://www.omdbapi.com/?s=${searchText}&apikey=9e930b0`)
	.then((response)=>{
	$('.loader').hide();

			console.log("response:",response);

			if(response.data.Response=="True"){
	let movies = response.data.Search;
		console.log(movies);
		let output = '';
		$.each(movies, (index, movie)=>{
			console.log(index,movie);
			
			output+= `
			<div class="col-md-3 col-sm-4 col-xs-6">
			<div class="well text-center">
			<div id="img-cont">
			<img src= "${movie.Poster}" />
			</div>
			<h5>${movie.Title} </h5>
			<a onclick="movieSelected('${movie.imdbID}')" class="btn btn-primary" href="#">Movie Details</a>
			</div>
			</div>

			`;
				
		})
		$('#movies').html(output);	
		}

		else{
			swal({
			  icon: 'error',
			  title: 'Oops...',
			  text: `${response.data.Error}`,
			  // text: 'Please enter a valid movie name',
			  footer: '<a href>Why do I have this issue?</a>'
			})
			output='';
			$('#movies').html(output);	
		}
	
	})
	.catch((err)=>{
	
		console.log(err);
	});

}

 function movieSelected(id){
 	sessionStorage.setItem('movieId', id);
 	window.location.href = 'movie.html';
 	return false;
}

function getMovie(){
	let movieId = sessionStorage.getItem('movieId');

	axios.get(`http://www.omdbapi.com/?i=${movieId}&apikey=9e930b0`)
	.then((response)=>{
		console.log(response);
		let movie = response.data;

		let temp = `
			<div class="row">
			<div class="col-md-4 col-sm-4 col-xs-6">
					<div id="detail-img">
					<img src="${movie.Poster}" class="thumbnail">
					</div>
			</div>
			<div class="col-md-8">
			<h2>${movie.Title}</h2>
			<ul class="list-group">
			<li class="list-group-item"><strong>Genre:</strong> ${movie.Genre}</li>
			<li class="list-group-item"><strong>Released:</strong> ${movie.Released}</li>
			<li class="list-group-item"><strong>Rated:</strong> ${movie.Rated}</li>
			<li class="list-group-item"><strong>IMDB Rating:</strong> ${movie.imdbRating}</li>
			<li class="list-group-item"><strong>Director:</strong> ${movie.Director}</li>
			<li class="list-group-item"><strong>Writer:</strong> ${movie.Writer}</li>
			<li class="list-group-item"><strong>Actors:</strong> ${movie.Actors}</li>

			</ul>
			</div>

			</div>

			<div class="row mt-4">
			<div class="well">
			<h3>Plot</h3>
			${movie.Plot}
			<hr>
			<a href="http://imdb.com/title/${movie.imdbID}" target="_blank" class="btn btn-primary">View IMDB</a>
			<a href="index.html" class="btn btn-secondary">Go Back To Search</a>

			</div>



			</div>
		  `;
		  $('#movie').html(temp);
	})
	.catch((err)=>{
			
		console.log(err);
	});
}