$(document).ready(function () {

  $('.mobile-menu .dropdown-submenu a').on('click', function (e) {
    var show = false;
    if ($(this).parent().hasClass('show')) {
      show = true;
    }
    $(this).parent().parent().children('.dropdown-submenu.show').children('div.dropdown-menu').slideToggle();
    $(this).parent().parent().children('.dropdown-submenu.show').removeClass('show');
    if (!show) {
      $(this).parent().addClass('show');
      $(this).next('div.dropdown-menu').slideToggle();
    }
    e.stopPropagation();
    e.preventDefault();
  });

  $('.mobile-menu .dropdown-submenu>a').each(function (e) {
    $(this).append('<div class="chevrone"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 248.2 126"><title>Ресурс 3</title><g id="Слой_2" data-name="Слой 2"><g id="Capa_1" data-name="Capa 1"><path class="cls-1" d="M129.05,124.06,246.13,11.53a6.53,6.53,0,0,0,0-9.54,7.2,7.2,0,0,0-9.93,0L124.11,109.71,12,2A7.21,7.21,0,0,0,2.08,2,6.67,6.67,0,0,0,0,6.74a6.44,6.44,0,0,0,2.08,4.74L119.17,124A7.18,7.18,0,0,0,129.05,124.06Z"/></g></g></svg></div>');
  });

  $('#show-hide-password a').on('click', function (event) {
    event.preventDefault();
    if ($('#show-hide-password input').attr('type') == 'text') {
      $('#show-hide-password input').attr('type', 'password');
      $('#show-hide-password i').addClass('fa-eye-slash');
      $('#show-hide-password i').removeClass('fa-eye');
    } else if ($('#show-hide-password input').attr('type') == 'password') {
      $('#show-hide-password input').attr('type', 'text');
      $('#show-hide-password i').removeClass('fa-eye-slash');
      $('#show-hide-password i').addClass('fa-eye');
    }
  });

  $('.dropdown-menu').click(function (e) {
    e.stopPropagation();
  });

  // Add slideDown animation to Bootstrap dropdown when expanding.
  $('.mobile-menu .dropdown').on('show.bs.dropdown', function () {
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
  });

  // Add slideUp animation to Bootstrap dropdown when collapsing.
  $('.mobile-menu .dropdown').on('hide.bs.dropdown', function () {
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
  });

  $('.slider').each(function () {
    var $this = $(this);
    var $group = $this.find('.slide-group');
    var $slides = $this.find('.slide');
    var bulletArray = [];
    var currentIndex = 0;
    var timeout;

    function move(newIndex) {
      var animateLeft, slideLeft;

      advance();

      if ($group.is(':animated') || currentIndex === newIndex) {
        return;
      }

      bulletArray[currentIndex].removeClass('active');
      bulletArray[newIndex].addClass('active');

      if (newIndex > currentIndex) {
        slideLeft = '100%';
        animateLeft = '-100%';
      } else {
        slideLeft = '-100%';
        animateLeft = '100%';
      }

      $slides.eq(newIndex).css({
        display: 'block',
        left: slideLeft
      });
      $group.animate({
        left: animateLeft
      }, function () {
        $slides.eq(currentIndex).css({
          display: 'none'
        });
        $slides.eq(newIndex).css({
          left: 0
        });
        $group.css({
          left: 0
        });
        currentIndex = newIndex;
      });
    }

    function advance() {
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        if (currentIndex < ($slides.length - 1)) {
          move(currentIndex + 1);
        } else {
          move(0);
        }
      }, 10000);
    }

    $('.next-btn').on('click', function () {
      if (currentIndex < ($slides.length - 1)) {
        move(currentIndex + 1);
      } else {
        move(0);
      }
    });

    $('.previous-btn').on('click', function () {
      if (currentIndex !== 0) {
        move(currentIndex - 1);
      } else {
        move(3);
      }
    });

    $.each($slides, function (index) {
      var $button = $('<a class="slide-btn"> </a>');

      if (index === currentIndex) {
        $button.addClass('active');
      }
      $button.on('click', function () {
        move(index);
      }).appendTo('.slide-buttons');
      bulletArray.push($button);
    });

    advance();
  });

  $slick_slider = $('.items-carousel');
  settings = {
    responsive: [
      {
        breakpoint: 9999,
        settings: {
          dots: true,
          autoplaySpeed: 6000,
          infinite: true,
          speed: 300,
          variableWidth: true,
          slidesToShow: 5,
          slidesToScroll: 1,
          prevArrow: '<button type="button" class="slick-prev"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 252.1 477.2" style="enable-background:new 0 0 252.1 477.2;" xml:space="preserve"><g><path class="st0" d="M3.9,248.1L229,473.2c5.3,5.3,13.8,5.3,19.1,0c5.3-5.3,5.3-13.8,0-19.1L32.6,238.6L248.1,23.1c5.3-5.3,5.3-13.8,0-19.1c-2.6-2.6-6.1-4-9.5-4s-6.9,1.3-9.5,4L4,229.1C-1.3,234.3-1.3,242.9,3.9,248.1z"/></g></svg></button>',
          nextArrow: '<button type="button" class="slick-next"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 248.2 477.2" style="enable-background:new 0 0 248.2 477.2;" xml:space="preserve"><g><path class="st0" d="M248.2,229.1L23.1,4C17.8-1.3,9.3-1.3,4,4s-5.3,13.8,0,19.1l215.5,215.5L4,454.1c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C253.4,242.9,253.4,234.3,248.2,229.1z"/></g></svg></button>',
          customPaging: function (slider, pageIndex) {
            return $('<button></button').text(slider.$slider.data('buttonlabel'));
          }
        },
      },
      {
        breakpoint: 768,
        settings: 'unslick'
      }
    ]
  }
  $slick_slider.slick(settings);

  // reslick only if it's not slick()
  $(window).on('resize', function () {
    if (!$slick_slider.hasClass('slick-initialized')) {
      return $slick_slider.slick(settings);
    }
  });

  $('#catalog-table-styled').click(function (e) {
    $('#catalog-items').removeClass('list-styled');
    $('#catalog-list-styled').removeClass('active');
    $('#catalog-table-styled').addClass('active');
    return false;
  });

  $('#catalog-list-styled').click(function (e) {
    $('#catalog-items').addClass('list-styled');
    $('#catalog-table-styled').removeClass('active');
    $('#catalog-list-styled').addClass('active');
    return false;
  });


  $('select').selectric();


  $("#slider-range").slider({
    range: true,
    min: 0,
    max: 999999,
    values: [1, 999999],
    slide: function (event, ui) {
      $("#slider-range-amount-1").text(ui.values[0] + " тг");
      $("#slider-range-amount-2").text(ui.values[1] + " тг");
    }
  }).slider("float");
  $("#slider-range-amount-1").text($("#slider-range").slider("values", 0) + " тг");
  $("#slider-range-amount-2").text($("#slider-range").slider("values", 1) + " тг");

  $("#filter-form-show").click(function () {
    $("#filter-form").slideToggle()
    return;
  });

  $("#filter-form-hide").click(function () {
    $("#filter-form").slideToggle()
    return;
  })

  $(document).click(function (event) {
    if ((!$(event.target).is("#filter-form, #filter-form *, #filter-form-show")) && ($("#filter-form").css("display") == "block")) {
      $("#filter-form").slideToggle();
    }
  });

  $('.filter-form-reset').click(function(){
    $('#filter-form form').trigger('reset');
  });




});