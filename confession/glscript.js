var noun, verb, everythingElse;
let pronouns=['I', 'you'];
$(document).ready(function () {
  let tokens = RiTa.tokenize(
    "My roommate and I were losing weight. Oh, everyone in the women’s dormitory was losing weight. We took turns weighing ourselves every morning in our dormitory. My roommate had already reached 100 pounds from the extreme diet, and she still wanted to lose another 10 pounds. She shouted that she might as well die if she exceeded 110 pounds. I was just over 110 pounds standing next to her. Was she saying this to me? I was very self-conscious. I secretly made up my mind that my weight loss progress must catch up with hers. At the end of my first year, I set myself a strict weight-loss plan; drinking only water for three days and eating a lot on the fourth. This fourth day usually turned into a feast. I ate mechanically without restraint until my stomach throbbed with breathing, and I could only lie on my back. It was too much, and I could only throw it up later. I induced vomiting, usually with chopsticks. If you saw a few chopsticks by the sink, that was how many times I vomited tonight. Vomiting was also skillful. You had to use the chopsticks to spin around the most sensitive part of your throat, and then you would start to dry cough; you could not stop at this point, but you had to speed up with the rhythm of the chopsticks. Eventually, you would be overwhelmed with severe disgusting dizziness (it felt like a small ghost grinding your stomach with a millstone), and you could finally throw it all up. Since I could vomit after eating, I started a stress-free feast-vomit cycle. Sometimes, when I went to the bathroom, I could even hear the girl throwing up with me next door. We were “comrades-in-arms” who did not communicate verbally but only vomited. In the university dormitory, young girls “guarded” their bodies together with self-discipline. Some girls said on the internet that they should drink more water before vomiting smoothly. A girl said it was convenient to vomit with a tube in her throat. There was even a group called “Rabbit (same pronunciation as ‘‘Vomit’’ in Chinese)” to exchange experiences of inducing vomiting after eating. In Taobao, there were merchants selling Ascaris eggs, and if you ate them, you would be “thin”; in Red Book (a Chinese social media), the girls used the words “fragile,” poor,” and “so thin that people have a desire to protect” to describe the final form of female sexuality. In my first year, I lost more than 30 pounds, and I also got chronic stomach problems and hair loss caused by malnutrition. But you ask me, did my life get “better” of being thin? I have to say that through the hundreds of retching, acid reflux, and abdominal cramps after binge eating, I finally became more confident in my figure, dared to wear short skirts, and had more love. This may be the sad part of it all?"
  );
  // let tokens=RiTa.tokenize(
  //     'I am in a room with you.'
  // );
  for (let i = 0; i < tokens.length; i++) {
    console.log(tokens[i]);
    if( pronouns.includes(tokens[i]) ){
        console.log('pronoun', tokens[i])
    }
    if (
      //   RiTa.isNoun(tokens[i]) === false &&
      RiTa.isVerb(tokens[i]) === false &&
      RiTa.isPunct(tokens[i]) === false
    ) {
      everythingElse = tokens[i];
      console.log(everythingElse);
      $("#content").append('<span class="else"> ' + everythingElse + "</span>");
    }
    // if (RiTa.isNoun(tokens[i]) === true && RiTa.isVerb(tokens[i]) === false) {
    //   noun = tokens[i];
    //   console.log(noun);
    //   $("#content").append('<span class="noun"> ' + noun + "</span>");
    // }
    if (RiTa.isVerb(tokens[i]) === true) {
      verb = tokens[i];
      console.log(verb);
      $("#content").append('<span class="verb"> ' + verb + "</span>");
    }
    if (RiTa.isPunct(tokens[i]) === true) {
      punct = tokens[i];
      console.log(punct);
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
