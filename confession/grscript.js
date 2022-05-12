$(document).ready(function () {
  let tokens = RiTa.sentences(
    "Father absence has always been the norm of patriarchal families. In Asian women’s childhoods, the absence of responsible fathers inevitably causes trauma. In response to this trauma, their development in self-worth, intimate relationships, and sexual exploration has adapted to this new norm. The family structure has a significant role in Asian women’s growth of self-worth. Asian women are trained to perceive themselves as “members of a collective, notably the ‘family’ collective,” first and foremost. Uniqueness in Asian cultures is “neither lost nor denied in Asian cultures, but there is no ‘me’ considered in isolation from others; individuality is understood as the totality of one’s roles in relation to others.” This ambiguity helps explain their need for communities, a sense of “belonging” based on equality and comradeship. Still, it also leads to excessive and sometimes dangerous behaviors like binge drinking and sexual promiscuity. By appealing to exoticized Confucian virtues like educational aspirations, filial devotion, and meritocratic authority that resonate with American notions of hard effort, self-sufficiency, and excellence, the myth both exalts and marginalizes Asian otherness. With the proper guidance of both parents, a child could form a healthy relationship with themselves and have good self-worth. However, lack of parental support in the domestic space leaves children inevitably dependent on their self-image from their peers at school, and it is not guaranteed that a school is forever a safe place. Anxiety will quickly develop when there is no guaranteed safe harbor, whether at home or school. The reflection they see themselves in is mainly dependent on the social standard, and an obligation of fitting in arises. Without the proper guidance of parents or one-parent absence, especially fathers, due to patriarchal structure, children feel neglected and must seek approval from somewhere else. Their self-esteem fluctuates and changes with their surroundings. There is never a stable self-recognition due to uncertainty in childhood. Once the children enter a social place other than home, they realize that some of their peers have a perfect family with dependable parents present. There is a possibility that they will feel jealousy and get in the loop of thinking, “why me,” and could cause self-hatred and blaming themselves for an absent parent or become resentful to their parents. In a patriarchal Asian home, the absence of a father figure may make it more difficult for females to build good personal relationships with partners, particularly men. Patriarchal Asian cultures have different role expectations for men than for women, continuing the family line foremost among them. Patriarchal American culture also promotes a “masculinity” model that includes economic success and success with women. Heteronormality is deeply rooted in us, and attention from the opposite sex is significant and often considered the measurement of self-worth. It is essential to be recognized and considered attractive by the opposite sex in a heteronormality society. Patriarchal society assigns gendered parenthood to parents, and therefore missing one of them is causing more harm than in a non-patriarchal community. The absence of a father could lead the children, especially women, to feel unworthy or unwanted by men or excessively crave attention from men. For cis straight women, they tend to not have the image of an ideal man due to the lack of a father figure, and their standards of men are extremely low because having one is already better than nothing. Asian parents control their children psychologically through “an ethic of self-sacrifice.” This sacrificial stance (which also justifies the long hours away from their children), plus the economic generosity that often accompanies it, generates and sustains the culture of filial obligation in which Asian students are raised. They are also easy to be gaslit due to underdeveloped self-image and values. They are often grateful for anyone who likes them because they never believe they are likable or have a present father. They could mistake their gratefulness as love for whoever shows them affection. The filial obligation rooted in them would often make them feel they owe their partners who have done anything for them. Someone who does them fundamental friendly human interactions will be mistaken as someone who “loves” them. The extreme low self-esteem is also another form of self-affection and over-focusing on ourselves due to neglected or absent self-reflection in other people’s eyes. Also, irresponsible parenthood gives children difficulties fully trusting someone in their life and living in constant fear of those leaving them. The filial responsibility also increases the challenges to trust unconditional love from their partners. They must always pay back, and there must be a condition to everything they achieve in life. It is harmful to their partners and them because they constantly assume their loved one’s intentions and value those affections through quantified payback. The loop of self-doubting their worth and questioning the authenticity of their partners’ intentions is deadly because their self-worth fluctuates through validations of others, and they always want more to fill this black hole. Sexuality and kinks might be related to the absence of the father in childhood. The first sexual intercourse is a significant developmental milestone, representing a confluence of personal, biological, and social factors. A study shows that children raised in father-absent households have previous intercourse than those grown in father-present families. Competing theoretical perspectives attribute this association to “various environmental mechanisms, including a psychophysiological adaptation that adjusts the timing of sexual development and behavior, parental modeling of nonmarital sexual behavior, and reduced parental supervision in mother-headed households.” In intimate relationships, our kinks also show a lot about ourselves and possibly relate to our traumas as undesirable kids. Kinks such as exhibitionism and BDSM are possible outlets of this need to be loved and desired. These kinks are genuinely more common in Asian countries but not as acceptable to the same level. For example, exhibitionism of women (exposing one’s genital or gendered parts to unexpected strangers) is prevailing because Confucius’s value of a woman is supposed to be modest and skin-covering. Sexual exploration for women is seen as untidy and impure. Such action as exhibitionism can soon grab a lot of attention, including negative, and evoke others’ desires for their bodies. Through exhibitionism, some women feel seen and desired and therefore possibly start to heal through this practice. The act of exhibitionism brings back the body’s power by objectifying its own and shocking those who once ignored them. To put it simply, they do these things because they want others to look at them and recognize them. Chengyao’s piece resonates with us as she strips to heal. There is another kind of exhibitionism that their partner is “tasked” to strip in public. This mentality is more related to BDSM, and the submissiveness of doing something for loved ones and feel needed is incredibly therapeutic and could heal their trauma. The urge and submissiveness to be controlled can be traced back to the neglected childhood. Regain this experience of “being taken care of” is a way to heal from the trauma of unhealthy family relationships. The “seemingly bad” objectification of Asian women by themselves takes back the power and prevents unwanted fetishization from western media. It is often coped as a healing process through revisiting the experience from being neglected to controlling the attention. Some may argue that being a table stool is not feminist enough. To quote from Scott from Thinking Kink: The Collision of BDSM, Feminism and Popular Culture, “who is truly objectifying the woman who consensually plays the footstool to her male partner: the partner with whom she’s choosing to play, or the feminist who assumes she must be disempowered without bothering to ask her, who reduces her to a voiceless body when in fact she’s a happily thinking, feeling, fully engaged human having fun with role play?” Actively engaging in a total consent activity is healthier than getting stuck in the family trauma. This essay is a self-exploratory healing process, and I peel through my thought process over the four years. Our sense of self-worth, intimate relationships, and sexual adventures all fit into preconceptions of Asian women, and it is up to us to change or accept ourselves as we are."
  );
  $("#content").append('<p id="sentence0">' + tokens[0] + " </span>");
  $("#sentence0").addClass("visible");
  var a = 1;
  $("#more").on("click", function () {
    $("html, body").scrollTop($(document).height());
    $("#output").html(
      "You have scored <span id='score'>" + a + "</span> points!"
    );
    if (a < tokens.length) {
      $("#content").append('<p id="sentence' + a + '">' + tokens[a] + " </p>");
      $("#content").addClass("visible");
      a += 1;
    }
  });


  $("#all").click(function () {
    $("#content").empty();
    $("#content").append('<div id="more">more</div>');
    $("#content").append('<div id="output"></div>');
    for (let i = 0; i < tokens.length; i++) {
      $("#content").append('<p id="sentence' + i + '">' + tokens[i] + " </p>");

      $("#sentence" + i).addClass("visible");
      // $("#sentence"+i).addClass(visible);

      $("#output").html(
        "You have scored <span id='score'>" + i + "</span> points!"
      );
    }
    $("html, body").animate({ scrollTop: $("#output").offset().top });
  });

  $("#none").click(function () {

    $("#content").empty();
    $("#content").append('<p id="sentence0">' + tokens[0] + " </span>");
  $("#sentence0").addClass("visible");
    $("#content").append('<div id="more">more</div>');
    $("#content").append('<div id="output"></div>');
    var a = 1;
    $("#more").on("click", function () {
      $("html, body").scrollTop($(document).height());
      $("#output").html(
        "You have scored <span id='score'>" + a + "</span> points!"
      );
      if (a < tokens.length) {
        $("#content").append('<p id="sentence' + a + '">' + tokens[a] + " </p>");
        $("#content").addClass("visible");
        a += 1;
      }
    });
  });
});
