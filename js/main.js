$("#btnAll").click(function () {
  $("#btnCash").removeClass("active-btn");
  $("#btncCashless").removeClass("active-btn");
  $("#btnCrypto").removeClass("active-btn");
  $("exchanger-list__text").removeClass("exchanger-list__text.active-btn");
  $(this).addClass("active-btn");
});
$("#btnCash").click(function () {
  $("#btnAll").removeClass("active-btn");
  $("#btncCashless").removeClass("active-btn");
  $("#btnCrypto").removeClass("active-btn");
  $("exchanger-list__text").removeClass("exchanger-list__text.active-btn");
  $(this).addClass("active-btn");
});
$("#btncCashless").click(function () {
  $("#btnAll").removeClass("active-btn");
  $("#btnCash").removeClass("active-btn");
  $("#btnCrypto").removeClass("active-btn");
  $("exchanger-list__text").removeClass("exchanger-list__text.active-btn");
  $(this).addClass("active-btn");
});
$("#btnCrypto").click(function () {
  $("#btnAll").removeClass("active-btn");
  $("#btnCash").removeClass("active-btn");
  $("#btncCashless").removeClass("active-btn");
  $("exchanger-list__text").removeClass("exchanger-list__text.active-btn");
  $(this).addClass("active-btn");
});
$('a[href="#allNone"]').on("click.smoothscroll", function (e) {
  e.preventDefault();
  $("#allNone>div").detach().prependTo("#all");
  $("#cashless>div").detach().prependTo("#cashlessNone");
  $("#crypto>div").detach().prependTo("#cryptoNone");
  $("#cash>div").detach().prependTo("#cashNone");
});
$('a[href="#cashlessNone"]').on("click.smoothscroll", function (e) {
  e.preventDefault();
  $("#all>div").detach().prependTo("#allNone");
  $("#cashlessNone>div").detach().prependTo("#cashless");
  $("#crypto>div").detach().prependTo("#cryptoNone");
  $("#cash>div").detach().prependTo("#cashNone");
});
$('a[href="#cryptoNone"]').on("click.smoothscroll", function (e) {
  e.preventDefault();
  $("#cryptoNone>div").detach().prependTo("#crypto");
  $("#cash>div").detach().prependTo("#cashNone");
  $("#cashless>div").detach().prependTo("#cashlessNone");
  $("#all>div").detach().prependTo("#allNone");
});
$('a[href="#cashNone"]').on("click.smoothscroll", function (e) {
  e.preventDefault();
  $("#all>div").detach().prependTo("#allNone");
  $("#cashless>div").detach().prependTo("#cashlessNone");
  $("#crypto>div").detach().prependTo("#cryptoNone");
  $("#cashNone>div").detach().prependTo("#cash");
});

$("#btnAll-right").click(function () {
  $("#btnCash-right").removeClass("active-btn");
  $("#btncCashless-right").removeClass("active-btn");
  $("#btnCrypto-right").removeClass("active-btn");
  $("exchanger-list__text").removeClass("exchanger-list__text.active-btn");
  $(this).addClass("active-btn");
});
$("#btnCash-right").click(function () {
  $("#btnAll-right").removeClass("active-btn");
  $("#btncCashless-right").removeClass("active-btn");
  $("#btnCrypto-right").removeClass("active-btn");
  $("exchanger-list__text").removeClass("exchanger-list__text.active-btn");
  $(this).addClass("active-btn");
});
$("#btncCashless-right").click(function () {
  $("#btnAll-right").removeClass("active-btn");
  $("#btnCash-right").removeClass("active-btn");
  $("#btnCrypto-right").removeClass("active-btn");
  $("exchanger-list__text").removeClass("exchanger-list__text.active-btn");
  $(this).addClass("active-btn");
});
$("#btnCrypto-right").click(function () {
  $("#btnAll-right").removeClass("active-btn");
  $("#btnCash-right").removeClass("active-btn");
  $("#btncCashless-right").removeClass("active-btn");
  $("exchanger-list__text").removeClass("exchanger-list__text.active-btn");
  $(this).addClass("active-btn");
});

$('a[href="#allNone-right"]').on("click.smoothscroll", function (e) {
  e.preventDefault();
  $("#allNone-right>div").detach().prependTo("#all-right");
  $("#cashless-right>div").detach().prependTo("#cashlessNone-right");
  $("#crypto-right>div").detach().prependTo("#cryptoNone-right");
  $("#cash-right>div").detach().prependTo("#cashNone-right");
});
$('a[href="#cashlessNone-right"]').on("click.smoothscroll", function (e) {
  e.preventDefault();
  $("#all-right>div").detach().prependTo("#allNone-right");
  $("#cashlessNone-right>div").detach().prependTo("#cashless-right");
  $("#crypto-right>div").detach().prependTo("#cryptoNone-right");
  $("#cash-right>div").detach().prependTo("#cashNone-right");
});
$('a[href="#cryptoNone-right"]').on("click.smoothscroll", function (e) {
  e.preventDefault();
  $("#cryptoNone-right>div").detach().prependTo("#crypto-right");
  $("#cash-right>div").detach().prependTo("#cashNone-right");
  $("#cashless-right>div").detach().prependTo("#cashlessNone-right");
  $("#all-right>div").detach().prependTo("#allNone-right");
});
$('a[href="#cashNone-right"]').on("click.smoothscroll", function (e) {
  e.preventDefault();
  $("#all-right>div").detach().prependTo("#allNone-right");
  $("#cashless-right>div").detach().prependTo("#cashlessNone-right");
  $("#crypto-right>div").detach().prependTo("#cryptoNone-right");
  $("#cashNone-right>div").detach().prependTo("#cash-right");
});

$("#start").click(function () {
  $("#stop").addClass("pause");
  $(".start").removeClass(".start.pause");
  $(this).removeClass("pause");
  beg.start();
});
$("#stop").click(function () {
  $("#start").addClass("pause");
  $(".stop").removeClass(".stop.pause");
  $(this).removeClass("pause");
  beg.stop();
});
$("#start1").click(function () {
  $("#stop1").addClass("pause");
  $(".start").removeClass(".start.pause");
  $(this).removeClass("pause");
  begFooter.start();
});
$("#stop1").click(function () {
  $("#start1").addClass("pause");
  $(".stop").removeClass(".stop.pause");
  $(this).removeClass("pause");
  begFooter.stop();
});

$(document).ready(function () {
  $(".slide-direction").slick({
    vertical: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 1200,
    arrows: true,
    dots: true,
    autoplay: false,
    autoplaySpeed: 2500,
  });
  $(".slider-review-mobile").slick({
    vertical: false,
    slidesToScroll: 1,
    slidesToShow: 1,
    speed: 2500,
    arrows: true,
    dots: true,
    autoplay: false,
    autoplaySpeed: 2500,
  });
});

$(".dropdown").click(function () {
  $(this).attr("tabindex", 1).focus();
  $(this).toggleClass("active");
  $(this).find(".dropdown-menu").slideToggle(300);
});
$(".dropdown").focusout(function () {
  $(this).removeClass("active");
  $(this).find(".dropdown-menu").slideUp(300);
});
$(".dropdown .dropdown-menu li").click(function () {
  $(this).parents(".dropdown").find("span").text($(this).text());
  $(this).parents(".dropdown").find("input").attr("value", $(this).attr("id"));
});
$(".dropdown-menu li").click(function () {
  var input =
      "<strong>" +
      $(this).parents(".dropdown").find("input").val() +
      "</strong>",
    msg = '<span class="msg">Hidden input value: ';
  $(".msg").html(msg + input + "</span>");
});

const animItems = document.querySelectorAll("._anim-item");

if (animItems.length > 0) {
  window.addEventListener("scroll", animOnScroll);
  function animOnScroll() {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if (
        pageYOffset > animItemOffset - animItemPoint &&
        pageYOffset < animItemOffset + animItemHeight
      ) {
        animItem.classList.add("_active");
      } else {
        if (!animItem.classList.contains("_anim-no-hide")) {
          animItem.classList.remove("_active");
        }
      }
    }
    function offset(el) {
      const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    }
  }
  setTimeout(() => {
    animOnScroll();
  }, 100);
  animOnScroll();
}

const animRight = document.querySelectorAll("._anim-item-right");

if (animRight.length > 0) {
  window.addEventListener("scroll", animOnScroll1);
  function animOnScroll1() {
    for (let index = 0; index < animRight.length; index++) {
      const animItem = animRight[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if (
        pageYOffset > animItemOffset - animItemPoint &&
        pageYOffset < animItemOffset + animItemHeight
      ) {
        animItem.classList.add("_active");
      } else {
        if (!animItem.classList.contains("_anim-no-hide")) {
          animItem.classList.remove("_active");
        }
      }
    }
    function offset(el) {
      const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    }
  }
  setTimeout(() => {
    animOnScroll1();
  }, 100);
  animOnScroll1();
}

const animLeft = document.querySelectorAll("._anim-item-left");

if (animLeft.length > 0) {
  window.addEventListener("scroll", animOnScroll2);
  function animOnScroll2() {
    for (let index = 0; index < animLeft.length; index++) {
      const animItem = animLeft[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if (
        pageYOffset > animItemOffset - animItemPoint &&
        pageYOffset < animItemOffset + animItemHeight
      ) {
        animItem.classList.add("_active");
      } else {
        if (!animItem.classList.contains("_anim-no-hide")) {
          animItem.classList.remove("_active");
        }
      }
    }
    function offset(el) {
      const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    }
  }
  setTimeout(() => {
    animOnScroll2();
  }, 100);
  animOnScroll2();
}

const animText = document.querySelectorAll("._anim-item-text");

if (animText.length > 0) {
  window.addEventListener("scroll", animOnScroll3);
  function animOnScroll3() {
    for (let index = 0; index < animText.length; index++) {
      const animItem = animText[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if (
        pageYOffset > animItemOffset - animItemPoint &&
        pageYOffset < animItemOffset + animItemHeight
      ) {
        animItem.classList.add("_active");
      } else {
        if (!animItem.classList.contains("_anim-no-hide")) {
          animItem.classList.remove("_active");
        }
      }
    }
    function offset(el) {
      const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    }
  }
  setTimeout(() => {
    animOnScroll3();
  }, 100);
  animOnScroll3();
}

$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header__burger,.header__menu").toggleClass("active");
    $("body").toggleClass("lock");
    $(".header__language").toggleClass("active");
  });
});
$(document).ready(function () {
  $("#btc_1").hover(function () {
    $(".reserve-btc__item-text-bottom_img.one").toggleClass("hover");
  });
  $("#btc_2").hover(function () {
    $(".reserve-btc__item-text-bottom_img.two").toggleClass("hover");
  });
  $("#btc_3").hover(function () {
    $(".reserve-btc__item-text-bottom_img.three").toggleClass("hover");
  });
  $("#btc_4").hover(function () {
    $(".reserve-btc__item-text-bottom_img.four").toggleClass("hover");
  });
  $("#btc_5").hover(function () {
    $(".reserve-btc__item-text-bottom_img.five").toggleClass("hover");
  });
  $("#btc_6").hover(function () {
    $(".reserve-btc__item-text-bottom_img.six").toggleClass("hover");
  });
  $("#btc_7").hover(function () {
    $(".reserve-btc__item-text-bottom_img.seven").toggleClass("hover");
  });
  $("#btc_8").hover(function () {
    $(".reserve-btc__item-text-bottom_img.eight").toggleClass("hover");
  });
  $("#btc_9").hover(function () {
    $(".reserve-btc__item-text-bottom_img.nine").toggleClass("hover");
  });
  $("#btc_10").hover(function () {
    $(".reserve-btc__item-text-bottom_img.ten").toggleClass("hover");
  });
  $("#btc_11").hover(function () {
    $(".reserve-btc__item-text-bottom_img.eleven").toggleClass("hover");
  });
  $("#btc_12").hover(function () {
    $(".reserve-btc__item-text-bottom_img.twelve").toggleClass("hover");
  });
});

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  return {
    total: t,
    seconds: seconds,
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var secondsSpan = clock.querySelector(".seconds");

  function updateClock() {
    var t = getTimeRemaining(endtime);

    if (t.total <= 0) {
      clearInterval(timeinterval);
      var deadline = new Date(Date.parse(new Date()) + 30 * 1000);
      initializeClock("countdown", deadline);
    }
    secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date()) + 30 * 1000);
initializeClock("countdown", deadline);
