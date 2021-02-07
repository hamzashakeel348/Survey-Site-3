//Popout Script

$(document).ready(function () {
		
    
	    $( "#policy-btn" ).click(function() {	
			$("#policy-wrap").delay("500").fadeIn();
			$("#wrap-content").css("filter", "blur(4px)");
			$("#frame-content").attr("src", "../master/terms-conditions.php?type=doc?");

	    });
	    $( "#policy-close" ).click(function() {	
			$("#policy-wrap").delay("100").fadeOut();
			$("#wrap-content").css("filter", "");

	    });
	    $( "#terms-btn" ).click(function() {	
			$("#policy-wrap").delay("500").fadeIn();
			$("#wrap-content").css("filter", "blur(4px)");
		   	$("#frame-content").attr("src", "../master/terms-conditions.php?type=doc?");
	    });
	    

	    
}); 