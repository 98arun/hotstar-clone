console.log("hey");
let loginBtn = document.getElementById("loginBtn");
let closeBtn = document.getElementById("close");
let popup = document.getElementById("pop-up");

loginBtn.addEventListener("click", () => {
  popup.style.display = "block";
});
closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});
