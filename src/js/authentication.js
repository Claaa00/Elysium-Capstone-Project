import { createUserWithEmailAndPassword, 
        signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./firebase";

// auth.onAuthStateChanged(user =>{
//     if(user){
//         const uid = user.id;
//         window.location.href = "/dashboard.html";
//     }else{
//         console.log("sign in");
//     }
// })
// if(window.location.herf == 'signin page'){
// }

// $("signupbutton").on("click", (e)=>{
//     -read username, email,
//     -then add to table(users for validation)
// })
    //super admin users to accept page
    //display info from table(users for validation) excluding password
    //if(accept.button == accept)
    //   proceed to create user function, read id from button
    //   id == table(users for validation) database
    // create user function(id)
    // success

// function createUser(userName, email, password){
//     createUserWithEmailAndPassword(auth, email, password)
//     .then(userInformation =>{
//         updateProfile(auth,{
//             displayName: userName,
//         })
//     })
// }

//for superadmin to create another admin
// $("superAdminCreateUser").on("submit",(e) => {
//     e.preventDefault();
//     createUserWithEmailAndPassword(auth, "emailform","passwordform").then(userInformation =>{
//         console.log(userInformation);
//         updateProfile(auth, {
//             displayName: "username assigned by superAdmin"
//         })
//         //sendEmailVerification(auth.currentUser);
           //router('/')
//     }).catch(error => {
//         console.log(error.code.error.message);
//     }) 
// })


// const login = document.querySelector("#login-form");
// $("#login-form").on("submit", (e)=>{
//     e.preventDefault();
//     console.log("success")
//     console.log()
//     e.preventDefault();
//     signInWithEmailAndPassword(auth, login.inputEmail.value, login.inputPassword.value)
//   .then((userCredential) => {
//     const user = userCredential.user;
//     console.log(userCredential)
//     window.location.href = "/dashboard.html";
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     alert(errorCode, errorMessage)
//   });
// })


 