/*!
* Start Bootstrap - Resume v7.0.5 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

/* Source: https://www.quanzhanketang.com/jsref/event_onclick.html */

function myFunction(idName) {
 	document.getElementById(idName).classList.toggle("show");
}
	
window.onclick = function(event) {
  	if (!event.target.matches('.dropbtn')) {
    	var dropdowns = document.getElementsByClassName("dropdown-content");
    	var i;
    	for (i = 0; i < dropdowns.length; i++) {
      		var openDropdown = dropdowns[i];
      		if (openDropdown.classList.contains('show')) {
        		openDropdown.classList.remove('show');
      		}
    	}
  	}
}

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
$(document).ready(function() {
(function($) { "use strict";

$(function() {
  var header = $(".start-style");
  $(window).scroll(function() { 
    var scroll = $(window).scrollTop();
    var navbar = document.getElementById("navbar-header");
    if (scroll >= 1) {
      header.removeClass('start-style').addClass("scroll-on");
      navbar.classList.add("sticky")
    } else {
      header.removeClass("scroll-on").addClass('start-style');
      navbar.classList.remove("sticky");
    }
  });
});		

// Menu On Hover
  
$('body').on('mouseenter mouseleave','.nav-link',function(e){
    if ($(window).width() > 750) {
      var _d=$(e.target).closest('.nav-item');
      _d.addClass('show');
      setTimeout(function(){
      _d[_d.is(':hover')?'addClass':'removeClass']('show');
      },1);
    }
});
$('body').on('mouseleave','.nav-item',function(e){
    if ($(window).width() > 750) {
      var _d=$(e.target).closest('.nav-item');
      _d.addClass('show');
      setTimeout(function(){
      _d[_d.is(':hover')?'addClass':'removeClass']('show');
      },1);
    }
});		 

})(jQuery); 
})

  // Set the date we're counting down to
  var countDownDate = new Date("Aug 20, 2021 08:00:00").getTime();

  // Update the count down every 1 second
  var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();
      
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
      
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
    // Output the result in an element with id="demo"
    // document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    // + minutes + "m " + seconds + "s ";
      
    // If the count down is over, write some text 
  //   if (distance < 0) {
  //     clearInterval(x);
  //     document.getElementById("demo").innerHTML = "EXPIRED";
  //   }
  // 
}, 1000);
