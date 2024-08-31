document.getElementById('add-task-btn').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();
    
    if (taskText !== '') {
        const taskList = document.getElementById('task-list');
        const li = document.createElement('li');
        li.textContent = taskText;
        
        const completeBtn = document.createElement('button');
        completeBtn.textContent = 'Concluir';
        completeBtn.addEventListener('click', function() {
            li.classList.toggle('task-completed');
        });
        
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Excluir';
        deleteBtn.addEventListener('click', function() {
            taskList.removeChild(li);
        });
        
        li.appendChild(completeBtn);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
        taskInput.value = '';
    }
});
