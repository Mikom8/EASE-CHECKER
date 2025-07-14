document.getElementById("resultForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const firstName = document.getElementById("firstname");
  const fatherName = document.getElementById("fathername");
  const grandfatherName = document.getElementById("grandfathername");
  const admissionNumber = document.getElementById("admissionnumber");

  const fields = [firstName, fatherName, grandfatherName, admissionNumber];

  let isValid = true;

  /* fields.forEach((field) => {
    if (field.value.trim().length < 2 && fields.length == 0) {
      field.setCustomValidity("Please enter at least 2 characters.");
      field.reportValidity();
      isValid = false;
    } else if (field.value.trim().length === 0) {
      field.setCustomValidity("This field cannot be empty.");
      field.reportValidity();
      isValid = false;
    } else {
      field.setCustomValidity("");
    }
  }); */

  if (!isValid) return;

  const code =
    firstName.value.trim().toUpperCase().slice(0, 2) +
    grandfatherName.value.trim().toUpperCase().slice(0, 2) +
    fatherName.value.trim().toUpperCase().slice(0, 2);

  const finalUrl = `https://verify.eaes.et/temporary/${code}=${admissionNumber.value.trim()}`;
  window.open(finalUrl, "_blank");
});