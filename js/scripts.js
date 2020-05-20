//Business Logic

const robotese = function(translation) {

  let wordsArray = [];

  for (let index = 0; index <= translation; index += 1) {

  const str = index.toString(); 

  if (str.includes("3") === true) {
    wordsArray.push(" Won't you be my neighbor?");
  } else if (str.includes("2") === true) {
    wordsArray.push(" Boop!");
  } else if (str.includes("1") === true) {
    wordsArray.push(" Beep!");
  } else { 
    wordsArray.push(" " + str);
  }

  };

  return wordsArray;

};

//User Logic
$(document).ready(function() {
  $(".form-inline").submit(function(event) {
    firstName = $("input#name").val();

    $("#robot-lang").show();

    event.preventDefault();
  });

 $("form#robot-lang").submit(function() {
 event.preventDefault();
  const translation = $("#words").val();
const result = robotese(translation);
$(".translation").text("Dearest " + firstName + ": " + result );  
$("#result").show();
 });
});
