const robotese = function(translation) {
  if (translation === "a" || translation === "e" || translation === "i" || translation === "o" || translation === "u")  {
      return translation + "way";
    } else if (translation.charAt(0) != "a" && translation.charAt(0) != "e" && translation.charAt(0) != "i" && translation.charAt(0) != "o" && translation.charAt(0) != "u" && translation.charAt(1) != "a")  {
      return translation.slice(2) + translation.charAt(0) + translation.charAt(1) + "ay";
    } else {
      return translation.slice(1) + translation.charAt(0) + "ay";
    // return translation + "ay";
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