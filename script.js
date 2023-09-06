const url = "https://jsonplaceholder.typicode.com/users";
const button = document.getElementById("form");

button.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name");
  const lastName = document.getElementById("lastName");
  const date = document.getElementById("date");
  const formData = {
    name: name.value,
    lastName: lastName.value,
    date: date.value,
  };

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Data saved successfully:", data);
    })
    .catch((error) => {
      console.error("Error saving data:", error);
    });
});
