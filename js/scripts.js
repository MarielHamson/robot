const robotese = function(translation) {
  for (let index = 0; index <= translation; index += 1) {
    alert(index);
  }

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