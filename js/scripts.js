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
    
   //let splitString = userInput.split("");
    
   let firstChar = userInput.charAt(0);
  let stringLength = userInput.length;
  let lastChar = userInput.charAt(stringLength-1);
    //let reverseString = splitString.reverse();
   let firstLast = firstChar + lastChar;
    return userInput + firstLast;
}

console.log(reversed());

  

