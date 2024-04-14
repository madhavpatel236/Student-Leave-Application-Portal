import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";        
const firebaseConfig = {
            apiKey: "AIzaSyCqPaJiLHYGCH5HkxNmuhSFTzXpoemaceg",
            authDomain: "leave-auth.firebaseapp.com",
            projectId: "leave-auth",
            storageBucket: "leave-auth.appspot.com",
            messagingSenderId: "653077794309",
            appId: "1:653077794309:web:7099c5fc11dfe5cc04d66c"
        };

        const app = initializeApp(firebaseConfig);
        const auth = getAuth(app);



document.getElementById("login_Submit").addEventListener("click", function (e) {
    e.preventDefault();
    var email = document.getElementById("login_email").value;
    var password = document.getElementById("login_password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            alert(user.email + " Login successfully!!!");
            window.location.href = '../AfterLoginScreen/secondScreen.html'
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            alert(errorMessage);
        });
});

const form = document.getElementById('loginForm');
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const username = document.getElementById('email').value;

    // Store username in localStorage (not email for security)
    localStorage.setItem('email', email);

    // Redirect to the second HTML file
    window.location.href = '../About/about.html';
});



// localStorage.setItem('email', email);
// window.location.href = '../About/about.html';


// document.getElementById('profileName').write = 'm'
