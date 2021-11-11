var movie = {
	exec: function() {
		$("#btn-search").on("click", ()=> {
			this.search();
		});
	},
	
	search: function() {		
		var query = $("#query").val();
		//alert("질의: " + query);
						
		$.ajax({
			url: "/recmv/api/movie/searchMovie",
			type: "GET",
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			data: {query: query}	
			//dataType: "text"
		}).done(function(resp){
			var ret = resp[0];
			console.log(ret);
			var loc = "./search?title=" + ret.title;
			location.replace(loc);			
		}).fail(function(err){
			alert(JSON.stringify(err));
		});				
	},
};

movie.exec();