// Submitting a new Burger
document.getElementById("form-div").addEventListener("submit", (event) => {
  event.preventDefault();

  // Creating a new burger object with user input
  const addBurger = {
    burger_name: document.getElementById("burger-input").value.trim(),
  };
  // POST request to the server side and then reload the page when there is a response
  fetch(`/api/burgers`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(addBurger),
  }).then((response) => {
    if (response.ok) location.reload();
  });
});

// Eating a burger click event listener
document.querySelectorAll(".eat-button").forEach((button) => {
  button.addEventListener("click", function (event) {
    event.preventDefault();
    // Setting Variables for data attributes
    const id = this.getAttribute("data-id");
    const devoured = this.getAttribute("data-devoured");
    // Making a patch request to update the burger to become eaten
    // Reload the page when there is a response
    fetch(`/api/burgers/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ devoured: devoured }),
    }).then((response) => {
      if (response.ok) location.reload();
    });
  });
});
