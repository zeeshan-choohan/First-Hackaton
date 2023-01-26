var email = document.getElementById("signInEmail")
var password = document.getElementById("signInPassword")
var login = document.getElementById("login")
var user = document.getElementById("user")
login.addEventListener("click", async function(){
    event.preventDefault()
   await firebase.auth().signInWithEmailAndPassword(email.value, password.value)
   
    .then((user1) => {
   
        console.log(email.value)
        console.log(password.value)
        console.log(user.value)
        console.log(user1.user.uid)
if(user.value == "user"){
        localStorage.setItem("uid",user1.user.uid)
        window.location = "userPanel.html"
        }
 else if(user.value == "admin"){
    localStorage.setItem("uid",user1.user.uid)
    window.location = "adminPanel.html"
 }
 else{
    alert("No Data found")
 }

    })
    .catch((error)=>{
        alert(error.message)
    })
})