const firebaseConfig = {
  apiKey: "AIzaSyBPAG1PFUBZpf9ITso-bSaWF6sk74kccAc",
  authDomain: "marutah-contact.firebaseapp.com",
  projectId: "marutah-contact",
  storageBucket: "marutah-contact.appspot.com",
  messagingSenderId: "794538140463",
  appId: "1:794538140463:web:6e62aa644a5a72d125f7da"
};
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();
const db = firestore.collection("formData");

let submitButton = document.getElementById('submit');

submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let graphics = document.querySelector('#graphics').checked;
  let motion = document.querySelector('#motion').checked;
  let UIUX = document.querySelector('#UIUX').checked;
  let msg = document.getElementById('subject').value;

  db.doc().set({
    name: name,
    email: email,
    graphics: graphics,
    motion: motion,
    UIUX: UIUX,
    msg: msg
  }).then(()=>{
    console.log("data saved");
    //submitbtn = getElementById('submit');
    //console.log(submitbtn);
    //submitbtn.innertext = "submitted"
  }).catch((error)=>{
    console.log('error');

  })

  submitbtn=document.querySelector('#buttondiv');
  submitbtntxt=document.querySelector('#submit');
  submitbtn.classList.toggle("submitted");
  submitbtntxt.style.opacity =0;
  submitthanks = document.querySelector('#form-end');
  submitthanks.style.display = 'flex';
  setTimeout(function(){
    submitbtntxt.innerHTML ="sent!";
    submitbtntxt.style.opacity =1;
    submitthanks.style.opacity=0.6},500);

  setTimeout(function(){
    window.open("index.html", "_self");
  },5500)
  console.log(submitbtn.innerHTML);
})


