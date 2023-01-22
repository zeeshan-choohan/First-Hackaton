var user_name = document.getElementById("name")
var email = document.getElementById("email")
var password = document.getElementById("password")
var login = document.getElementById("login")
var user1 = document.getElementById("user")
login.addEventListener("click", async function(){
    event.preventDefault()
   await firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
    .then((user)=>{
        
        console.log(user.user.uid)
        console.log(user_name.value)
        console.log(email.value)
        console.log(password.value)
        console.log(user1.value)
if(user1.value == "user"){
    var obj = {
        name:user_name.value,
        role:user1.value,
        email:email.value,
        password:password.value,
        user:user.user.uid
                }
                firebase.database().ref("User/").child(user.user.uid).set(obj)

                window.location.href="user.html"
              
}
else if(user1.value == "admin"){
    var obj = {
        name:user_name.value,
        role:user1.value,
        email:email.value,
        password:password.value,
        user:user.user.uid
                }
                firebase.database().ref("Admin/").child(user.user.uid).set(obj) 
                window.location.href = "admin.html"  
}

    })
    .catch((err) => {
        alert(err.message)
    }) 
})

