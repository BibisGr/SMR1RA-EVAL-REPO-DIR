var btn_Open = document.getElementById('sidebar_Open')
var btn_Close = document.getElementById('sidebar_Close')
var sidebar = document.getElementById('sidebar')


var sidebarStorage = localStorage.getItem('sidebar')

if(sidebarStorage == 'close'){
    sidebar.style.display = 'none'
    btn_Close.style.display = 'none'
    btn_Open.style.display = 'block'
}


if(sidebarStorage == 'open'){
    sidebar.style.display = 'block'
    btn_Close.style.display = 'block'
    btn_Open.style.display = 'none'
    sidebar.style.opacity = '100'; 
}


