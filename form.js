var firebaseConfig = {
    apiKey: "AIzaSyC-pKtCM2VQKsxnO0zCU0m7OdNj7W0Zr7c",
    authDomain: "authfirebase-2533f.firebaseapp.com",
    databaseURL: "https://authfirebase-2533f.firebaseio.com",
    projectId: "authfirebase-2533f",
    storageBucket: "authfirebase-2533f.appspot.com",
    messagingSenderId: "537279639100",
    appId: "1:537279639100:web:8ed5796c0f784074a2dd39"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebase.firestore();

  // update firestore settings
  db.settings({ timestampsInSnapshots: true });

window.onload=function () {
  render();
};
function render() {
    window.recaptchaVerifier=new firebase.auth.RecaptchaVerifier('recaptcha-container');
    recaptchaVerifier.render();
}
function codeverify() {
    var code=document.getElementById('verificationCode').value;
    coderesult.confirm(code).then(function (result) {
       
  
           var y = document.getElementById("ve");
   if (y.style.display === "none") {
     y.style.display = "block";
   } else {
     y.style.display = "none";
   }
         modal.style.display = "none";
        alert("Successfully registered");
        
        var user=result.user;
        console.log(user);
    }).catch(function (error) {
        alert(error.message);
    });
}
