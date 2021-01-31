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
        
    var strText = document.getElementById("full_name").value;          
        var strText1 = document.getElementById("phone").value;
        var strText2 = document.getElementById("place").value;
        var strText3 = document.getElementById("Date").value;
        var strText4 = document.getElementById("msg").value;
        var result = 'Name:  '+strText + '%0ANumber: ' + strText1+'%0APlace: ' + strText2+'%0ADate: ' + strText3+'%0AMessage: ' + strText4;
        var finalMsg = encodeURI(result);
        document.getElementById("create-form").addEventListener("submit", (e) => {
        e.preventDefault();
        {
        const request = new XMLHttpRequest();
        const url = 'https://api.telegram.org/bot1673038851:AAEIqwAgS-TtA331gOhUHVhRnVJf_34bUsE/sendMessage?chat_id=-1001225437691&text='+result;
        request.open("post", url);
        request.send();
        }
        });    
        
    alert("Thank For Register");
    createForm.reset();
    }
    
    if(y.style.display === "none")
    {
        alert("Please Verify the Phone Number & Submit the Form");
    }
    });
