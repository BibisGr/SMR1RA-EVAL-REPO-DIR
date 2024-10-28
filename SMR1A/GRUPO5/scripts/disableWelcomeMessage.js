var letStart = document.getElementById('lets_Start')


function dissableWelcomeMessage(){
    localStorage.setItem('welcomeMessage','no')
}

letStart.onclick = function() {
dissableWelcomeMessage();
}


if(localStorage.getItem('welcomeMessage') == 'no'){
    window.location.href = "./pages/home.html";
    }else{
        window.localStorage.setItem('welcomeMessage', 'yes')
    }