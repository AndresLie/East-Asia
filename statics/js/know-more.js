document.getElementById("submitBtn").addEventListener("click", function () {
  const email = document.getElementById("email");
  const checkboxes = document.querySelectorAll(".form-check-input");
  const successMessage = document.getElementById("successMessage");

  let isEmailValid = email.checkValidity(); // Validate email
  let isCheckboxValid = Array.from(checkboxes).some(
    (checkbox) => checkbox.checked
  );

  if (!isEmailValid) {
    email.classList.add("is-invalid");
  } else {
    email.classList.remove("is-invalid");
  }

  const checkboxFeedback = document.querySelector(".invalid-checkbox");
  if (!isCheckboxValid) {
    checkboxFeedback.classList.remove("d-none");
    checkboxFeedback.classList.add("d-block");
  } else {
    checkboxFeedback.classList.remove("d-block");
    checkboxFeedback.classList.add("d-none");
  }

  if (isEmailValid && isCheckboxValid) {
    successMessage.classList.remove("d-none");
    successMessage.scrollIntoView({ behavior: "smooth" });

    document.getElementById("inquiryForm").reset();

    email.classList.remove("is-invalid");
    checkboxFeedback.classList.remove("d-block");
    checkboxFeedback.classList.add("d-none");
  }
});
