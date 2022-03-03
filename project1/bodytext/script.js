$(document).ready(function () {
  $("#chinese").mouseover(function () {
    $("#english").hide();
    $("#japanese").hide();
    $("#chinese").css({ "grid-column": "2/5" });
  });

  $("#chinese").mouseleave(function () {
    $("#english").fadeIn("slow", function () {});
    $("#japanese").fadeIn("slow", function () {});
    $("#chinese").css({ "grid-column": "2/4" });
    $("#cc1").css({ display: "none" });
    $("#cc2").css({ display: "none" });
    $("#cc3").css({ display: "none" });
    $("#cc4").css({ display: "none" });
    $("#cc5").css({ display: "none" });
  });
  $("#english").mouseover(function () {
    $("#chinese").hide();
    $("#japanese").hide();
    $("#english").css({ "grid-column": "4/7" });
  });
  $("#english").mouseleave(function () {
    $("#chinese").fadeIn("slow", function () {});
    $("#japanese").fadeIn("slow", function () {});
    $("#english").css({ "grid-column": "4/6" });
  });
  $("#japanese").mouseover(function () {
    $("#chinese").hide();
    $("#english").hide();
    $("#japanese").css({ "grid-column": "5/8" });
    $(".figurejp").css({ display: "block", "grid-column": "2/5" });
  });
  $("#japanese").mouseleave(function () {
    $("#chinese").fadeIn("slow", function () {});
    $("#english").fadeIn("slow", function () {});
    $("#japanese").css({ "grid-column": "6/8" });
    $(".figurejp").css({ display: "none" });
  });
  $("#c1").click(function () {
    $("#cc1").css({ display: "block" });
    $("#cc2").css({ display: "none" });
    $("#cc3").css({ display: "none" });
    $("#cc4").css({ display: "none" });
    $("#cc5").css({ display: "none" });
  });
  $("#c2").click(function () {
    $("#cc1").css({ display: "none" });
    $("#cc2").css({ display: "block" });
    $("#cc3").css({ display: "none" });
    $("#cc4").css({ display: "none" });
    $("#cc5").css({ display: "none" });
  });
  $("#c3").click(function () {
    $("#cc1").css({ display: "none" });
    $("#cc2").css({ display: "none" });
    $("#cc3").css({ display: "block" });
    $("#cc4").css({ display: "none" });
    $("#cc5").css({ display: "none" });
  });
  $("#c4").click(function () {
    $("#cc1").css({ display: "none" });
    $("#cc2").css({ display: "none" });
    $("#cc3").css({ display: "none" });
    $("#cc4").css({ display: "block" });
    $("#cc5").css({ display: "none" });
  });
  $("#c5").click(function () {
    $("#cc1").css({ display: "none" });
    $("#cc2").css({ display: "none" });
    $("#cc3").css({ display: "none" });
    $("#cc4").css({ display: "none" });
    $("#cc5").css({ display: "block" });
  });
});
