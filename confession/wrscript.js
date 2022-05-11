$(document).ready(function () {
  let sentences = RiTa.sentences(
    "I work at a Korean restaurant near downtown where people tend to avoid eye contact. I don’t blame them. It is a nocturnal street, fuelled by street lamps that are trying too hard. I like working as a server. My mum would say it’s because of my palmistry that predicts I am going to have a toilsome life serving others, the same thing that makes her believe her life is miserable. For me, serving people is quiet. Mentally. The ringing bells, the smell of oil mixed with spice, the poignant air that moves across you. It’s the simplest thing that makes you feel appreciated. Between the gap of private small talks and group gatherings, I can find my value through the perfunctory ‘thank you’s. Alas, with the blasting k-pop music in the background, I finally reach a state of content, happily suffocating the echoes in my head. There are always church bells ringing outside the restaurant. Every hour it resonates in me. Who are they ringing for? The first musical note that echoed in my brain was not church bells. My mum’s dynamic scream overlapping with my dad’s contemplative sigh, a unique melody that no one understands but them. What was I doing? I think I was busy thinking about how to amend this tune, hoping to turn this into a choir instead of a duet. It is the moment of realization, knowing that not all melodies can be mixed to create harmonic tunes, just like not everyone’s birth is being celebrated under angelic choirs. Love is mysterious, and it’s never about how much effort you put in. How long do we need to keep roleplaying Sisyphus? I recall the moment my mother decided to leave him, her world collapsed in a whimper. No tears were shed, but neither was it freedom. She is stuck in limbo, stuck with me. She is conditioned to accept prayers that never work, listening to the silent voices that keep her functioning every day. I guess I have to direct this hatred onto myself, or else who can she talk to? Family means unconditional support, regardless of how much it suffocates you. I am ready to drown together in this turmoil, and so is she. Today I saw a father and a son sitting silently in the restaurant. Are they communicating love? My culture tells me perfect understanding lies within the silence. I think I am still working on that. Silence means I don’t understand, it means I am confused, hurt, traumatized, giving up. How is it ever love? It’s almost like revenge, a connection through silencing each other. To not give them a space to speak. Learning how to not care to self-protect from repetitive damage. The father asks his son what he wants, the kid, panicking because he is overthinking what his father wants him to eat, turns to me. I guess this is what love is, controlling with care. Is every father’s interaction with their child like this? Starting with a forced introduction about the weather, then about what you are doing, finally ending it with ‘keep trying and you’ll be great’. The three-minute caring is suspended into a vacuum of awkwardness, where me and that kid still pathetically try to savor and retaste this over and over again. Perhaps it is because the melodrama I needed to forgive him was never there, like a deflated balloon that is too tall to replace. Perhaps it is because I am across the world so our realities are separating more and more. Perhaps it is because we are broken in our ways and we don’t have the tools to fix each other. We are now stuck in this dilemma, fighting over who gets to be the shadow and who gets to be in the light. I wish school taught us more about how to fix unhealable wounds instead of equations. I remember the night that my goldfish committed suicide. It was the night I told my mother that I don’t want to end up like her. I could almost taste her tears when she started sobbing in the corner. The bitter moment of two hearts breaking, with a fish that witnessed this verbal crime committed by me. The way she looked at me. Fuck. For the first time, I realized it was the fish she connected with the most in this household. Stuck in a glass bowl, forever trapped in this microcosm. Maybe that is why the sea is salty, filled with fish tears as we take and take from the ocean, leaving sadness as the evidence that proves it once existed. I’m sorry, I tell her, knowing that she must be so used to this quote by now. She vacantly looks at me, sniveled, and said ‘it’s okay.’ How else can she react? Can she say ‘I regret using you to save my marriage’ or ‘I don’t think I was ever ready to have a child’? I think to stop understanding each other is our way of respect, a guideline we mutually agreed on and is the best I can do in stopping this rope from breaking. Coming to America has been a way for me to escape this. I don’t understand why people always put shame on running away from problems when we simply drink more expensive wine as we grow up. Although this has been a temporal Utopia, between the gaps of each desperate text, going from ‘how are you?’ to ‘can you please respond’, I realize I have failed as a daughter. When conversation collapses into a soliloquy. But I have reasons. I refuse to listen because there are times when she would make me hate my father so much that I hated myself. I am asked to remove traces of myself for the greater good, happiness. The overwhelming demand for self-repair when there is no guidebook. It is almost as hard as washing blood stains off your clothes. The repetitive motion of cleaning, of removing, between the rubbing cotton and the colored foam. How can cotton be so harmless? Even this softness is temporal, is delusionary. It was one day when I was under the cold bathroom light that I decided I am not allowed to embrace warmth before I can play the priest in the confessional and still feel whole, even though the three worn words of ‘I love you in my head has become a dead language in reality. Let it die, let my agony die, so I can be forever happy. The apron drains me every time I put it on. The stripe that goes around my neck feels like a cangue, keeping you from always looking down. They say this is to help you stay clean, to protect you. But how does another layer of clothing help you stay sterile when you are already stained by the smell? They grab onto you so desperately, where people find nostalgia, memories, stories. The inventors of the fourth dimension are still living in the past, staying in dust-infused houses with low ceilings, lamenting about their youth that they forgot to cherish. What piece of memory should I choose from? There are so many. Freedom lies within the past and the future, but never the current. We are forced to make decisions when we don’t even know what we want, letting regret form our wrinkles across our last layer of protection. The more I wear, the more I feel undressed. As wind shrivels my bones, causing me to collapse, I realize I am less than flesh. I am glass, a vessel that is supposed to contain water, to contain sadness. Or maybe I am a Russian doll, forever stuck in the nesting doll game, delivering women’s suffering through time. Generations of pain. How to be a good mother, how to be a better mother than before. It’s not like we’re not trying, it is just there is never a right answer in teaching. The restless nights in balancing values on the scale, the tentative questions in trying to understand through actions but not eyes. Everything is silent, with a bitter lingering smell of surrender. I’m tired of finding myself through others, as all that is left in me are hays. There is always a sense of fatigue in me, in having to try and find calmness through other’s satisfaction. Perhaps I am not suitable for communication, a failure amongst the creation of social animals. Silence is the best melody I can offer and is one I can carry on for life. To connect through the five-minute monotone call or the incongruous conversations we have about ourselves. To find peace within pain. It is going to be ok."
  );
  for (let i = 0; i < sentences.length; i++) {
    var divw = getRandomIntInclusive(300, 600);
    $("#content").append(
      '<div id="sentence' + i + '">' + sentences[i] + "<br></p>"
    );
    $("#sentence" + i).addClass("sentences");
    $("#sentence" + i).css({width:divw +"px"});
    var divh = $("#sentence" + i).height();
    console.log(posx)
    var posx = (Math.random() * ($('#content').width() - divw)).toFixed();
    var posy = (Math.random() * ($('#content').height() - divh)).toFixed();
    $("#sentence" + i).css({ left: posx + "px", top: posy + "px" });
    $("#sentence0").css("display", "block");
    $("#sentence0").addClass("red");

  }

  for (let i = 0; i < sentences.length; i++) {
    $("#sentence" + i).click(function () {
      $("#sentence" +i).removeClass("red");
      $("#sentence"+i).addClass("alert");
      e = i + 1;
      $("#sentence" +e).css("display", "block");   
      $("#sentence" +e).addClass("red");
      
        });
  }

  for (let i = 0; i < sentences.length; i++) {
    $("#all").click(function () {
      $("#sentence" + i).css("display", "block");
      $("#sentence"+i).addClass("red");
    });
    $("#none").click(function () {
      $("#sentence" + i).css("display", "none");
      $("#sentence0").css("display", "block");
    });
  }
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }
});
