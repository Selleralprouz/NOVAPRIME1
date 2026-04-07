/* =========================
   AGE SELECTION
========================= */

function continueRegistration() {
    var adult = document.getElementById("adult");
    var minor = document.getElementById("minor");

    if (adult && adult.checked) {
        window.location.href = "register-adult.html";
    } 
    else if (minor && minor.checked) {
        window.location.href = "register-tutor.html";
    } 
    else {
        alert("Por favor selecciona una opción.");
    }
}

/* =========================
   REGISTER ADULT
========================= */

function registerAdult() {

    var name = document.getElementById("adultName").value.trim();
    var email = document.getElementById("adultEmail").value.trim();
    var password = document.getElementById("adultPassword").value;
    var confirmPassword = document.getElementById("adultConfirmPassword").value;

    if (name === ""||email === ""||password === "" || confirmPassword === "") {
        alert("Completa todos los campos.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Las contraseñas no coinciden.");
        return;
    }

    var user = {
        role: "student",
        name: name,
        email: email,
        password: password,
        status: "active"
    };

    localStorage.setItem("novaUser", JSON.stringify(user));

    window.location.href = "student/index.html";
}

/* =========================
   REGISTER TUTOR
========================= */

function registerTutor() {

    var name = document.getElementById("tutorName").value.trim();
    var email = document.getElementById("tutorEmail").value.trim();
    var phone = document.getElementById("tutorPhone").value.trim();
    var password = document.getElementById("tutorPassword").value;
    var confirmTutor = document.getElementById("confirmTutor").checked;
    var acceptLegal = document.getElementById("acceptLegal").checked;

    if (name === ""||email === ""||phone === "" || password === "") {
        alert("Completa todos los campos.");
        return;
    }

    if (!confirmTutor) {
        alert("Debes confirmar que eres tutor legal.");
        return;
    }

    if (!acceptLegal) {
        alert("Debes aceptar el Aviso Legal.");
        return;
    }

    var user = {
        role: "tutor",
        name: name,
        email: email,
        password: password,
        status: "active"
    };

    localStorage.setItem("novaUser", JSON.stringify(user));

    window.location.href = "student/index.html";
}

/* =========================
   REGISTER TEACHER
========================= */

function registerTeacher() {

    var name = document.getElementById("teacherName").value.trim();
    var email = document.getElementById("teacherEmail").value.trim();
    var password = document.getElementById("teacherPassword").value;
    var experience = document.getElementById("teacherExperience") 
        ? document.getElementById("teacherExperience").value 
        : "";

    if (name === ""||email === ""||password === "") {
        alert("Completa todos los campos obligatorios.");
        return;
    }

    if (password.length < 6) {
        alert("La contraseña debe tener mínimo 6 caracteres.");
        return;
    }

    var user = {
        role: "teacher",
        name: name,
        email: email,
        password: password,
        experience: experience,
        status: "pending"
    };

    localStorage.setItem("novaUser", JSON.stringify(user));

    alert("Solicitud enviada. Esperando aprobación.");

    window.location.href = "teacher/teacher.html";
}

/* =========================
   LOGIN
========================= */

function loginUser() {

    var email = document.getElementById("loginEmail").value.trim();
    var password = document.getElementById("loginPassword").value;

    var user = JSON.parse(localStorage.getItem("novaUser"));

    if (!user) {
        alert("No existe una cuenta registrada.");
        return;
    }

    if (email !== user.email || password !== user.password) {
        alert("Correo o contraseña incorrectos.");
        return;
    }

if (user.role === "student" || user.role === "tutor") {
        window.location.href = "student/index.html";
    }

    if (user.role === "teacher") {
        window.location.href = "teacher/teacher.html";
    }
}

/* =========================
   LOGOUT
========================= */

function logoutUser() {
    localStorage.removeItem("novaUser");
    window.location.href = "../index.html";
}

/* =========================
   TEACHER STATUS CHECK
========================= */

document.addEventListener("DOMContentLoaded", function () {

    var user = JSON.parse(localStorage.getItem("novaUser"));

    var lockScreen = document.getElementById("lockScreen");
    var realDashboard = document.getElementById("realDashboard");

    if (!user) return;

    if (user.role === "teacher") {

        if (user.status === "pending") {
            if (lockScreen) lockScreen.style.display = "block";
        }

        if (user.status === "approved") {
            if (lockScreen) lockScreen.style.display = "none";
            if (realDashboard) realDashboard.style.display = "block";
        }
    }
});

/* =========================
   APPROVE TEACHER (SIMULATION)
========================= */

function approveTeacher() {

    var user = JSON.parse(localStorage.getItem("novaUser"));

    if (!user || user.role !== "teacher") return;

    user.status = "approved";

    localStorage.setItem("novaUser", JSON.stringify(user));

    alert("Teacher approved!");

    location.reload();
}

/* =========================
   NAVIGATION
========================= */

function goToTeacherRegister() {
    window.location.href = "register-teacher.html";
}