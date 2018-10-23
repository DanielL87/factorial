var factorial = function(number){
  var factor = 1
  for (i = number ; i > 0; i-- ){
    factor *=i
  } return factor
};

$(document).ready(function(){
  $("#factoring").submit(function(event){
  var input = parseInt($("#usernum").val());
  $("#output").text(factorial(input));

  event.preventDefault();
});
  });
