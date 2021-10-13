"use strict";

$(function () {
  $("#MenuButton").click(function () {
    // $(".l-drawer-menu").toggleClass("is-show");
    // $(".p-drawer-menu").toggleClass("is-show");
    // $(".js-drawer-open").toggleClass("open");
    // $(".drawer-menu").toggleClass("open");
    // $("html").toggleClass("is-fixed");
    $(".l-header__nav").toggleClass("is-show");
    $("#MenuButton").toggleClass("is-active");
    $(".c-mask").toggleClass("is-show");
  });
});