let todoInput = document.querySelector('#todo-input');
const dateInput = document.querySelector('#date-input');
const sendButton= document.querySelector('.send-button');
const todoContainer = document.querySelector('.todo-list-container');


sendButton.onclick = ()=>{
    if(todoInput.value === ''){
        alert('Pleas input your todo list');
    } else{
        const li = document.createElement('li');
        li.innerHTML = 
        `${todoInput.value}
         <span>${dateInput.value}</span>
         <img src="images/delete_3694433.png" class="icon">
        `;
        todoContainer.appendChild(li);
    }
        todoInput.value = '';

    localStorage.setItem('data', todoContainer.innerHTML )
}

todoContainer.addEventListener('click', (event)=>{
    if(event.target.tagName === 'IMG'){
        event.target.parentElement.remove();
    }
    localStorage.setItem('data', todoContainer.innerHTML )
})

todoContainer.innerHTML = localStorage.getItem('data');
 