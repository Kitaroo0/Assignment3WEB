// This function checks our data for correctness
function dataCheck() {
    let name = document.getElementById("first-name");
    let lastname = document.getElementById("last-name");
    let email = document.getElementById("email");
    let phone_number = document.getElementById("phone-number");

    let nameError = document.getElementById("nameError");
    let lnameError = document.getElementById("lnameError");
    let emailError = document.getElementById("emailError");
    let phoneError = document.getElementById("phoneError");

    let valid = true;

    // checks whether the data is written and validation
    if (name.value.trim() == "") {
        nameError.textContent = "Name is required";
        valid = false;
    }

    if (lastname.value.trim() == "") {
        lnameError.textContent = "Last name is required";
        valid = false;
    }

    if (email.value.trim() == "") {
        emailError.textContent = "Email is required";
        valid = false;
    } else if (!emailCheck(email.value)) {
        emailError.textContent = "Invalid email format";
        valid = false;
    }
    if (phone_number.value.trim() == "") {
        phoneError.textContent = "Phone number is required";
        valid = false;
    } else if (phone_number.value.length != 11) {
        phoneError.textContent = "Phone number must be at least 8 characters long";
        valid = false;
    }
    
    if (valid) {
        alert("Form submitted successfully!");
    }

    return valid;
}

//Email Checker
function emailCheck(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}