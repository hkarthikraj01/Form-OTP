 function teleBot() {
        var strText = document.getElementById("full_name").value;          
        var strText1 = document.getElementById("phone").value;
        var strText2 = document.getElementById("place").value;
        var strText3 = document.getElementById("Date").value;
        var strText4 = document.getElementById("msg").value;
        var result = 'Name:  '+strText + '%0APhone Number: ' + strText1+'%0APickup Location: ' + strText2+'%0APickup Time: ' + strText3+'%0ADrop Location: ' + strText4+'%0ACars: ' + strText5;
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
    }
