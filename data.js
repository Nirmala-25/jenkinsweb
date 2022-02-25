const firebaseConfig = {
    apiKey: "AIzaSyD2CH4R3l5e3QCp3ohxIkUNNtblxvumxgc",
    authDomain: "test2-d0510.firebaseapp.com",
    projectId: "test2-d0510",
    storageBucket: "test2-d0510.appspot.com",
    messagingSenderId: "942525184292",
    appId: "1:942525184292:web:650f6cb114ba8cf4541bb1"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

// let's code 
var datab  = firebase.database().ref('data');
function UserRegister(){
var email = document.getElementById('eemail').value;
var password = document.getElementById('lpassword').value;
var contact = document.getElementById('phone').value;
firebase.auth().createUserWithEmailPasswordAndcontact(email,password,contact).then(function(){
    
}).catch(function (error){
    var errorcode = error.code;
    var errormsg = error.message;
});
}
const auth = firebase.auth();
function SignIn(){
    var email = document.getElementById('eemail').value;
    var password = document.getElementById('lpassword').value;
    var contact = document.getElementById('phone').value;
    const promise = auth.signInWithEmailAndPassword(email,password,contact);
    promise.catch( e => alert(e.msg));
    window.open("https://www.google.com","_self");
}
document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    var userInfo = datab.push();
    userInfo.set({
        name: getId('fname'),
        email : getId('eemail'),
        password : getId('lpassword'),
        contact : getId('phone')
    });
    alert("Successfully Register");
    console.log("sent");
    document.getElementById('form').reset();
});
function  getId(id){
    return document.getElementById(id).value;
}