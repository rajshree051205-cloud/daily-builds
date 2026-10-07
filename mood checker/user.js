document.querySelector("button").addEventListener("click", function () {
  const age = document.querySelector("#age").value;
  const mood = document.querySelector("#mood").value;
  const result = document.querySelector("#result");

  let message = "";

  if (age < 18) {
    message = "Young explorer 😄";
  } else if (age <= 30) {
    message = "You're in your prime 🚀";
  } else if (age <= 50) {
    message = "Experienced and powerful 💼";
  } else {
    message = "Legend status 👑";
  }

  result.innerHTML = message + " + " + mood;
});