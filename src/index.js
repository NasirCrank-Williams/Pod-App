import "./styles.scss";

const email = document.getElementById("email");
const button = document.getElementById("button");
button.addEventListener("click", () => {
  if (!email.checkValidity()) {
    email.setCustomValidity("");

    const error = document.getElementById("error-message");
    error.style.display = "unset";
    error.style.opacity = "1";

    setTimeout(() => {
      error.style.opacity = "0";
    }, 4000);

    setTimeout(() => {
      error.style.display = "none";
      error.style.opacity = "1";
    }, 5000);
  }
});
