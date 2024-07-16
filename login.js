document.addEventListener("DOMContentLoaded", function () {
    const toggleSwitch = document.getElementById("switch");
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");
    const formTitle = document.querySelector(".login-title");

    toggleSwitch.addEventListener("change", function () {
        if (this.checked) {
            loginForm.style.display = "none";
            registerForm.style.display = "block";
            formTitle.textContent = "REGISTER FORM";
        } else {
            loginForm.style.display = "block";
            registerForm.style.display = "none";
            formTitle.textContent = "LOGIN FORM";
        }
    });
});


// If you enabled Analytics in your project, add the Firebase SDK for Google Analytics

// Add Firebase products that you want to use
// import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
// import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";


