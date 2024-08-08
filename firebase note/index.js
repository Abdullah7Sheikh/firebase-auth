// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";// 
import { getDatabase,set,ref } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword,onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Database = getDatabase(app);
const auth = getAuth();

// Create a new user with email and password

/*
let signup = document.getElementById("sign-up");

signup.addEventListener("click", (e) => {
  var email = document.getElementById("email").value;
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      set(ref(Database, "user/" + user.uid), {
        username: username,
        email: email,
        password: password

      })
      alert("user created")

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)

    });
})

*/


// Sign in with email and password

// import { getDatabase,set,ref,update } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-database.js";

/*
login.addeventlistener("click", (e) =>{
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const dt = new Date();
      const user = userCredential.user;
         update(ref(Database, "user/" + user.uid), {
           Last_login:dt ,
          

    })
           aler("user login")
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)

    });
})

*/


//  user login and logout

// import { getAuth, createUserWithEmailAndPassword,onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
/*
const user = auth.currentUser;
const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});
*/


// logout

/*
const auth = getAuth();
signOut(auth).then(() => {
 alert("you log out")
}).catch((error) => {
 const errorCode = error.code;
 const errorMessage = error.message;
 alert(errorMessage)

});
*/
