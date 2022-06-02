const form = document.getElementsByTagName("form")[0];
const passwordFields = document.querySelectorAll("input[type='password']");
const passwordError = document.querySelector("span.error");

form.addEventListener("submit", function (event) {
  console.log(Array.from(passwordFields));
  console.log("bla pw:" + passwordFields[0].value);
  if (!checkSamePassword()) {
    console.log("do I get checked?");
    passwordError.className = "error active";
    passwordError.textContent = "Passwords do not match.";
    event.preventDefault();
  }
});

passwordFields.forEach((field) => {
  field.addEventListener("input", () => {
    passwordError.className = "error";
    passwordError.textContent = "";
  });
});

function checkSamePassword() {
  return passwordFields[0].value === passwordFields[1].value;
}
