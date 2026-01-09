const dclock = document.querySelector('.dclock')

setInterval(function(){
    let date = new Date();
    dclock.innerHTML = date.toLocaleTimeString();

}, 1000);