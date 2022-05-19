let pronouns = ["they", "them", "people", "themselves","envy","jealousy",'jealous','I'];
$(document).ready(function () {
  let tokens = RiTa.tokenize(
    "I envy people who are light—like Tomas in The Unbearable Lightness of Being. I envy people who have a good sleep, always positive, put themselves first, accept themselves as they are. Jealousy stimulates me to prove that I deserve it. If I examine it carefully, I will admit that I am a weak person. But I'm most afraid of this hesitation. A word from some random passer-by may make me feel embarrassed. I have a high self-esteem, but I easily get extremely nervous. I am sensitive to the surrounding all the time, also nitpicking to myself uncontrollably. I can be moody, pessimistic, arrogant, self-conscious, inadequate, while there is an authority figure, a better “version” of me in my mind, to criticize and despise myself. Meanwhile, I can also feel tremendous empathy that needs to be put away. I am full of confusion and contradictory thoughts. I am an emotion-driven person. I get used to being directed by emotions. Most of them are insecurity, it motivates me to learn, adapt, and function as an appropriate human being. It was always shameful to say that insecurity and fear motivate one to act. I always submerge myself into emotional waves, letting them flood over me, suffocating me. They are also caves where my insecurity thrives. From time to time, I feel protected by this insecurity, I accept it to be a part of my weighed-down life. I stumble upon words to describe this perverse feeling—I need some difficulty to solve, I need the heaviness coming into my life. It still, brings me impediment, but it transforms into some kind of catalyst for constructing my own structure."
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
