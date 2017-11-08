$ (function () {
  $(".changeDevour").on("click", function(event) {
    var id = $(this).data("id");
    var newDevour = $(this).data("newdevour");
    if (newDevour === 0) {
      newDevour = 1;
    };
    console.log(newDevour);
    var newDevouredState = {
      devoured: newDevour
    };

    // Send the PUT request. 
    $.ajax("/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function() {
        console.log("changed devoured to", newDevouredState);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#burgers").val().trim(),
    };

    // Send the POST request.
    $.ajax("/", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("Burger coming up!");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});