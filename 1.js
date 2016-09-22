(function(){
    l.onclick=function(){ 
   	    var l=document.getElementById('l');
        var enter=document.getElementById('enter');
        enter.style.display='block';	 
   }
   var btn=document.getElementById('btn');
   btn.onclick=function(){
   	   enter.style.display='none';
   }
}(window))