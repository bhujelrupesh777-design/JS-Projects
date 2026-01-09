const form = document.querySelector('form')
form.addEventListener('submit', function(e){
    e.preventDefault();
    const height = parseInt(document.querySelector('.height').value)
    const weight = parseInt(document.querySelector('.weight').value)
    const result = document.querySelector('.result')
    if(height==='' || isNaN(height)){
        result.innerHTML = "plese enter valid number in height"  
    }else if(weight==='' || isNaN(weight)){
        result.innerHTML = "plese enter valid number in weight"  
    } else{
        result.innerHTML = `BMI: ${((weight/(height*height))*10000).toFixed(2)}`
    }
})