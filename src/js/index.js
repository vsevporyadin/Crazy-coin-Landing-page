$(document).ready(function() {

	//select language
  $(document).on("click", "ul.header_list-lang .init", function() {
		$(this).parent().find('li:not(.init)').toggle();
		if ($(this).attr("style")){
			$(".init").css({"background":"transparent", "border-radius":"25px", "border-bottom":"1px solid rgba(255, 255, 255, 0.13)"});
			$(this).removeAttr("style");
			$(this).removeClass('open');
			$(this).addClass('close');
		}else{
			$(".init").css({"background":"#2D2D2D", "border-radius":"16px 16px 0 0", "border-bottom":"0px", "border-top":"1px #3A3A3A solid", "border-left":"1px #3A3A3A solid", "border-right":"1px #3A3A3A solid"});
			$(this).removeClass('close');
			$(this).addClass('open');
		}
  });
  var allOptions = $("ul.header_list-lang").children('li:not(.init)');
  $("ul.header_list-lang").on("click", "li:not(.init)", function() {
    allOptions.removeClass('selected');
    $(this).addClass('selected');
    $(this).parent().children('.init').html($(this).html());
		$(this).parent().find('li:not(.init)').toggle();
		$(".init").css({"background":"transparent", "border-radius":"25px", "border-bottom":"1px solid rgba(255, 255, 255, 0.13)"});
		$(".init").removeAttr("style");
		$(".init").removeClass('open');
		$(".init").addClass('close');
	});
	
	//scroll header
	$(function () {
		$(document).scroll(function () {
			var $nav = $(".header");
			$nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
		});
	});

	//parallax coin
	$(window).scroll(function(e){
		parallax();
	});
	
	function parallax(){
		var scrolled = $(window).scrollTop();
		$('.main__slider-parallax').css('top',-(scrolled*0.1)+'px');
	}

	// open mobile menu
	$('.js-toggle-menu').click(function(e){
		e.preventDefault();
		$('.mobile-header-nav').slideToggle();
		$(this).toggleClass('open');
		$(".header").toggleClass('open_mobile-menu');
	});

	$(".header__item").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

    $(".mobile-header-nav").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('.mobile-header-nav').slideToggle();
		$(".js-toggle-menu").toggleClass('open');
        $('body,html').animate({scrollTop: top}, 1500);
    });

});

// Back to top button

var btn = $('.button-up');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});