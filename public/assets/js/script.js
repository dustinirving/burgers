document.getElementById("form-div").addEventListener("submit", (event) => {
  event.preventDefault();

  const addBurger = {
    burger_name: document.getElementById("burger-input").value.trim(),
  };
  console.log(addBurger);
  fetch(`/api/burgers`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(addBurger),
  }).then((response) => {
    if (response.ok) location.reload();
  });
});
