$ (function () {
  $(".change-devour").on("click", function(event) {
    var id = $(this).data("id");
    var newDevour = $(this).data("newdevour");

    var newSleepState = {
      devoured: newDevour
    };

    // Send the PUT request.
    $.ajax("/burgers", {
      type: "PUT",
      data: newDevour
    }).then(
      function() {
        console.log("changed devoured to", newDevour);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#burgers").val().trim(),
      devoured: $("[name=devoured]:checked").val()
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