var user_name = document.getElementById("name")
var email = document.getElementById("email")
var password = document.getElementById("password")
var number = document.getElementById("number")
var signup = document.getElementById("signup")
var user1 = document.getElementById("user")
signup.addEventListener("click", async function(){
    event.preventDefault()
   await firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
    .then(async (user)=>{
        
        console.log(user.user.uid)
        console.log(user_name.value)
        console.log(email.value)
        console.log(password.value)
        console.log(number.value)
        console.log(user1.value)
if(user1.value == "user"){
    var obj = {
        name:user_name.value,
        email:email.value,
        password:password.value,
        number:number.value,
        role:user1.value,
        user:user.user.uid
                }
              await  firebase.database().ref("User/").child(user.user.uid).set(obj)

              window.location.href="signIn.html"
              
}
else if(user1.value == "admin"){
    var obj = {
        name:user_name.value,
        email:email.value,
        password:password.value,
        number:number.value,
        role:user1.value,
        user:user.user.uid
                }
               await firebase.database().ref("Admin/").child(user.user.uid).set(obj) 
               window.location.href="signIn.html"  
}
else{
    alert("Sorry no  data")
}

    })
    .catch((err) => {
        alert(err.message)
    }) 
})

