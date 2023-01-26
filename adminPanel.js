var username = document.getElementById("UserName")
var email = document.getElementById("UserEmail")
var contact = document.getElementById("contact")
var role = document.getElementById("role")
var data = localStorage.getItem("uid")
var container= document.getElementById('row')
console.log(data)

firebase.database().ref("Admin/").child(data).once('value',(snp)=>{
    console.log(snp.toJSON().email)
    email.innerHTML+=`    :${snp.toJSON().email}`
    username.innerHTML+=`    :${snp.toJSON().name}`
    contact.innerHTML+=`    :${snp.toJSON().number}`
    role.innerHTML+=`    :${snp.toJSON().role}`
})

firebase.database().ref('product/').once('value',(snp)=>{
console.log(snp.toJSON())

var data1= Object.values(snp.toJSON())
console.log(data1)

data1.map((v,i)=>{
container.innerHTML+=`

<div class="card ms-2" style="width: 16rem;" >
<img src="${v.img_url}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${v.name}</h5>
  <h5 class="card-title">Rs :${v.price}</h5>
  <p class="card-text">${v.description}</p>
  <a href="#" class="btn btn-primary">Del</a>
  <a href="#" class="btn btn-primary">Update</a>

`
})
console.log('ok')
})