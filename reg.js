var uname  = document.getElementById("uname");
var phno  = document.getElementById("phno");
var pwd  = document.getElementById("pwd");
var pwd2  = document.getElementById("pwd2");
function verEmail(){
    var email  = document.getElementById("email").value,errors=[];
    var regexp = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+)\.([a-z]{2,8})(.[a-z]{2,8})?$/;
    if (!regexp.test(email.value)) {
        errors.push("Enter a valid Email Id");
        return false;
    }
    else {
        return true;
    }
}
// function validate() {
//     var password = document.getElementById('Password').value,
//         errors = [];
//     if (password.length < 8) {
//         errors.push("Your password must be at least 8 characters"); 
//     }
//     if (password.search(/[a-z]/i) < 0) {
//         errors.push("Your password must contain at least one lower case letter.");
//     }
//     if (password.search(/[0-9]/) < 0) {
//         errors.push("Your password must contain at least one digit."); 
//     }
//     if (password.search(/[A-Z]/i) < 0) {
//     errors.push("Your password must contain at least one upper case letter."); 
// }
// if (password.search(/[!@#$%^&*]/i) < 0) {
//   errors.push("Your password must contain at least one special character."); 
// }
//     if (errors.length > 0) {
//         alert(errors.join("\n"));
//         return false;
//     }
//     return true;
// }

// const email = document.querySelector("#email");
//         const icon1 = document.querySelector(".icon1");
//         const icon2 = document.querySelector(".icon2");
//         const error = document.querySelector(".error-text");
//         const btn = document.querySelector("button");
//         let regExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
//         function check(){
//           if(email.value.match(regExp)){
//             email.style.borderColor = "#27ae60";
//             email.style.background = "#eafaf1";
//             icon1.style.display = "none";
//             icon2.style.display = "block";
//             error.style.display = "none";
//             btn.style.display = "block";
//           }else{
//             email.style.borderColor = "#e74c3c";
//             email.style.background = "#fceae9";
//             icon1.style.display = "block";
//             icon2.style.display = "none";
//             error.style.display = "block";
//             btn.style.display = "none";
//           }
//           if(email.value == ""){
//             email.style.borderColor = "lightgrey";
//             email.style.background = "#fff";
//             icon1.style.display = "none";
//             icon2.style.display = "none";
//             error.style.display = "none";
//             btn.style.display = "none";
//           }
//         }