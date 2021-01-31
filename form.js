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
        y.style.display = "block";
        var a = document.getElementById("recaptcha-container");
        var b = document.getElementById("myBtn");
         a.style.display = "none";
         b.style.display = "none";
        modal.style.display = "none";
        alert("Successfully registered");
        
        var user=result.user;
        console.log(user);
    }).catch(function (error) {
           
        alert(error.message);
    });
}




const form = document.querySelector('#create-form');
var y = document.getElementById("ve");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(y.style.display === "block")
    {
    db.collection('User-info').add({
    full_name: form.full_name.value,
    phone: form.phone.value,
    place: form.place.value,
    Date: form.Date.value,
    msg: form.msg.value
    });
    form.full_name.value = '';
    form.phone.value= '';
    form.place.value= '';
    form.Date.value= '';
    form.msg.value= '';
        var strText = document.getElementById("full_name").value;          
        var strText1 = document.getElementById("phone").value;
        var strText2 = document.getElementById("place").value;
        var strText3 = document.getElementById("Date").value;
        var strText4 = document.getElementById("msg").value;
        var result = 'Name:  '+strText + '%0APhone Number: ' + strText1+'%0APlace: ' + strText2+'%0ADate: ' + strText3+'%0AMessage: ' + strText4;
        var finalMsg = encodeURI(result);
         document.getElementById("create-form").addEventListener("submit", (e) => {
            e.preventDefault();
            const request = new XMLHttpRequest();
        const url = 'https://api.telegram.org/bot1673038851:AAEIqwAgS-TtA331gOhUHVhRnVJf_34bUsE/sendMessage?chat_id=-1001225437691&text='+result;
        }
    }
    if(y.style.display === "none")
    {
        alert("Please Verify the Phone Number & Submit the Form");
    }});

    
});


       
