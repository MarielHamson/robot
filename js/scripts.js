//Business Logic

const robotese = function(translation) {
for (let index = 0; index <= translation; index += 1) {

  const str = index.toString();
  if (str.includes("3") === true) {
    words = "Won't you be my neighbor?";
  } else if (str.includes("2") === true) {
    words = "Boop!";
  } else if (str.includes("1") === true) {
    words = "Beep!";
  } else words = index;

};
};






//User Logic
$(document).ready(function() {
  $("form#robot-lang").submit(function() {
    event.preventDefault();
    const translation = $("#words").val();
    const result = robotese(translation);
      $(".translation").text(words);
    
    $("#result").show();
  });
});
