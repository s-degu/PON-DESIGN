"use strict";

// トップへ戻るボタン
jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる
  var topBtn = $(".c-page-top");
  topBtn.hide(); // ボタンの表示設定

  $(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
    }
  }); // ボタンをクリックしたらスクロールして上に戻る

  topBtn.click(function () {
    $("body,html").animate({
      scrollTop: 0
    }, 300, "swing");
    return false;
  });
}); // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)

$(document).on("click", 'a[href*="#"]', function () {
  var time = 400;
  var header = $("header").innerHeight();
  console.log(header);
  var target = $(this.hash);
  if (!target.length) return;
  var targetY = target.offset().top - header;
  $("html,body").animate({
    scrollTop: targetY
  }, time, "swing");
  return false;
});