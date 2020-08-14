//헤더 스크롤 고정, 탑버튼 나타나고 숨기기
$(window).scroll(function () {
  if ($(window).scrollTop() > 80) {
    $('header, .gototop, .navi').addClass('active');
  } else {
    $('header, .gototop, .navi').removeClass('active');
  }
});

//탑버튼 클릭 시 상단으로 가기
$('.gototop').click(function () {
  $('html, body').animate({
    scrollTop: 0
  }, 700);
});

//전체메뉴 클릭 이벤트
$('.menu-all').hide();
$('.shop-menu').click(function () {
  $('.menu-all').removeClass('active');
  $('.menu-all').addClass('active');
  $('.menu-all').slideToggle(300);
});

//메뉴클릭 시 해당 섹션 이동
$('.topmenu ul li a').click(function (e) {
  e.preventDefault;
  var target = (this).attr('href');
  $('html, body').stop().animate({
    scrollTop: target.offset().top
  }, 500);
});

//캐릭터 프로필 탭
$(".tab-btn").click(function () {
  var i = $(this).index();
  $(".profile, .tab-btn").removeClass("on");
  $(".profile").eq(i).addClass("on");
  $(this).addClass("on");
});

//장바구니 & 동영상 모달
$('.goods-cart').click(function () {
  $('.cart-modal').show();
});

var embed = $('#player');
$('.media-video a').click(function () {
  var path = $(this).attr('href');
  $('.media-modal .media-con').append(embed);
  $(path).show();
});

$('.modal-layer, .modal-close').click(function () {
  $('.modal').hide();
  $('.media-modal .media-con').empty();
});

//MD's pick 슬라이드
var i = 0
var len = $('.pick-box li').length; //li개수
var wid = len * 375; //li감싸고 있는 박스 너비
$('.pick-box').css({
  width: wid
});
$('.right-btn').click(function () {
  if (i < (len - 3)) { //개수 - 화면에 보이는 개수
    i++;
    var move = i * (-375)
    $('.pick-box').stop().animate({
      marginLeft: move
    }, 300)
  } else {
    $('.pick-box').stop().animate({
      marginLeft: 0
    }, 300)
    i = 0;
  }
});
$('.left-btn').click(function () {
  if (i > 0) {
    i--;
    var move = i * (-375)
    $('.pick-box').stop().animate({
      marginLeft: move
    }, 300)
  } else {
    false
  }
});

//검색창
$('.search-btn').click(function () {
  $('.search').toggleClass('on');
});
