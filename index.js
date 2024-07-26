$(document).ready(function () {
  $(".hamburg_ico").click(function () {
    $(".hamburg_menu").stop().fadeIn(500);
    $(".hamburg_follow_us").stop().fadeIn(500);
    $(".close").stop().fadeIn(500);
  });
  $(".close").click(function () {
    $(".hamburg_menu").stop().fadeOut(500);
    $(".hamburg_follow_us").stop().fadeOut(500);
    $(".close").stop().fadeOut(500);
  });
  // $(".hamburg_gnb>li").click(function () {
  //   $(this).children(".hamburg_gnb_box").fadeToggle();
  // });
});
