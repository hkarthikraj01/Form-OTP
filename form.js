//form

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
    alert("Thank For Register");
    createForm.reset();
    }
    
    if(y.style.display === "none")
    {
        alert("Please Verify the Phone Number & Submit the Form");
    }
    });
