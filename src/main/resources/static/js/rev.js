var rev = {
	exec: function() {
		$("#btn-write").on("click", () => {
			this.write();
		});
		$("#btn-upd-rev").on("click", () => {
			this.update();
		});
		$("#btn-del-rev").on("click", () => {
			this.delete();
		});
	},

	write: function() {
		var userNum = $("#user-num").val();
		var movieNum = $("#movie-num").val();
		var image = $("#image").val();
		var id = $("#id").val();
		var movie = $("#movie").val();
		var title = $("#title").val();
		var content = $("#content").val();
		var rating = $("#rating").val();
		
		var rev = {
			userNum: userNum,
			movieNum: movieNum,
			image: image,
			id: id,
			movie: movie,
			title: title,
			content: content,
			rating: rating
		};

		if (title === "") {
			$("#title-ck").html("제목을 입력하세요.").css("color", "red");
			return false;
		} else $("#title-ck").html("");

		if (content === "") {
			$("#content-ck").html("내용을 입력하세요.").css("color", "red");
			return false;
		} else $("#content-ck").html("");
		
		$.ajax({
			url: "/recmv/api/rev/write",
			type: "POST",
			contentType: "application/json; charset=UTF-8",
			data: JSON.stringify(rev)
		}).done(function(resp){
			console.log(resp);
			alert("리뷰작성이 완료되었습니다.")						
			location.replace("/recmv/rev/main");			
		}).fail(function(err){
			alert(JSON.stringify(err));			
		});
	},

	update: function() {
		var num = $("#num").val();
		var title = $("#title").val();
		var content = $("#content").val();
		var rating = $("#rating").val();
		
		var rev = {
			num: num,
			title: title,
			content: content,
			rating: rating
		};

		if (title === "") {
			$("#title-ck").html("제목을 입력하세요.").css("color", "red");
			return false;
		} else $("#title-ck").html("");

		if (content === "") {
			$("#content-ck").html("내용을 입력하세요.").css("color", "red");
			return false;
		} else $("#content-ck").html("");
		
		$.ajax({
			url: "/recmv/api/rev/update/" + num,
			type: "PUT",
			contentType: "application/json; charset=UTF-8",
			data: JSON.stringify(rev)
		}).done(function(resp){
			console.log(resp);
			alert("리뷰수정이 완료되었습니다.")			
			location.replace("/recmv/rev/read/" + num);				
		}).fail(function(){
			alert(JSON.stringify(err));									
		});
	},
	
	delete: function() {
		var num = $("#num").text();
		var currentPageNum = $("#currentPageNum").text();
		
		$.ajax({
			url: "/recmv/api/rev/delete/" + num,
			type: "DELETE",
		}).done(function(resp){
			console.log(resp);
			alert("리뷰삭제가 완료되었습니다.")
			location.replace("/recmv/rev/main?currentPageNum=" + currentPageNum);						
		}).fail(function(err){
			alert(JSON.stringify(err));						
		});
	},	
};

rev.exec();