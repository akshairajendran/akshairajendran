// JavaScript Document

var main = function(){
	var menu_clickcounter = 0;
	$('.icon-menu').click(function(){
		if(menu_clickcounter === 0){						  
			$('.nav').animate({left:"0px"},200);
			$('body').animate({left:"285px"},200);
			menu_clickcounter += 1;
		}
		else{
			$('.nav').animate({left:"-285px"},200);
			$('body').animate({left:"0px"},200);
			menu_clickcounter -= 1;	
		}
		$(this).find('i').toggleClass('fa fa-bars fa fa-times');						
		});
	
	








};


$(document).ready(main);