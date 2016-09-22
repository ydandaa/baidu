(function(){
	        var ziDong;
		 	var i = 0;
			var tu = document.getElementById("image");
			var arr = ["59.jpg","60.jpg","61.jpg","62.jpg","63.jpg","64.jpg","65.jpg","58.jpg"];
			function qieHuan() {
				tu.src = arr[i];
				i = (i+1)%8;
			}
		 	window.onload = function(){
		 		ziDong = window.setInterval(qieHuan, 2000)
		 	}
}(window))