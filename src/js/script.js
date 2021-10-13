$(function () {
  //スクロール時のヘッダー背景色
  jQuery(window).on("scroll", function () {
    const sliderHeight = $(".js-hero").height();
    if (sliderHeight < jQuery(this).scrollTop()) {
      jQuery(".l-header").addClass("l-header__bg-color--change");
    } else {
      jQuery(".l-header").removeClass("l-header__bg-color--change");
    }
  });

  //画像スライダー設定
  $(".js-slick").slick({
    //{}を入れる
    autoplay: false, //「オプション名: 値」の形式で書く
    arrows: false,
    dots: true,
  });
});

// トップへ戻るボタン

jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる

  var topBtn = $(".c-page-top");
  topBtn.hide();

  // ボタンの表示設定
  $(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
    }
  });

  // ボタンをクリックしたらスクロールして上に戻る
  topBtn.click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      300,
      "swing"
    );
    return false;
  });
});
