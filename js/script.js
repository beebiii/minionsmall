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

//검색창
$('.search-btn').click(function () {
  $('.search').toggleClass('on');
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
  var target = $(this).attr('href');
  $('html, body').stop().animate({
    scrollTop: $(target).offset().top
  }, 500);
});

//캐릭터 프로필 탭
$(".tab-btn").click(function () {
  var i = $(this).index();
  $(".profile, .tab-btn").removeClass("on");
  $(".profile").eq(i).addClass("on");
  $(this).addClass("on");
});

//상품 간략보기
$('.goods-cart').click(function () {
  $('.cart-modal').show();
});

//동영상 모달
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
    }, 500)
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
    $('.pick-box').stop().animate({
      marginLeft: (len-3) * (-375)
    }, 500)
    i = len-3;
  }
});

//간략보기 계산
var defaultPrice = $('#defult-price').text();
var defaultPriceNum = Number(defaultPrice.replace(',',''));
var productPrice = $('#product-price').text();
var productPriceNum = Number(productPrice.replace(',',''));
var productPriceResult = $('#product-price').text(productPriceNum);
var total = $('#total').text();
var totalNum = Number(total.replace(',',''));
var totalResult = $('#total').text(totalNum);
var inputCount = 1;
var count;

var productAddHtml = '<tr><th><p id="product-option">미니언즈 피규어 세트 <em id="option"></em></p></th><td><span id="count" class="count"><button class="minus"><span class="hide">빼기</span></button><input class="input-count" type="text" value="1"><button class="plus"><span class="hide">더하기</span></button></span></td><td><span class="product-price price-style"><em id="product-price">28,000</em>원</span></td><td><button class="list-del"><i class="fa fa-times" aria-hidden="true"></i></button></td></tr>';

//상품옵션 선택
$('#product').change(function(){
  var productOpt = $(this).val();
  
  $('.product-add tbody').each(function(){
    var optionInput = $(this).find('#option').text();
    console.log(optionInput)
    if (productOpt === optionInput) {
      return false;
    } else {
      $(this).append(productAddHtml);
      $(this).find($('#option')).text(productOpt);

    }
  });

  /* if (productOpt !== '0') {
    productPriceResult = productPriceNum + Number(productOpt);
    $('#product-price').text(productPriceResult);
  } else {
    $('#product-price').text(defaultPriceNum);
  } */
});

//상품 개수 선택
$('.count button').on('click', function(){
  if($(this).hasClass('plus')) {
    inputCount++;
  } else {
    if (inputCount > 1) {
      inputCount--;
    }
  }
  count = inputCount;
  $('.input-count').val(count);
  productPriceResult = productPriceNum * count;
  var comma = Number(productPriceResult).toLocaleString('en');
  $('#product-price').text(comma);
});

//배송비 옵션 선택
$('#delivery').change(function(){
  var delPay = $(this).val();
  if (delPay === 'order') {
    totalResult = totalNum + 2500;
    $('#total').text(totalResult);
  } else {
    $('#total').text(totalNum);
  }
});


//총상품금액 계산하기
$.fn.totalCalc = function() {
  productPriceResult = productPriceNum * count;
  var comma = Number(productPriceResult).toLocaleString('en');
  $('#total').text(comma);
}