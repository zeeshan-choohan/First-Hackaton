var title = document.getElementById("title")
var price = document.getElementById("price")
var description = document.getElementById("description")
var file = document.getElementById("file")
var add_item = document.getElementById("item")
var upload = document.getElementById("upload")
var img_url=""
var files
file.addEventListener('click',()=>{
    file.onchange=e=>{
        files=e.target.files
        console.log(files[0])
    }
})

upload.addEventListener('click',()=>{
    var storageRef = firebase.storage().ref();

    var uploadTask = storageRef.child(`images/${files[0].name}`).put(files[0]);

// Register three observers:
// 1. 'state_changed' observer, called any time the state changes
// 2. Error observer, called on failure
// 3. Completion observer, called on successful completion
uploadTask.on('state_changed', 
  (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case firebase.storage.TaskState.PAUSED: // or 'paused'
        console.log('Upload is paused');
        break;
      case firebase.storage.TaskState.RUNNING: // or 'running'
        console.log('Upload is running');
        break;
    }
  }, 
  (error) => {
    // Handle unsuccessful uploads
  }, 
  () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
     img_url=downloadURL
        console.log('File available at', downloadURL);
    });
  }
);
console.log('ok')
})













add_item.addEventListener('click',async ()=>{
    event.preventDefault()
    var getuid=firebase.database().ref("product").push().getKey()
    console.log(getuid)
obj={
name:title.value,
price:price.value,
description:description.value,
img_url:img_url 



}


  await  firebase.database().ref('product/').child(getuid).set(obj)
console.log('ok')

window.location.href='adminPanel.html'


})
