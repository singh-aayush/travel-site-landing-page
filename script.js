// document.getElementById("orderButton").addEventListener("click", function () {
//   alert("Redirecting to order page...");
// });

var modal = document.getElementById("signupModal");
var signupButton = document.getElementById("signupButton");
var closeModal = document.getElementById("closeModal");
var switchToSignin = document.getElementById("switchToSignin");
var switchToSignup = document.getElementById("switchToSignup");

signupButton.onclick = function () {
  modal.style.display = "block";
  console.log("click");
};

closeModal.onclick = function () {
  modal.style.display = "none";
};

switchToSignin.onclick = function () {
  document.getElementById("signupSection").style.display = "none";
  document.getElementById("signinSection").style.display = "block";
};

switchToSignup.onclick = function () {
  document.getElementById("signinSection").style.display = "none";
  document.getElementById("signupSection").style.display = "block";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

document.querySelector(".menu-toggle").addEventListener("click", function () {
  document.querySelector("nav ul").classList.toggle("active");
});
