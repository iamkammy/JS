$(function(){

var container = $('div.container');
	$('button#get').click(function(){

				$.ajax({
					type: 'GET',
					url: 'data/countries.json',
					dataType: 'json',
					cache: false,
					success: function(data){
					
						console.log("data mila" + data);

					// 	$.each(data, function(index, item){
					// 		console.log(item);
					// 	});
					},
					error:function(data){ 
						console.log(data)
					}
				});
				// alert("daat");
	});

});