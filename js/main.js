$(function(){
  /*=================================================
  ハンバーガ―メニュー
  ===================================================*/
  // ハンバーガーメニューをクリックした時
  $('.hamburger').on('click', function() {
    // ハンバーガーメニューの共通処理を呼び出す
    hamburger();
  });
  // メニューのリンクをクリックした時
  $('#navi a').on('click', function() {
    // ハンバーガーメニューの共通処理を呼び出す
    hamburger();
  });
})

  
/*=================================================
ハンバーガ―メニュー共通処理
===================================================*/
// ハンバーガーメニューをクリックした時とメニュー内のリンクをクリックした時の
// 処理が同じなので処理を共通化する
function hamburger() {
  // toggleClassを使用することで、hamburgerクラスにactiveクラスが存在する場合は削除、
  // 存在しない場合を追加する処理を自動で行ってくれる
  $('.hamburger').toggleClass('active');

  if ($('.hamburger').hasClass('active')) {
    // hamburgerクラスにactiveクラスが存在する場合は、naviにもactiveクラスを追加する
    $('#navi').addClass('active');
  } else {
    // hamburgerクラスにactiveクラスが存在しない場合は、naviからactiveクラスを削除する
    $('#navi').removeClass('active');
  }
}

  /*=================================================
スライドショー
===================================================*/

$(document).on('ready', function() {
  $(".regular").slick({
  // autoplay: true,
  // autoplaySpeed: 3000, // 1枚目初回の秒数
  // dots: true,

  //infinite: true,
  //speed: 2000,
  //autoplay: true,
  //autoplaySpeed: 200,
  //initialSlide:1 //この場合1枚目が最初に表示されます。

  infinite: true,
  speed: 1000, // スライドの切り替え速度を1秒に
  autoplay: true,
  autoplaySpeed: 3000, // 3秒ごとにスライドを切り替える
  initialSlide: 1

  });



  });


  

  

