const body = document.querySelector('body')
const buttons = document.querySelectorAll('.button')
// console.log(buttons);

buttons.forEach(function (button) {
console.log(button);
button.addEventListener('click', function(e) {
    
    if (e.target.id === 'red') {
        body.style.backgroundColor = 'red'
    }

    if (e.target.id === 'black') {
        body.style.backgroundColor = 'black'
    }

    if (e.target.id === 'green') {
        body.style.backgroundColor = 'green'
    }

    if (e.target.id === 'blue') {
        body.style.backgroundColor = 'blue'
    }

    if (e.target.id === 'yellow') {
        body.style.backgroundColor = 'yellow'
    }
    
})

})
