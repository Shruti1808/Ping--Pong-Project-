// <!......Business logic starts here....!>
var pingPong =function(number){
  var rangeArray = [];



  // For non-numeric Input and number less than 1
  if(number === 0 || number < 1){
    alert("Please enter a valid input");
  }else if(typeof(number)=== "string") {
    alert("Please enter a valid value");
  }
  else{
    for (var i=1 ; i <= number; i++){
      // Number divisible by 3 replaced with "ping"//
      if(i % 3 === 0){
        rangeArray.push("ping");
        // Number divisible by 5 replaced with "pong"//
      }else if (i % 5 === 0){
        rangeArray.push("pong");
        // Number divisible by 15 replaced with "ping-pong"//
      }else if (i % 3 && i % 5 ===0){
        rangeArray.push("ping-pong");
      }
      // For counting the given number by the user
      else {
        rangeArray.push(i);
      }
      var result= rangeArray;
      return result;
    }
  }
};

// <!......User interface logic starts here....!>

$(document).ready(function(){
  $("form#user-input").submit(function(event){
    event.preventDefault();
    alert ("hey");

    var userInput =parseInt($("#input-number").val());
    // Takes user input and then converts that into an integer
    var rangeArrayresult = pingPong(userInput);
     $("#result").text(rangeArrayresult);
     pingPong(userInput);
   });
 });
