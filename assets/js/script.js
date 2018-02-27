// Check off specific Todos by clicking
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

// Click on X to delete Todo
$("ul").on("click", "span", function(event) {

  $(this).parent().fadeOut(400, function() { //this se odnosi na span
    $(this).remove(); //this se odnosi na .parent()
  });

  // stops event bubbling
  event.stopPropagation();

});

$("input[type='text'").keypress(function(event){
  // check for enter key
  if (event.which === 13) {
    //grabing new todo text from input
    var todoText = $(this).val();
    $(this).val("");
    //create a new li and add to ul
    $("ul").append("<li><span><i class='fa fa-trash'></i></span>" + todoText + "</li>")
  }
});

$(".fa-plus").on("click", function(){
  $("input[type='text'").fadeToggle();
});
