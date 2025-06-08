$(function () {

//modal window
	$('.btn-reserv').click(function () {
		$('#exampleModal').arcticmodal( {
			overlay: {
	        css: {
	            backgroundColor: '#333',
	            opacity: .70
	        }
	    	}
		});
	});

	

//open menu

	$('.md-trigger').on('click', function() {
    $('.md-modal').addClass('md-show');
  });
  
  $('.md-close').on('click', function() {
    $('.md-modal').removeClass('md-show');
  });

//menu tabs 

 	$('.delivery__item').click(function() {
        $('.delivery__item').removeClass('active');         
        $(this).toggleClass('active');
    });

    $('.delivery__item').click(function() {
var id = $(this).attr('data-link'),
     content = $('.food[data-link="'+ id +'"]');

$('.food.menu-list-active').removeClass('menu-list-active');
$(this).addClass('menu-list-active');

$('.food.menu-list-active').removeClass('menu-list-active');
content.addClass('menu-list-active');
});

    //slider

	$('.slider').slick({

	});

	// dropdown

// 	function myFunction() {
// 	document.getElementById("myDropdown").classList.toggle("show");
// };

$('.dropbtn').click(function() {
        document.getElementById("myDropdown").classList.toggle("show");
    });


// Закрыть раскрывающийся список по клику за его пределами
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
};

var swiper = new Swiper(".image-mini-slider", {
      spaceBetween: 10,
      slidesPerView: 3,
      freeMode: true,
      watchSlidesProgress: true,
    });

var swiper2 = new Swiper(".image-slider", {
      spaceBetween: 30,
      thumbs: {
        swiper: swiper,
      },
    });
	

});