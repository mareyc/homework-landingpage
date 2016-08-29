$(document).ready(function(){

	$(".read-more").click(showMore);
	$(".read-less").click(showLess);
	$(".learn-more").click(showMoreLearn);
	
	$("img").mouseover(function(){
    	$("img").css("border", "5px solid #033048");
    });

    $("img").mouseout(function(){
    	$("img").css("border", "none");
    });

    $(".button").click(function(){
		event.preventDefault();
 		alert( "We're Not Ready For Sign-Ups...Yet." );
 	});
    	
	function showMore(){
		event.preventDefault();
		$("#show-this-on-click").slideDown();
		$(".read-more").hide();
		$(".read-less").show();
		}

	function showLess(){
		event.preventDefault();
		$("#show-this-on-click").slideUp("fast");
		$(".read-less").hide();
		$(".read-more").show();
		}

	function showMoreLearn(){
		event.preventDefault();
		$("#learn-more-text").slideDown();
		$(".learn-more").hide();
		}

})