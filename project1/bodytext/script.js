$(document).ready(function () {
  $(function() {
        $('a[href]').attr('target', '_blank');
    });
  $("#c1").click(function () {
    $("#cc1").toggle({ display: "block" });
  });
  $("#c2").click(function () {
    $("#cc2").toggle({ display: "block" });
  });
  $("#c3").click(function () {
    $("#cc3").toggle({ display: "block" });
  });
  $("#c4").click(function () {
    $("#cc4").toggle({ display: "block" });
  });
  $("#c5").click(function () {
    $("#cc5").toggle({ display: "block" });
  });
  $("#e1").click(function () {
    $("#ee1").toggle({ display: "block" });
  });
  $("#e2").click(function () {
    $("#ee2").toggle({ display: "block" });
  });
  $("#e3").click(function () {
    $("#ee3").toggle({ display: "block" });
  });
  $("#e4").click(function () {
    $("#ee4").toggle({ display: "block" });
  });
  $("#e5").click(function () {
    $("#ee5").toggle({ display: "block" });
  });
  $("#e6").click(function () {
    $("#ee6").toggle({ display: "block" });
  });
  $("#e7").click(function () {
    $("#ee7").toggle({ display: "block" });
  });
  $("#e8").click(function () {
    $("#ee8").toggle({ display: "block" });
  });
  $("#e9").click(function () {
    $("#ee9").toggle({ display: "block" });
  });
  $("#e10").click(function () {
    $("#ee10").toggle({ display: "block" });
  });
  $("#e11").click(function () {
    $("#ee11").toggle({ display: "block" });
  });
  $("#e12").click(function () {
    $("#ee12").toggle({ display: "block" });
  });
  $("#e13").click(function () {
    $("#ee13").toggle({ display: "block" });
  });
  $("#e14").click(function () {
    $("#ee14").toggle({ display: "block" });
  });
  $("#e15").click(function () {
    $("#ee15").toggle({ display: "block" });
  });
  $("#e16").click(function () {
    $("#ee16").toggle({ display: "block" });
  });
  $("#e17").click(function () {
    $("#ee17").toggle({ display: "block" });
  });
  $("#e18").click(function () {
    $("#ee18").toggle({ display: "block" });
  });
  $("#e19").click(function () {
    $("#ee19").toggle({ display: "block" });
  });
  $("#e20").click(function () {
    $("#ee20").toggle({ display: "block" });
  });
  $("#e21").click(function () {
    $("#ee21").toggle({ display: "block" });
  });
  $("#e22").click(function () {
    $("#ee22").toggle({ display: "block" });
  });
  $("#e23").click(function () {
    $("#ee23").toggle({ display: "block" });
  });
  $("#j1").click(function () {
    $("#jj1").toggle({ display: "block" });
  });
  $("#j2").click(function () {
    $("#jj2").toggle({ display: "block" });
  });
  $("#j3").click(function () {
    $("#jj3").toggle({ display: "block" });
  });
  $("#j4").click(function () {
    $("#jj4").toggle({ display: "block" });
  });
  $("#j5").click(function () {
    $("#jj5").toggle({ display: "block" });
  });
  $("#showc").click(function(){
    $(".scrollbar").hide();
    $("#chinese").show();
    $("#english").hide();
    $("#japanese").hide();
    $(".e").hide();
    $(".j").hide();
    $(".c").show();
    $("#cc1,#cc2,#cc3,#cc4,#cc5").show();
  })
  $("#showe").click(function(){
    $(".scrollbar").hide();
    $("#chinese").hide();
    $("#english").show();
    $("#japanese").hide();
    $(".j").hide();
    $(".c").hide();
    $(".e").show();
    $("#ee1,#ee2,#ee3,#ee4,#ee5,#ee6,#ee7,#ee8,#ee9,#ee10,#ee11,#ee12,#ee13,#ee14,#ee15,#ee16,#ee17,#ee18,#ee19,#ee20,#ee21,#ee22,#ee23").show();
  })
  $("#showj").click(function(){
    $(".scrollbar").hide();
    $("#english").hide();
    $("#chinese").hide();
    $("#japanese").show();
    $(".e").hide();
    $(".c").hide();
    $(".j").show();
    $("#jj1,#jj2,#jj3,#jj4,#jj5").show();
  })
  $(window).bind('resize', function(e)
{
  if (window.RT) clearTimeout(window.RT);
  window.RT = setTimeout(function()
  {
    this.location.reload(false); /* false to get page from cache */
  }, 100);
});
if($(window).width() < 600)
{
  $(".marquee").replaceWith(function() { return $(this).contents(); });
}

  
  // $("#chinese").mouseover(function () {
  //   $("#english").hide();
  //   $("#japanese").hide();
  //   $("#chinese").css({ "grid-column": "2/5" });
  // });

  // $("#chinese").mouseleave(function () {
  //   $("#english").fadeIn("slow", function () {});
  //   $("#japanese").fadeIn("slow", function () {});
  //   $("#chinese").css({ "grid-column": "2/4" });
  //   $("#cc1").css({ display: "none" });
  //   $("#cc2").css({ display: "none" });
  //   $("#cc3").css({ display: "none" });
  //   $("#cc4").css({ display: "none" });
  //   $("#cc5").css({ display: "none" });
  // });
  
  // $("#english").mouseover(function () {
  //   $("#chinese").hide();
  //   $("#japanese").hide();
  //   $("#english").css({ "grid-column": "4/7" });
  // });
  // $("#english").mouseleave(function () {
  //   $("#chinese").fadeIn("slow", function () {});
  //   $("#japanese").fadeIn("slow", function () {});
  //   $("#english").css({ "grid-column": "4/6" });
  // });
  // $("#japanese").mouseover(function () {
  //   $("#chinese").hide();
  //   $("#english").hide();
  //   $("#japanese").css({ "grid-column": "5/8" });
  //   $(".figurejp").css({ display: "block", "grid-column": "2/5" });
  // });
  // $("#japanese").mouseleave(function () {
  //   $("#chinese").fadeIn("slow", function () {});
  //   $("#english").fadeIn("slow", function () {});
  //   $("#japanese").css({ "grid-column": "6/8" });
  //   $(".figurejp").css({ display: "none" });
  // });
});
