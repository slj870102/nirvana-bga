// __________ PreLoader __________

$(window).on("load", function () {
  $(".spinner").fadeOut();
  $(".preloader").delay(350).fadeOut("slow");
});

// __________ Filter __________

var $Container = $(".item-container");
$Container.isotope({
  itemSelector: ".item",
  transitionDuration: "0.8s",
});

$(".filter-list li").on("click", function (e) {
  $(".filter-list li.active").removeClass("active");
  $(this).addClass("active");
  var selector = $(this).attr("data-filter");
  console.log(selector);
  $Container.isotope({
    filter: selector,
  });
  return false;
});

// __________ Navigation __________

$(".nav-link").on("click", function (e) {
  var anchor = $(this);
  $("html, body")
    .stop()
    .animate({ scrollTop: $(anchor.attr("href")).offset().top + 50 }, 1500);
  e.preventDefault();
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $("header").attr("id", "navbar-sticky");
  } else {
    $("header").attr("id", "");
  }

  // $("section").each(function () {
  //   var sect = $(this);
    // if (sect.isInViewport()) {
  //     $(".nav-link").removeClass("active");
  //     $(".nav-link[href='#" + $(sect).attr("id") + "']").addClass("active");
    // }
  // });
});

$("#menu-btn").click(function (e) {
  if ($(".navbar .list").attr("id") == "") {
    $(".navbar .list").attr("id", "nav-open");
  } else {
    $(".navbar .list").attr("id", "");
  }
});

// __________ Swiper __________

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  autoPlay: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

// __________ Count __________

$(".count").countUp({
  delay: 10,
  time: 2000,
});

// __________ Wow __________

new WOW().init();

// __________ Type __________

var typed = new Typed("#prof", {
  strings: ["躺平模式！","一键输出！","大招爆发！", "自动治疗！"],
  typeSpeed: 60,
  backSpeed: 60,
  backDelay: 2000,
  loop: true,
});

// ______________________________

$.fn.isInViewport = function () {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();
  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop + 500 < viewportBottom;
};
