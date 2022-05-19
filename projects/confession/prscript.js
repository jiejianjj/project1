let pronouns = ["I", "me", "myself", "my"];
$(document).ready(function () {
  let tokens = RiTa.tokenize(
    "I used to feel really self conscious about my social image. I walk into a room and immediately feel the pressure mounting upon me. I wonder “am I cool enough? Would I be accepted or loved?” I felt insecure, and I cared about what other people think. Because of these insecurities I decided to build up personas to adapt to the social pool. These personas, strangely, helped me build a strong sense of pride and confidence. Each day I wake up and decide on the persona I want to wear for the day. Then I pick out my clothes, brush my hair, and walk out the door based on the persona I prescribe to myself. Everything suddenly feels right, I feel proud and empowered walking into the room. No one else matters, there is only me. I started to love myself more and more, and I believed in my choices. Some may say that I lost my identity in the process of seeking social acceptance, but I would argue that In the process of social self-preservation, pride pushed me to evolve into who I am, and I love it."
  );

  for (let i = 0; i < tokens.length; i++) {
    if (pronouns.includes(tokens[i])) {
      $("#content").append('<span class="i"> ' + tokens[i] + "</span>");
    }
    if (
      pronouns.includes(tokens[i]) === false &&
      RiTa.isPunct(tokens[i]) === false
    ) {
      everythingElse = tokens[i];
      $("#content").append('<span class="else"> ' + everythingElse + "</span>");
    }
    if (RiTa.isPunct(tokens[i]) === true) {
      punct = tokens[i];
      $("#content").append('<span class="punct">' + punct + " <br></span>");
    }
  }

  $(".else").click(function () {
    $(this).toggleClass("visible");
  });
  $(".punct").click(function () {
    $(this).toggleClass("visible");
  });
  $("#all").click(function () {
    $('.else').addClass("visible");
    $(".punct").addClass("visible");
    // $(".else").css("color", "black");
  });
  $("#none").click(function () {
    $('.else').removeClass("visible");
    $(".punct").removeClass("visible");
  });
});
