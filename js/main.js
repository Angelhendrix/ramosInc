$(document).ready(function () {

  let cities = ['Dicovery Bay', 'Dublin', 'Oakley', 'Clayton', 'Brentwood', 'San Ramon', 'Lafayette', 'Danville', 'Antioch', 'Walnut Creek', 'Pittsburg', 'Pleasanton', 'Pleasant Hill', 'Concord'].sort();

  let services = ['Concrete & Landscaping', 'Baths & Kitchens', 'Fire Pit Restoration', 'Windows & Doors Installations', 'Carpentry', 'Electrical & Plumbing', 'Flooring - Vinyl, Tile, Slate, Ceramic & Travertine', 'Crown Molding', 'etc'].sort();

  $('#listOfCities').append(services.map(c => $('<li>').text(c + ',')));

console.log('helllooooo')
  // links to the carousel in the sevices HTML page

  let imageLinks = [
    "https://i.ibb.co/prxyD62/a-pic4.jpg",
    "https://i.ibb.co/xh8rc9t/a-pic3.jpg",
    "https://i.ibb.co/frddc9r/a-pic2.jpg",
    "https://i.ibb.co/h7knV07/a-pic1.jpg",
    "https://i.ibb.co/RBWRXv8/arbor-newdad.jpg",
    "https://i.ibb.co/gRj1c1f/Main-Project.jpg",
    "https://i.ibb.co/KX020DM/landscape.jpg",
    "https://i.ibb.co/JxTmCnk/20170228-143425.jpg",
    "https://i.ibb.co/P1XxyQC/20170602-090119.jpg",
    "https://i.ibb.co/jJ3n2jH/20170602-090158.jpg",
    "https://i.ibb.co/ByVZSL9/20170901-140111.jpg",
    "https://i.ibb.co/7W3G2Km/20181226-151639.jpg",
    "https://i.ibb.co/5GkSg8M/IMG-20190101-WA0000.jpg",
    "https://i.ibb.co/NLpWPn5/IMG-20190101-WA0013-1.jpg",
    "https://i.ibb.co/VQBzXX9/IMG-20190101-WA0014-1.jpg",
    "https://i.ibb.co/nf325rH/20190213-112517.jpg",
    "https://i.ibb.co/mB3ck4P/20130318-165602.jpg",
    "https://i.ibb.co/M7m7kL4/20160829-091116.jpg",
    "https://i.ibb.co/Jq5DpfX/20171221-164516.jpg",
    "https://i.ibb.co/NFTXzfW/20171221-164527.jpg",
    "https://i.ibb.co/KVVJKdh/20180112-123041.jpg",
    "https://i.ibb.co/JdqVNx4/20180212-113717.jpg",
    "https://i.ibb.co/ZYPCcQ4/IMG-20190101-WA0011.jpg",
    "https://i.ibb.co/892sfxd/IMG-20190101-WA0002.jpg",
    "https://i.ibb.co/1qxJ6p5/IMG-20190101-WA0008.jpg",
    "https://i.ibb.co/ysYFVCF/20190201-115848.jpg",
    "https://i.ibb.co/XDbpBmr/20190201-115919.jpg",
    "https://i.ibb.co/tPf7MfH/20180224-123800.jpg",
    "https://i.ibb.co/s61y3Zf/20180224-123848.jpg",
    "https://i.ibb.co/MDwz3Wc/20150130-131939.jpg",
    "https://i.ibb.co/VwFt0mW/20130713-170914.jpg",
    "https://i.ibb.co/XZh3BCN/20130531-153336.jpg",
    "https://i.ibb.co/b22RKzk/20130526-123941.jpg",
    "https://i.ibb.co/sWwwnMG/20130526-124030.jpg",
    "https://i.ibb.co/R9hNCKm/20180224-123747.jpg",
    "https://i.ibb.co/H4p6qv4/20180427-120114.jpg",
    "https://i.ibb.co/5st7WrQ/20180620-162506.jpg"
  ];

  let teset = "https://i.ibb.co/R9hNCKm/20180224-123747.jpg"

  let imagetag = $('<img id="imageLinks">');
  imagetag.attr('src', teset)
  imagetag.append(".hideRights")


  //Navigation menu scrollTo
  $('header nav ul li a').click(function (event) {
    event.preventDefault();
    var section = $(this).attr('href');
    var section_pos = $(section).position();

    if (section_pos) {
      $(window).scrollTo({
        top: section_pos.top,
        left: '0px'
      }, 1000);
    }

  });

  $('.app_link').click(function (e) {
    event.preventDefault();
    $(window).scrollTo({
      top: $("#hero").position().top,
      left: '0px'
    }, 1000);
  });


  //Show & Hide menu on mobile
  $('.burger_icon').click(function () {
    $('header nav').toggleClass('show');
    $('header .burger_icon').toggleClass('active');
  });


  //wow.js on scroll animations initialization
  wow = new WOW({
    animateClass: 'animated',
    mobile: false,
    offset: 50
  });
  wow.init();


  //parallax effect initialization
  $('.hero').parallax("50%", 0.3);


  //Nice scroll initialization
  $("html").niceScroll({
    scrollspeed: 50,
    autohidemode: false,
    cursorwidth: 8,
    cursorborderradius: 8,
    cursorborder: "0",
    background: "rgba(48, 48, 48, .4)",
    cursorcolor: '#1f1f1f',
    zindex: 999
  });


  //Testimonials slider initialization
  $("#tslider").owlCarousel({
    items: 1,
    navigation: true,
    pagination: false,
    slideSpeed: 300,
    paginationSpeed: 400,
    singleItem: true,
    responsive: true,
    autoPlay: true,
    transitionStyle: "fade"
  });


  //Mailchimp subscription form initialization
  $('#submit_form').submit(function () {
    $('#mc_submit').attr('disabled', 'disabled');
    processing('icon', 'loading');
  });

  if ($('#submit_form').length) {
    //Mailchim Subscription form
    $('#submit_form').ajaxChimp({
      callback: chimpResponce
    });
  }

  //Mail chimp callback function
  function chimpResponce(resp) {
    if (resp.result === 'success') {
      processing('loading', 'icon');
      $('#mc_submit').removeAttr('disabled', 'disabled');
      $('#submit_form #mc-email').val('');
      $('#error_msg').hide();
      $('#success_msg').show();
    }
    else {
      processing('loading', 'icon');
      $('#success_msg').hide();
      $('#error_msg').show();
      $('#mc_submit').removeAttr('disabled', 'disabled');
    }
  }

  function processing(hide, show) {
    $('#mc_submit i').removeClass(hide).addClass(show);
  }


  //Popup video
  $('#play_video').click(function (e) {
    e.preventDefault();

    var video_link = $(this).data('video');
    video_link = '<iframe src="' + video_link + '" width="500" height="208" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';

    $('.about_video').append(video_link).fadeIn(200);
  });

  $('.close_video').click(function (e) {
    e.preventDefault();

    $('.about_video').fadeOut(200, function () {
      $('iframe', this).remove();
    });

  });

  function moveToSelected(element) {

    if (element == "next") {
      var selected = $(".selected").next();
    }
    else if (element == "prev") {
      var selected = $(".selected").prev();
    }
    else {
      var selected = element;
    }

    var next = $(selected).next();
    var prev = $(selected).prev();
    var prevSecond = $(prev).prev();
    var nextSecond = $(next).next();

    $(selected).removeClass().addClass("selected");

    $(prev).removeClass().addClass("prev");
    $(next).removeClass().addClass("next");

    $(nextSecond).removeClass().addClass("nextRightSecond");
    $(prevSecond).removeClass().addClass("prevLeftSecond");

    $(nextSecond).nextAll().removeClass().addClass('hideRight');
    $(prevSecond).prevAll().removeClass().addClass('hideLeft');

  }

  function moveToSelected2(element2) {

    if (element2 == "next2") {
      var selected2 = $(".selected2").next();
    }
    else if (element2 == "prev2") {
      var selected2 = $(".selected2").prev();
    }
    else {
      var selected2 = element2;
    }

    var next2 = $(selected2).next();
    var prev2 = $(selected2).prev();
    var prevSecond2 = $(prev2).prev();
    var nextSecond2 = $(next2).next();

    $(selected2).removeClass().addClass("selected2");

    $(prev2).removeClass().addClass("prev2");
    $(next2).removeClass().addClass("next2");

    $(nextSecond2).removeClass().addClass("nextRightSecond2");
    $(prevSecond2).removeClass().addClass("prevLeftSecond2");

    $(nextSecond2).nextAll().removeClass().addClass('hideRight2');
    $(prevSecond2).prevAll().removeClass().addClass('hideLeft2');

  }

  // Eventos teclado
  $(document).keydown(function (e) {
    switch (e.which) {
      case 37: // left
        moveToSelected('prev');
        break;

      case 39: // right
        moveToSelected('next');
        break;

      default:
        return;
    }
    e.preventDefault();
  });

  $('#carousel div').click(function () {
    moveToSelected($(this));
  });

  $('#prev').click(function () {
    moveToSelected('prev');
  });

  $('#next').click(function () {
    moveToSelected('next');
  });


  // Eventos teclado for carousel two
  $(document).keydown(function (e) {
    switch (e.which) {
      case 37: // left
        moveToSelected2('prev2');
        break;

      case 39: // right
        moveToSelected2('next2');
        break;

      default:
        return;
    }
    e.preventDefault();
  });

  $('#carousel2 div').click(function () {
    moveToSelected2($(this));
  });

  $('#prev2').click(function () {
    moveToSelected2('prev2');
  });

  $('#next2').click(function () {
    moveToSelected2('next2');
  });

function moveToSelected3(element3) {

    if (element3 == "next3") {
      var selected3 = $(".selected3").next();
    }
    else if (element3 == "prev3") {
      var selected3 = $(".selected3").prev();
    }
    else {
      var selected3 = element3;
    }

    var next3 = $(selected3).next();
    var prev3 = $(selected3).prev();
    var prevSecond3 = $(prev3).prev();
    var nextSecond3 = $(next3).next();

    $(selected3).removeClass().addClass("selected3");

    $(prev3).removeClass().addClass("prev3");
    $(next3).removeClass().addClass("next3");

    $(nextSecond3).removeClass().addClass("nextRightSecond3");
    $(prevSecond3).removeClass().addClass("prevLeftSecond3");

    $(nextSecond3).nextAll().removeClass().addClass('hideRight3');
    $(prevSecond3).prevAll().removeClass().addClass('hideLeft3');

  }
  // Eventos teclado for carousel two
  $(document).keydown(function (e) {
    switch (e.which) {
      case 37: // left
        moveToSelected3('prev3');
        break;

      case 39: // right
        moveToSelected3('next3');
        break;

      default:
        return;
    }
    e.preventDefault();
  });

  $('#carousel3 div').click(function () {
    moveToSelected3($(this));
  });

  $('#prev3').click(function () {
    moveToSelected3('prev3');
  });

  $('#next3').click(function () {
    moveToSelected3('next3');
  });


$('#checkbox').change(function(){
    setInterval(function () {
        moveRight();
    }, 2000);
  });
  
  var slideCount = $('#slider ul li').length;
  var slideWidth = $('#slider ul li').width();
  var slideHeight = $('#slider ul li').height();
  var sliderUlWidth = slideCount * slideWidth;
  
  $('#slider').css({ width: slideWidth, height: slideHeight });
  
  $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
  
    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });



// var images = '.image-container',
//     slide = $(images+' img').innerWidth();

// function append(){$(images+' img').first().appendTo($(images));}
// function prepend(){$(images+' img').last().prependTo($(images));}

// $('.prev').click(function(){ prepend(); });
// $('.next').click(function(){ append();  });

  var slideCount2 = $('#slider2 ul li').length;
  var slideWidth2 = $('#slider2 ul li').width();
  var slideHeight2 = $('#slider2 ul li').height();
  var sliderUlWidth2 = slideCount2 * slideWidth2;
  
  $('#slider2').css({ width: slideWidth2, height: slideHeight2 });
  
  $('#slider2 ul').css({ width: sliderUlWidth2, marginLeft: - slideWidth2 });
  
    $('#slider2 ul li:last-child').prependTo('#slider2 ul');

    function moveLeft2() {
        $('#slider2 ul').animate({
            left: + slideWidth2
        }, 200, function () {
            $('#slider2 ul li:last-child').prependTo('#slider2 ul');
            $('#slider2 ul').css('left', '');
        });
    };

    function moveRight2() {
        $('#slider2 ul').animate({
            left: - slideWidth2
        }, 200, function () {
            $('#slider2 ul li:first-child').appendTo('#slider2 ul');
            $('#slider2 ul').css('left', '');
        });
    };

    $('a.control_prev2').click(function () {
        moveLeft2();
    });

    $('a.control_next2').click(function () {
        moveRight2();
    });

  //contact form//
  var slideCount3 = $('#slider3 ul li').length;
  var slideWidth3 = $('#slider3 ul li').width();
  var slideHeight3 = $('#slider3 ul li').height();
  var sliderUlWidth3 = slideCount3 * slideWidth3;
  
  $('#slider3').css({ width: slideWidth3, height: slideHeight3+90 });
  
  $('#slider3 ul').css({ width: sliderUlWidth3, marginLeft: - slideWidth3 });
  
    $('#slider3 ul li:last-child').prependTo('#slider3 ul');

    function moveLeft3() {
        $('#slider3 ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider3 ul li:last-child').prependTo('#slider3 ul');
            $('#slider3 ul').css('left', '');
        });
    };

    function moveRight3() {
        $('#slider3 ul').animate({
            left: - slideWidth3
        }, 200, function () {
            $('#slider3 ul li:first-child').appendTo('#slider3 ul');
            $('#slider3 ul').css('left', '');
        });
    };

    $('a.control_prev3').click(function () {
        moveLeft3();
    });

    $('a.control_next3').click(function () {
        moveRight3();
    });

  


});