var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var btc = document.getElementById("myBtc");
var span = document.getElementsByClassName("close")[0];
  
btn.onclick = function() {
  document.getElementById("phone").readOnly = true;
  var number=document.getElementById('phone').value;

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

btc.onclick = function() {
  modal.style.display = "none";
}
span.onclick = function() {
    modal.style.display = "none";
   document.getElementById("phone").readOnly = false;
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
function myFunction() {
  document.getElementById("phone").readOnly = true;
}
function myFunctio() {
  document.getElementById("phone").readOnly = false;
  modal.style.display = "none";
}
var allElements = document.querySelectorAll(".mobile-verify");
      var i;
      for (i = 0; i < allElements.length; i++) {
        var el = allElements[i];
        el.addEventListener("keypress", function () {
          this.nextSibling.nextSibling.focus();
        });
      }
