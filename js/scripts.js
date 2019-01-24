$(document).ready(function(){
  $("#factorial").submit(function(event){
    event.preventDefault();

    var userInput = parseInt($("input#userInput").val());
    var output = [];
    for (var i = userInput; i > 1 ; i = --userInput ) {
      output.push(i);
    }
    console.log(output);

    var result = 1;
    multiands = output;
    multiands.forEach(function(multiand) {
      result *= multiand;
    });

    $(".result").text(result);

  });

  $("button#redo").click(function(){
    $("input#userInput").val("");
    $(".result").text("");
  });
});
