const robotese = function() {
for (let index = 0; index <= num; index += 1) {
const str = index.toString();
  if (str.includes("3") === true) {
    alert("Won't you be my neighbor?");
  } else if (str.includes("2") === true) {
    alert("Boop!");
  } else if (str.includes("1") === true) {
    alert("Beep!");
  } else (alert(index))
};
};








//User Logic
$(document).ready(function() {
  $("form#robot-lang").submit(function() {
    event.preventDefault();
    num = $("#words").val();
    const result = robotese();
      $(".translation").text(result);
    
    $("#result").show();

  });
});