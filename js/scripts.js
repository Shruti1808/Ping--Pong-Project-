// <!......Business logic starts here....!>
var numberList =[1 ,2 ,3, 4, 5, 6, 7, 8, 9, 10, 11,12, 13 ,14, 15,16, 17, 18 ,19 ,20, 21, 22, 23, 24, 25,26,27,28,29,30];

var pingPong =function(number){
 var resultArray = [];
 if(number === 0){
   return alert("Please enter a valid number");
 }else if (typeof(number)=== "string") {
   return alert("Please enter a valid value");


 }
 for (i=0 ; i <= numberList.length; i++){
  if((numberList[i] % 3)=== 0){
    resultArray.push("ping");
  }else if ((numberList[i] % 5 === 0){
   resultArray.push("pong");
 }else if (numberList[i]% 15 ===0){
   resultArray.push("ping-pong");
}


return resultArray;

 }
}

// <!......User interface logic starts here....!>
$(document).ready(function(){
  $("form#ping-pong").submit(function(event){
    event.preventDefault();

    var Input =parseInt($("input#number")).val());
