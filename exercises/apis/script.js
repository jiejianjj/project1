// $(document).ready(function() {

//   let catimage;

//     $.getJSON("https://aws.random.cat/meow")
//       .done(function( data ) {
//           console.log(data);
//           catimage = data.file;
//           console.log(data.file);
//         });
//   $("#cat").attr("src", catimage)


//     let factCount = 0;



//     $("#refresh").click(function(){

//      if(factCount < 4){        
//         factCount ++; // increment fact index until 5
//         displayFact(factCount);
//       }else{
//         factCount = 0; // reset fact index
//       }  
       
//     });

// });
var btn = document.querySelector("#btn");
var img = document.querySelector("#photo");

  var XHR = new XMLHttpRequest();
  
  XHR.onreadystatechange = function() {
    if (XHR.readyState == 4 && XHR.status == 200) {
      img.src = JSON.parse(XHR.responseText).file;  
    }
  }
  XHR.open("GET", "https://aws.random.cat/meow");
  XHR.send();