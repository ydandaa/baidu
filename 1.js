(function(){
    var l=document.getElementById('l');
    l.onclick=function(){
        var enter=document.getElementById('enter');
        enter.style.visibility='visible';	
        return false; 
   };
   var btn=document.getElementById('btn');
   btn.onclick=function(){
   	   enter.style.visibility='hidden';
   };
}(window));
