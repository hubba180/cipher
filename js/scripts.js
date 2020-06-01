$(document).ready(function(){

jQuery("h1").click(function() {
    alert("This is a header.");
    alert("I told you, THIS IS A HEADER!");
  });
  
  $("p").click(function() {
    alert("This is a paragraph.");
  });
  
  $("img").click(function() {
    alert("This is an image.");
  });
  
});


let userInput = prompt("enter a sentence");

function reversed(){
    
    let firstChar = userInput.charAt(0);
    let stringLength = userInput.length;
    let lastChar = userInput.charAt(stringLength-1);
    let firstLast = firstChar + lastChar;
    let splitStr = firstLast.split("")
    let  firstLastReversed = splitStr.reverse();
    let joinedStr = firstLastReversed.join("");
    let caps = joinedStr.toUpperCase();
    let charCount = stringLength
    let charDivide = Math.round(charCount/2);

    return charDivide + userInput + caps;


}
   
    


console.log(reversed());

  

