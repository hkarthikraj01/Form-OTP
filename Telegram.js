 function teleBot() {
        var strText = document.getElementById("full_name").value;          
        var strText1 = document.getElementById("phone").value;
        var strText2 = document.getElementById("place").value;
        var strText3 = document.getElementById("Date").value;
        var strText4 = document.getElementById("msg").value;
        var y = document.getElementById("ve");
        var result = 'Name:  '+strText + '%0ANumber: ' + strText1+'%0APlace: ' + strText2+'%0ADate: ' + strText3+'%0AMessage: ' + strText4;
        var finalMsg = encodeURI(result);
        document.getElementById("create-form").addEventListener("submit", (e) => {
        e.preventDefault();
         if(strText==""||strText1==""||strText2==""||strText3==""||strText4==""||y.style.display === "none")
        {
        console.log('error');
        }else       
        {
        /*const request = new XMLHttpRequest();
        const url = 'https://api.telegram.org/bot1673038851:AAEIqwAgS-TtA331gOhUHVhRnVJf_34bUsE/sendMessage?chat_id=-1001225437691&text='+result;    
        request.open("post", url);
        request.send();*/
        window.open("https://www.fast2sms.com/dev/bulk?authorization=YbdnyBCkGrxZSeTl0vwMqmEastOQLRFPcVpXW1J9Huj6DIoKAhxMguvAoKnTp3FzymwcksZU0GJqhbeI&sender_id=FSTSMS&message=This is "+result+"&language=english&route=p&numbers=8248675218");
            }
         }); 
    }
