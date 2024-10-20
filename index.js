$(document).ready(function () {
  console.log("jQuery is loaded and ready!");

  var targetDate = new Date("November 29, 2024 00:00:00").getTime();

  var countdownFunction = setInterval(function () {
      
      var now = new Date().getTime();

      var distance = targetDate - now;

      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      $("#days").text(days);
      $("#hours").text(hours < 10 ? "0" + hours : hours);
      $("#minutes").text(minutes < 10 ? "0" + minutes : minutes);
      $("#seconds").text(seconds < 10 ? "0" + seconds : seconds);

      if (distance < 0) {
          clearInterval(countdownFunction);
          $("#timer").html("<h2>Black Friday is Here!</h2>");
      }
  }, 1000);
});
