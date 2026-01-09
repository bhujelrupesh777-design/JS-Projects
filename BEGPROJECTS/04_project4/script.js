const input = document.querySelector('.task')
const add_button = document.querySelector('.btn')
const list_container = document.querySelector('.list-container')


add_button.addEventListener('click', (e) =>{
    e.preventDefault();
    if(input.value ==='' || !isNaN(input.value)){
        alert("Please enter valid text!!");
    } else{
        let Li = document.createElement('li')
        Li.innerHTML = input.value
        list_container.appendChild(Li);
        let span = document.createElement('button')
        span.className="btn2"
        span.innerHTML = "delete"
        Li.appendChild(span)

        let span2 = document.createElement('button')
        span2.className="btn3"
        span2.innerHTML = "complete"
        Li.appendChild(span2)
        savedata();
    }

}, false)

list_container.addEventListener('click', (e) =>{
    if(e.target.className ==='btn2')
    {
        e.target.parentElement.remove()
        savedata();
    }
},false)

function savedata(){
    localStorage.setItem("data", list_container)
}