var btn_Open = document.getElementById('sidebar_Open');
var btn_Close = document.getElementById('sidebar_Close');
var sidebar = document.getElementById('sidebar');


// Ocultar Barra lateral
btn_Open.style.display = 'block';
sidebar.style.display = 'none';        // Ocultar completamente el sidebar
sidebar.style.opacity = '0';           // Hacer que sea invisible
sidebar.style.transition = 'opacity .4s ease'; // Transiciones suaves

function openSidebar() {
    sidebar.style.display = 'block';   
    setTimeout(function() {            
        sidebar.style.opacity = '1';   
    }, 10);                           
    btn_Close.style.display = 'block'; 
    btn_Open.style.display = 'none';   
    localStorage.setItem('sidebar', 'open');
}

function closeSidebar() {
    sidebar.style.opacity = '0';      
    sidebar.style.display = 'none'; 
    btn_Close.style.display = 'none';  
    btn_Open.style.display = 'block';  
    localStorage.setItem('sidebar', 'close');
}


btn_Open.onclick = function() {
    openSidebar();
}

btn_Close.onclick = function() {
    closeSidebar();
}


function dissableWelcomeMessage(){
    localStorage.setItem('welcomeMessage','no')
}

letStart.onclick = function() {
    dissableWelcomeMessage();
}