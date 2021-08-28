console.log("hey");
let loginbtn = document.getElementById("loginbtn");
let closebtn = document.getElementById("close");
let popup = document.getElementById("pop-up");

loginbtn.addEventListener("click", () => {
  popup.style.display = "block";
});
closebtn.addEventListener("click", () => {
  popup.style.display = "none";
});
