$(document).ready(function() {
  var humor = prompt("Which is more important? Humor or Looks?");

    if (humor === "humor")
    var blonde = prompt("Do you prefer light or dark hair color?");
      if (blonde === "light") {
     $(".lightFunny").show();
    } else {
     $(".darkFunny").show();
    }

    if (humor === "looks")
    var blonde = prompt("Do you prefer light or dark hair color?");
      if (blonde === "dark") {
     $(".darkLooks").show();
    } else {
      $(".lightLooks").show();
    }
  });
