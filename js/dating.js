$(document).ready(function() {
  var personality = prompt("Which is more important? Humor or Looks?");
  var hair = prompt("Do you prefer light or dark hair color?");
  if (personality === "humor") {
    if (hair === "light") {
      $(".lightFunny").show();
      $(".lightLooks").hide();
    } else if (hair === "dark") {
      $(".darkFunny").show();
      $(".darkLooks").hide();
    }
  }
  if (personality === "looks") {
    if (hair === "dark") {
      $(".darkLooks").show();
    } else if (hair === "light") {
      $(".lightLooks").show();
    }
  }

});
