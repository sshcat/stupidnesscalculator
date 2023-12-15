let btn = document.getElementById("btn");
let result = document.getElementById("result");

btn.addEventListener("click", () => {
  let randomNumber = Math.floor(Math.random() * 10) + 1;
  result.textContent = `Your stupidity level is: ${randomNumber} out of 10`;
  if (randomNumber > 6) {
    result.style.color = "red";
  } else {
    result.style.color = "green";
  }
});
