$("#start").click(function () {
	$("#stop").addClass("pause");
	$(".start").removeClass(".start.pause");
	$(this).removeClass("pause");

	interval = setInterval(move, 40);
});
$("#stop").click(function () {
	$("#start").addClass("pause");
	$(".stop").removeClass(".stop.pause");
	$(this).removeClass("pause");

	clearInterval(interval);
});
$("#start1").click(function () {
	$("#stop1").addClass("pause");
	$(".start").removeClass(".start.pause");
	$(this).removeClass("pause");

	interval1 = setInterval(move1, 40);
});
$("#stop1").click(function () {
	$("#start1").addClass("pause");
	$(".stop").removeClass(".stop.pause");
	$(this).removeClass("pause");

	clearInterval(interval1);
});

// left
$("#btnAll").click(function () {
	$(this).addClass("active-btn");
	$("#btnCash").removeClass("active-btn");
	$("#btnCashless").removeClass("active-btn");
	$("#btnCrypto").removeClass("active-btn");
	$("#btnPayment").removeClass("active-btn");
	$("#btnCNY").removeClass("active-btn");
	$(".cash").removeClass("none");
	$(".cashless").removeClass("none");
	$(".crypto").removeClass("none");
	$(".payment").removeClass("none");
	$(".cny").removeClass("none");
});
$("#btnCash").click(function () {
	$(this).addClass("active-btn");
	$("#btnAll").removeClass("active-btn");
	$("#btnCashless").removeClass("active-btn");
	$("#btnCrypto").removeClass("active-btn");
	$("#btnPayment").removeClass("active-btn");
	$("#btnCNY").removeClass("active-btn");
	$(".cash").removeClass("none");
	$(".cashless").addClass("none");
	$(".crypto").addClass("none");
	$(".payment").addClass("none");
	$(".cny").addClass("none");
});
$("#btnCashless").click(function () {
	$(this).addClass("active-btn");
	$("#btnCash").removeClass("active-btn");
	$("#btnAll").removeClass("active-btn");
	$("#btnCrypto").removeClass("active-btn");
	$("#btnPayment").removeClass("active-btn");
	$("#btnCNY").removeClass("active-btn");
	$(".cashless").removeClass("none");
	$(".cash").addClass("none");
	$(".crypto").addClass("none");
	$(".payment").addClass("none");
	$(".cny").addClass("none");
});
$("#btnCrypto").click(function () {
	$(this).addClass("active-btn");
	$("#btnCash").removeClass("active-btn");
	$("#btnCashless").removeClass("active-btn");
	$("#btnAll").removeClass("active-btn");
	$("#btnPayment").removeClass("active-btn");
	$("#btnCNY").removeClass("active-btn");
	$(".crypto").removeClass("none");
	$(".cash").addClass("none");
	$(".cashless").addClass("none");
	$(".payment").addClass("none");
	$(".cny").addClass("none");
});
$("#btnPayment").click(function () {
	$(this).addClass("active-btn");
	$("#btnCash").removeClass("active-btn");
	$("#btnCashless").removeClass("active-btn");
	$("#btnCrypto").removeClass("active-btn");
	$("#btnAll").removeClass("active-btn");
	$("#btnCNY").removeClass("active-btn");
	$(".payment").removeClass("none");
	$(".cash").addClass("none");
	$(".cashless").addClass("none");
	$(".crypto").addClass("none");
	$(".cny").addClass("none");
});
$("#btnCNY").click(function () {
	$(this).addClass("active-btn");
	$("#btnCash").removeClass("active-btn");
	$("#btnCashless").removeClass("active-btn");
	$("#btnCrypto").removeClass("active-btn");
	$("#btnPayment").removeClass("active-btn");
	$("#btnAll").removeClass("active-btn");
	$(".cny").removeClass("none");
	$(".cash").removeClass("none");
	$(".cashless").removeClass("none");
	$(".crypto").removeClass("none");
	$(".payment").removeClass("none");
});
//right
$("#btnAllright").click(function () {
	$(this).addClass("active-btn");
	$("#btnCashright").removeClass("active-btn");
	$("#btnCashlessright").removeClass("active-btn");
	$("#btnCryptoright").removeClass("active-btn");
	$("#btnPaymentright").removeClass("active-btn");
	$("#btnCNYright").removeClass("active-btn");
	$(".cash-right").removeClass("none");
	$(".cashless-right").removeClass("none");
	$(".crypto-right").removeClass("none");
	$(".payment-right").removeClass("none");
	$(".cny-right").removeClass("none");
});
$("#btnCashright").click(function () {
	$(this).addClass("active-btn");
	$("#btnAllright").removeClass("active-btn");
	$("#btnCashlessright").removeClass("active-btn");
	$("#btnCryptoright").removeClass("active-btn");
	$("#btnPaymentright").removeClass("active-btn");
	$("#btnCNYright").removeClass("active-btn");
	$(".cash-right").removeClass("none");
	$(".cashless-right").addClass("none");
	$(".crypto-right").addClass("none");
	$(".payment-right").addClass("none");
	$(".cny-right").addClass("none");
});
$("#btnCashlessright").click(function () {
	$(this).addClass("active-btn");
	$("#btnCashright").removeClass("active-btn");
	$("#btnAllright").removeClass("active-btn");
	$("#btnCryptoright").removeClass("active-btn");
	$("#btnPaymentright").removeClass("active-btn");
	$("#btnCNYright").removeClass("active-btn");
	$(".cashless-right").removeClass("none");
	$(".cash-right").addClass("none");
	$(".crypto-right").addClass("none");
	$(".payment-right").addClass("none");
	$(".cny-right").addClass("none");
});
$("#btnCryptoright").click(function () {
	$(this).addClass("active-btn");
	$("#btnCashright").removeClass("active-btn");
	$("#btnCashlessright").removeClass("active-btn");
	$("#btnAllright").removeClass("active-btn");
	$("#btnPaymentright").removeClass("active-btn");
	$("#btnCNYright").removeClass("active-btn");
	$(".crypto-right").removeClass("none");
	$(".cash-right").addClass("none");
	$(".cashless-right").addClass("none");
	$(".payment-right").addClass("none");
	$(".cny-right").addClass("none");
});
$("#btnPaymentright").click(function () {
	$(this).addClass("active-btn");
	$("#btnCashright").removeClass("active-btn");
	$("#btnCashlessright").removeClass("active-btn");
	$("#btnCryptoright").removeClass("active-btn");
	$("#btnAllright").removeClass("active-btn");
	$("#btnCNYright").removeClass("active-btn");
	$(".payment-right").removeClass("none");
	$(".cash-right").addClass("none");
	$(".cashless-right").addClass("none");
	$(".crypto-right").addClass("none");
	$(".cny-right").addClass("none");
});
$("#btnCNYright").click(function () {
	$(this).addClass("active-btn");
	$("#btnCashright").removeClass("active-btn");
	$("#btnCashlessright").removeClass("active-btn");
	$("#btnCryptoright").removeClass("active-btn");
	$("#btnPaymentright").removeClass("active-btn");
	$("#btnAllright").removeClass("active-btn");
	$(".cny-right").removeClass("none");
	$(".cash-right").removeClass("none");
	$(".cashless-right").removeClass("none");
	$(".crypto-right").removeClass("none");
	$(".payment-right").removeClass("none");
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
	$(".dropdown .dropdown-menu li .icon-left")
		.parents(".dropdown")
		.find(".select img")
		.attr("src", $(this).find(".icon-left").attr("src"));
	$(".dropdown .dropdown-menu li .icon-right")
		.parents(".dropdown")
		.find(".select img")
		.attr("src", $(this).find(".icon-right").attr("src"));
});

butt.onclick = function () {
	var val = document.getElementById("inputGet").value;
	document.getElementById("numberPopup").innerHTML = val;
};
$("#butt").click(function () {
	var textContent = $("#currencyInput").text();
	$("#currencyPopup").text(textContent);
	$(".popup__title")
		.find("#iconPopup")
		.attr("src", $("#selectGet").find("#iconCurrency").attr("src"));
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

setTimeout(() => {
	var deadline = new Date(Date.parse(new Date()) + 30 * 1000);
	initializeClock("countdown", deadline);
	$("#svg1").removeClass("none");
}, 3000);

let wrapper = document.querySelector('.marquee-wrapper'),
	marquee = document.querySelector('.marquee'),
	wrapperWidth = wrapper.offsetWidth,
	marqueeWidth = marquee.scrollWidth;



function move() {
	var currentTX = getComputedStyle(marquee).transform.split(',');
	if (currentTX[4] === undefined) {
		currentTX = -1;
	} else {
		currentTX = parseFloat(currentTX[4]) - 1;
	}

	if (-currentTX >= marqueeWidth) {
		marquee.style.transform = 'translateX(' + wrapperWidth + 'px)';

	} else {
		marquee.style.transform = 'translateX(' + currentTX + 'px)';
	}
}

let interval = setInterval(move, 40);

let wrapper1 = document.querySelector('.marquee-wrapper1'),
	marquee1 = document.querySelector('.marquee1'),
	wrapper1Width = wrapper1.offsetWidth,
	marquee1Width = marquee1.scrollWidth;

function move1() {
	var currentTX1 = getComputedStyle(marquee1).transform.split(',');
	if (currentTX1[4] === undefined) {
		currentTX1 = -1;
	} else {
		currentTX1 = parseFloat(currentTX1[4]) - 1;
	}

	if (-currentTX1 >= marquee1Width) {
		marquee1.style.transform = 'translateX(' + wrapper1Width + 'px)';

	} else {
		marquee1.style.transform = 'translateX(' + currentTX1 + 'px)';
	}
}

let interval1 = setInterval(move1, 40);

