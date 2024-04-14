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

        document.getElementById("submit").addEventListener("click", function (e) {
            e.preventDefault();
            var email = document.getElementById("email").value;
            var password = document.getElementById("password").value;
            
            //For new registration
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user);
                    alert("Registration successfully!!");
                    window.location.href = '../AfterLoginScreen/secondScreen.html'
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ..
                    console.log(errorMessage);
                    
                });
        });
        
        
//-----------------------------------------------------------------

