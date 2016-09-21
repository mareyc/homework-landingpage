$('document').ready(function(){
	// for hamburger menu
	$("header nav li:first-of-type").click(function(){
		$(this).parent().toggleClass("slideDown"); 
	});
});