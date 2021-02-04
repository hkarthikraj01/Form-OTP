//phone Auth
var btn = document.getElementById("myBtn");
btn.onclick = function() {
  document.getElementById("phone").readOnly = true;
 // var number=document.getElementById('phone').value;
  var str1 = "+91";
  var str2 = document.getElementById('phone').value;
  var number = str1.concat(str2);
  
  
  firebase.auth().signInWithPhoneNumber(number,window.recaptchaVerifier).then(function (confirmationResult) {
      window.confirmationResult=confirmationResult;
      coderesult=confirmationResult;
      console.log(coderesult);
      alert("Message sent");
  }).catch(function (error) {
       
     document.getElementById("phone").readOnly = false;
      alert(error.message);
  });

  modal.style.display = "block";
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
