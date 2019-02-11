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

  $main_slider = $('.slider');
  main_slider_settings = {
    dots: true,
    autoplaySpeed: 6000,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 252.1 477.2" style="enable-background:new 0 0 252.1 477.2;" xml:space="preserve"><g><path class="st0" d="M3.9,248.1L229,473.2c5.3,5.3,13.8,5.3,19.1,0c5.3-5.3,5.3-13.8,0-19.1L32.6,238.6L248.1,23.1c5.3-5.3,5.3-13.8,0-19.1c-2.6-2.6-6.1-4-9.5-4s-6.9,1.3-9.5,4L4,229.1C-1.3,234.3-1.3,242.9,3.9,248.1z"/></g></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 248.2 477.2" style="enable-background:new 0 0 248.2 477.2;" xml:space="preserve"><g><path class="st0" d="M248.2,229.1L23.1,4C17.8-1.3,9.3-1.3,4,4s-5.3,13.8,0,19.1l215.5,215.5L4,454.1c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C253.4,242.9,253.4,234.3,248.2,229.1z"/></g></svg></button>',
    customPaging: function (slider, pageIndex) {
      return $('<button></button').text(slider.$slider.data('buttonlabel'));
    }
  }
  $main_slider.slick(main_slider_settings);

  /*$('.slider').each(function () {
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
  });*/

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

  $slick_slider_2 = $('.items-carousel-2');
  settings_2 = {
    responsive: [
      {
        breakpoint: 9999,
        settings: {
          dots: true,
          autoplaySpeed: 6000,
          infinite: true,
          speed: 300,
          variableWidth: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          prevArrow: '<button type="button" class="slick-prev"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 252.1 477.2" style="enable-background:new 0 0 252.1 477.2;" xml:space="preserve"><g><path class="st0" d="M3.9,248.1L229,473.2c5.3,5.3,13.8,5.3,19.1,0c5.3-5.3,5.3-13.8,0-19.1L32.6,238.6L248.1,23.1c5.3-5.3,5.3-13.8,0-19.1c-2.6-2.6-6.1-4-9.5-4s-6.9,1.3-9.5,4L4,229.1C-1.3,234.3-1.3,242.9,3.9,248.1z"/></g></svg></button>',
          nextArrow: '<button type="button" class="slick-next"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 248.2 477.2" style="enable-background:new 0 0 248.2 477.2;" xml:space="preserve"><g><path class="st0" d="M248.2,229.1L23.1,4C17.8-1.3,9.3-1.3,4,4s-5.3,13.8,0,19.1l215.5,215.5L4,454.1c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C253.4,242.9,253.4,234.3,248.2,229.1z"/></g></svg></button>',
          customPaging: function (slider, pageIndex) {
            return $('<button></button').text(slider.$slider.data('buttonlabel'));
          }
        },
      }
    ]
  }
  $slick_slider_2.slick(settings_2);

  $slick_slider_3 = $('.items-carousel-3');
  settings_3 = {
    responsive: [
      {
        breakpoint: 9999,
        settings: {
          dots: true,
          autoplaySpeed: 6000,
          infinite: true,
          speed: 300,
          variableWidth: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          prevArrow: '<button type="button" class="slick-prev"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 252.1 477.2" style="enable-background:new 0 0 252.1 477.2;" xml:space="preserve"><g><path class="st0" d="M3.9,248.1L229,473.2c5.3,5.3,13.8,5.3,19.1,0c5.3-5.3,5.3-13.8,0-19.1L32.6,238.6L248.1,23.1c5.3-5.3,5.3-13.8,0-19.1c-2.6-2.6-6.1-4-9.5-4s-6.9,1.3-9.5,4L4,229.1C-1.3,234.3-1.3,242.9,3.9,248.1z"/></g></svg></button>',
          nextArrow: '<button type="button" class="slick-next"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 248.2 477.2" style="enable-background:new 0 0 248.2 477.2;" xml:space="preserve"><g><path class="st0" d="M248.2,229.1L23.1,4C17.8-1.3,9.3-1.3,4,4s-5.3,13.8,0,19.1l215.5,215.5L4,454.1c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C253.4,242.9,253.4,234.3,248.2,229.1z"/></g></svg></button>',
          customPaging: function (slider, pageIndex) {
            return $('<button></button').text(slider.$slider.data('buttonlabel'));
          }
        },
      }
    ]
  }
  $slick_slider_3.slick(settings_3);

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

  $("#filter-form-show").click(function () {
    $("#filter-form").slideDown()
    return;
  });

  $("#filter-form-hide").click(function () {
    $("#filter-form").slideUp()
    return;
  })

  $('.filter-form-reset').click(function () {
    $('#filter-form form').trigger('reset');
    $("#slider-range").slider("values", 0, $("#slider-range").slider("option", "min"));
    $("#slider-range").slider("values", 1, $("#slider-range").slider("option", "max"));
    $("#slider-range-amount-1").text($("#slider-range").slider("values", 0) + " тг");
    $("#slider-range-amount-2").text($("#slider-range").slider("values", 1) + " тг");
    $("#slider-range-input-1").val($("#slider-range").slider("values", 0));
    $("#slider-range-input-2").val($("#slider-range").slider("values", 1));
  });


  if ($(".spinner").length > 0) {
    $(".spinner").spinner({
      min: 1,
      incremental: false
    });

    $('.spinner').bind('keypress', function (e) {
      var keyCode = (e.which) ? e.which : event.keyCode
      return !(keyCode > 31 && (keyCode < 48 || keyCode > 57));
    });
  }

  $('#credit-price').bind('keypress', function (e) {
    var keyCode = (e.which) ? e.which : event.keyCode
    return !(keyCode > 31 && (keyCode < 48 || keyCode > 57));
  });


  $(".youtube-modal").on('hidden.bs.modal', function (e) {
    $(".youtube-modal iframe").attr("src", $(".youtube-modal iframe").attr("src"));
  });

  $("#legal-entity-checkbox").change(function () {
    if ($(this).is(':checked')) {
      $("#legal-entity-form").show();
      $("#individual-form").hide();
    }
  });

  $("#individual-checkbox").change(function () {
    if ($(this).is(':checked')) {
      $("#legal-entity-form").hide();
      $("#individual-form").show();
    }
  });

  $("#delivery").change(function () {
    if ($(this).is(':checked')) {
      $("#delivery-address").show();
    }
  });

  $("#pickup").change(function () {
    if ($(this).is(':checked')) {
      $("#delivery-address").hide();

    }
  });

  var timeoutID;
  var fadeSearhForm = false;
  var searchFormFaded = false;

  $("#search-form input").keydown(function () {
    var dInput = $(this).val();
    if (dInput === '') {
      $("#search-fade").stop().fadeIn();
    }
  });

  $("#search-form input").keyup(function () {
    var dInput = $(this).val();
    $("#search-form-mobile input").val($(this).val());
    if (dInput === '') {
      $("#search-fade").stop().fadeOut();
    }
  });

  $("#search-form-mobile input").keydown(function () {
    var dInput = $(this).val();
    if (dInput === '') {
      $("#search-fade").stop().fadeIn();
    }
  });

  $("#search-form-mobile input").keyup(function () {
    var dInput = $(this).val();
    $("#search-form input").val($(this).val());
    if (dInput === '') {
      $("#search-fade").stop().fadeOut();
    }
  });

  $("#search-form-mobile").focusin(function () {
    $("body").addClass("search-shown")
    $("#search-form-mobile").stop().animate({
      height: 43
    }, 300);
    $("#show-search-form").hide();
    if ($("#search-form-mobile input").val() != "") {
      $("#search-fade").stop().fadeIn();
    }
  });

  $("#search-form-mobile").focusout(function () {
    if ($(window).scrollTop() > 0) {
      //$("#search-form-mobile input").val('');
      $("body").removeClass("search-shown")
      $("#search-form-mobile").stop().animate({
        height: 0
      }, 100);
      $("#show-search-form").show();
    }
    $("#search-fade").stop().fadeOut();
  });




  $("#search-form").focusin(function () {
    if ($("#search-form input").val() != "") {
      $("#search-fade").stop().fadeIn();
    }
  });

  $("#search-form").focusout(function () {
    $("#search-fade").stop().fadeOut();
  });

  $("#show-search-form").click(function () {
    $("body").addClass("search-shown")
    $("#search-form-mobile").stop().animate({
      height: 43
    }, 300);
    $("#search-form-mobile input").focus()
    $("#show-search-form").hide()
    return false;
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      if ($("#search-form-mobile input").eq(0).is(":focus")) {
        $("#search-form-mobile input").blur()
        $("#search-form input").val('');
      }
      $("body").removeClass("search-shown")
      $("#search-form-mobile").stop().animate({
        height: 0
      }, 0);
      $("#show-search-form").show()
    }
    else {
      $("body").addClass("search-shown")
      $("#search-form-mobile").stop().animate({
        height: 43
      }, 300);
      $("#show-search-form").hide()
    }
  });

  if ($(this).scrollTop() > 0) {
    $("#search-fade").stop().fadeOut();
    $("body").removeClass("search-shown")
    $("#search-form-mobile").stop().animate({
      height: 0
    }, 0);
    $("#show-search-form").show()
  }
  else {
    $("body").addClass("search-shown")
    $("#search-form-mobile").stop().animate({
      height: 43
    }, 300);
    $("#show-search-form").hide()
  }







  $('input[type="radio"][name="paytype"]').change(function () {
    if ($('input[name=paytype]:checked').val() == "value2") {
      $("#paytype-bank-card-text").show()
    }
    else {
      $("#paytype-bank-card-text").hide()
    }
  });

  $('input[type="radio"][name="delivery"]').change(function () {
    if ($('input[name=delivery]:checked').val() == "value2") {
      $(".delivery-text").show()
    }
    else {
      $(".delivery-text").hide()
    }
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $('#scroll-top').stop().fadeIn();
    } else {
      $('#scroll-top').stop().fadeOut();
    }
  });
  $('#scroll-top').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 400);
    return false;
  });

  $("#show-all-cats").click(function () {
    $("#hidden-cats").slideDown();
    $("#show-all-cats").hide();
    $("#hide-all-cats").show();
  })
  $("#hide-all-cats").click(function () {
    $("#hidden-cats").slideUp();
    $("#show-all-cats").show();
    $("#hide-all-cats").hide();
  })



  $('#filter-form input').change(function () {
    if ($('#filter-form input[type="checkbox"]:checked').length > 0 ||
      $("#slider-range-input-1").val() != $("#slider-range").slider("option", "min") ||
      $("#slider-range-input-2").val() != $("#slider-range").slider("option", "max")) {
      $(".lg-filter-form-reset").show()
    }

    if ($('#filter-form input[type="checkbox"]:checked').length == 0 &&
      $("#slider-range-input-1").val() == $("#slider-range").slider("option", "min") &&
      $("#slider-range-input-2").val() == $("#slider-range").slider("option", "max")) {
      $(".lg-filter-form-reset").hide()
    }
  })

  $('.lg-filter-form-reset').click(function () {
    $('#filter-form form').trigger('reset');
    $("#slider-range").slider("values", 0, $("#slider-range").slider("option", "min"));
    $("#slider-range").slider("values", 1, $("#slider-range").slider("option", "max"));
    $("#slider-range-amount-1").text($("#slider-range").slider("values", 0) + " тг");
    $("#slider-range-amount-2").text($("#slider-range").slider("values", 1) + " тг");
    $("#slider-range-input-1").val($("#slider-range").slider("values", 0));
    $("#slider-range-input-2").val($("#slider-range").slider("values", 1));
    return false;
  });

  $(".items-carousel-sm-show").click(function () {
    $(this).parent().parent().find(".items-carousel-sm-hidden").slideDown();
    $(this).parent().parent().find(".items-carousel-sm-hide").show();
    $(this).parent().parent().find(".items-carousel-sm-show").hide();
  });
  $(".items-carousel-sm-hide").click(function () {
    $(this).parent().parent().find(".items-carousel-sm-hidden").slideUp();
    $(this).parent().parent().find(".items-carousel-sm-show").show();
    $(this).parent().parent().find(".items-carousel-sm-hide").hide();
  });

  $('#navbarSupportedContent').on('show.bs.collapse', function () {
    $("body").css("overflow-y", "hidden");
    $(".body").hide();
    $(".footer").hide();
  })
  $('#navbarSupportedContent').on('shown.bs.collapse', function () {
    $(".mobile-menu").css("overflow-y", "auto");
  })
  $('#navbarSupportedContent').on('hide.bs.collapse', function () {
    $("body").css("overflow-y", "auto");
    $(".mobile-menu").css("overflow-y", "hidden");
    $(".body").show();
    $(".footer").show();
  })
  $('#navbarSupportedContent').on('hidden.bs.collapse', function () {

  })

  $('.show-compare-details-item-hidden').click(function () {
    $(".compare-details-items-hidden").stop().slideDown();
    $(".hide-compare-details-item-hidden").show();
    $(".show-compare-details-item-hidden").hide();
    return false;
  });

  $('.hide-compare-details-item-hidden').click(function () {
    $(".compare-details-items-hidden").stop().slideUp();
    $(".show-compare-details-item-hidden").show();
    $(".hide-compare-details-item-hidden").hide();
    return false;
  });

  $('.share-show').click(function () {
    $('.share-show').hide();
    $('.share-dropleft-socials').addClass("show");
    $('.share-dropleft-socials').toggle("slide", 100).promise().done(function(){
      $('.share-dropleft-socials').css("display", "inline-block");
    });
    return false;
  });
  $('.share-hide').click(function () {
    $('.share-show').show();
    $('.share-dropleft-socials').removeClass("show");
    $('.share-dropleft-socials').hide();
    return false;
  });

  $(document).click(function (event) {
    if ((!$(event.target).is("#filter-form, #filter-form *, #filter-form-show")) && ($("#filter-form").css("display") == "block")) {
      $("#filter-form").slideUp();
    }
    if (!$(event.target).is(".share-dropleft-socials, .share-dropleft-socials *")) {
      $('.share-show').show();
      $('.share-dropleft-socials').removeClass("show");
      $('.share-dropleft-socials').hide();
    }
  });
});



