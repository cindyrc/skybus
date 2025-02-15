

(function($) {
	$(document).ready(function () {
		$('.menu-toggle').on('click', function(event){
			event.preventDefault();
			// create menu variables
			var slideoutMenu = $('.mobile');
			var slideoutMenuWidth = $('.mobile').width();
			
			// toggle open class
			slideoutMenu.toggleClass("open");
			
			// slide menu
			if (slideoutMenu.hasClass("open")) {
				slideoutMenu.animate({
					left: "0px"
				});	
			} else {
				slideoutMenu.animate({
					left: -slideoutMenuWidth
				}, 250);	
			}
		});
		
		// Hide/Show the inventory selection 
		//$(".list").hide();	 
		//$(".click").click(function(){
			//$(".list").slideToggle("slow");
		//});
		
		//Toggle nested submenus 
		$(".list").hide();
		jQuery('.click').click(function() {
		jQuery(this).siblings("ul").slideToggle();
		return false;
	});
		//$('.click').on('click', function (event) {
		//$('.list').slideToggle(600);
		//});
	});
}(jQuery));