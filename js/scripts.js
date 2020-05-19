const robotese = function(translation) {
  for (let index = 0; index <= translation; index += 1) {
    if (index === 1) {
      alert("Beep") 
    } else if (index === 2) {
    alert("Boop");
    } else if (index === 3) {
    alert("Won't you be my neighbor")
  } else (alert(index))

};
};








//User Logic
$(document).ready(function() {
  $("form#robot-lang").submit(function() {
    event.preventDefault();
    var translation = $("#words").val();
    var result = robotese(translation);
      $(".translation").text(result);
    
    $("#result").show();

  });
});