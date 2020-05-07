// Submitting a new Burger
document.getElementById("form-div").addEventListener("submit", (event) => {
  event.preventDefault();

  const addBurger = {
    burger_name: document.getElementById("burger-input").value.trim(),
  };
  fetch(`/api/burgers`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(addBurger),
  }).then((response) => {
    if (response.ok) location.reload();
  });
});

//Eating Sound

// function play() {
//   let audio = document.getElementById("audio");
//   audio.play();
// }

// Eating a burger
document.querySelectorAll(".eat-button").forEach((button) => {
  button.addEventListener("click", function (event) {
    event.preventDefault();
    const id = this.getAttribute("data-id");
    const devoured = this.getAttribute("data-devoured");
    fetch(`/api/burgers/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ devoured: devoured }),
    }).then((response) => {
      if (response.ok) location.reload();
    });
  });
});
