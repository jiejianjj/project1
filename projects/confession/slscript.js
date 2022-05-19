$(document).ready(function () {
  function reload(){
  let tokens = RiTa.tokenize(
    "I have gotten comments such as the laid back, acting high, chill, and similar descriptions of my personality many times. Contemporary culture dislikes these qualities, it dislikes the idea of resting. To me, the pressure comes from not only the hassle of society but also my ethical identity. My childhood consisted of hassles. Hustling for schools, exams, visiting relatives from different places. This culture that pushes children to their limits in schools and exams—both physically and mentally—cannot bear the fact that the human body requires activities other than sleeping, eating, and working. Sitting in front of my desk and working on 10 assignments after 10 hours of class became an everyday routine. Ironically, that was not an exaggeration. It is hard for me to concentrate alone, therefore, my mother would always watch me when I was doing homework. However, whenever she is not present, I would clutch the chance to do whatever is irrelevant. My procrastination only resulted in less sleeping time for me. Finally, I figured out a way to finish my work fast. I stopped procrastinating when my mother was not watching, instead, I go on google and search for answer sheets for my assignments, or ask my good classmates to send me pictures of theirs, worst case, I simply fill the blanks with bullshits. When I was living with my high school host-family, I remember I used to be so bad at getting ready on time in the morning, which resulted tardes for me and my host-sisters. One time, I was late again, they didn’t wait for me, and drove to school, and I missed school that day. It was a good lesson."
  );

  for (let i = 0; i < tokens.length; i++) {
    if (
      RiTa.isVerb(tokens[i]) === false &&
      RiTa.isPunct(tokens[i]) === false
    ) {
      everythingElse = tokens[i];
      console.log(everythingElse);
      $("#content").append('<span class="else"> ' + everythingElse + "</span>");
    }
    if (RiTa.isVerb(tokens[i]) === true) {
      verb = tokens[i];
      console.log(verb);
      $("#content").append('<span id="verb'+i+'"> ' + verb + "</span>");
      $("#verb"+i).addClass('verb');
    }
    if (RiTa.isPunct(tokens[i]) === true) {
      punct = tokens[i];
      console.log(punct);
      $("#content").append('<span class="punct">' + punct + " </span>");
    }
  }
  for (let i = 0; i < tokens.length; i++) {
    $("#verb"+i).click(function(){
      var past = $("#verb"+i).html();
      let future = {
        tense: RiTa.FUTURE
      };
      result=RiTa.conjugate(past,future);
      $("#verb"+i).replaceWith('<span> '+result+'</span>')
    })
  }
}
reload();
    $("#all").click(function () {
      
      $("#content").replaceWith('<div id="content">I will have will gotten will comment such as the will laid will back, will act high, will chill, and similar descriptions of my personality will many will time. Contemporary will culture will dislike these qualities, it will dislike the idea of will rest. To me, the will pressure will come from not only the will hassle of society but also my ethical identity. My childhood will consist of will hassle. will hustl for will school, exams, will visit relatives from different will place. This will culture that will push children to their will limit in will school and exams—both physically and mentally—cannot will bear the fact that the human body will require activities other than will sleep, will eat, and will work. will sit in will front of my desk and will work on 10 assignments after 10 hours of will clas will became an everyday routine. Ironically, that will wa not an exaggeration. It will i hard for me to will concentrate alone, therefore, my will mother would always will watch me when I will wa will do homework. However, whenever she will i not will present, I would will clutch the will chance to will do whatever will i irrelevant. My procrastination only will result in less will sleep will time for me. Finally, I will figur out a way to will finish my will work fast. I will stop will procrastinat when my will mother will wa not will watch, instead, I will go on will google and will search for will answer sheets for my assignments, or will ask my good classmates to will send me will picture of theirs, worst will case, I simply will fill the will blank with will bullshit. When I will wa will liv with my high will school host-family, I will remember I will us to will be so bad at will get will ready on will time in the morning, which will result tardes for me and my host-sisters. One will time, I will wa late again, they didn’t will wait for me, and will drove to will school, and I will mis will school that day. It will wa a good lesson.</div>')
    });
    
    $("#none").click(function () {
      $("#content").empty();
      reload();
    });
});
