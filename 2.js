(function(){
	        var ziDong;
		 	var i = 0;
			var tu = document.getElementById("image");
			var arr = ["image/59.jpg","image/60.jpg","image/61.jpg","image/62.jpg","image/63.jpg","image/64.jpg","image/65.jpg","image/58.jpg"];
			function qieHuan() {
				tu.src = arr[i];
				i = (i+1)%8;
			}
		 	window.onload = function(){
		 		ziDong = window.setInterval(qieHuan, 2000)
		 	}
}(window))