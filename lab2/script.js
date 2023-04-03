"use strict";

let toDoId = 0;
let deletedToDo = null;
let selectedList = document.getElementById('list-select').value;

const toDoList = document.getElementById('todo-list');
const addInput = document.getElementById('todo-input');
const searchInput = document.getElementById('search-input');

const addElement = () => {
    const text = addInput.value;

    if (text === '') {
        return;
    }

    const toDo = createTodo(text);
    toDoList.appendChild(toDo);
    addInput.value = '';
}

const createTodo = (text) => {
    const toDo = document.createElement('div');
    toDo.type = selectedList;
    toDo.classList.add('todo');
    toDo.onclick = () => toggleDone(toDo);
    toDo.id = toDoId;
    toDoId++;

    addText(toDo, text);
    addButton(toDo);
    
    return toDo;
}

const addText = (todo, text) => {
    const toDoText = document.createElement('p');
    toDoText.innerHTML = text;
    todo.appendChild(toDoText);
}

const addButton = (todo) => {
    const toDoButton = document.createElement('button');
    toDoButton.innerHTML = 'X';
    toDoButton.onclick = (e) => deleteButtonClick(e, todo);
    todo.appendChild(toDoButton);
}

const deleteButtonClick = (e, todo) => {
    e.stopPropagation();
    $('#confirm-button').off('click').click(() => {
        setTimeout(() => $(`#${todo.id}`).remove(), 1000);
        todo.classList.add('disappering-todo');
        deletedToDo = todo;
        closeDialog();
    });
    $('#delete-dialog').show();
}

const closeDialog = () => $('#delete-dialog').hide();

const toggleDone = (todo) => {
    const isDone = todo.classList.toggle('done');

    if (!isDone) {
        removeDate(todo);
        return;
    }

    const date = createDate();
    todo.appendChild(date);
}

const createDate = () => {
    const date = new Date().toLocaleString();
    const p = document.createElement('p');
    p.innerHTML = date;

    return p;
}

const removeDate = (e) => {
    const firstChild = e.firstChild;
    const secondChild = firstChild.nextSibling;
    e.innerHTML = '';
    e.appendChild(firstChild);
    e.appendChild(secondChild);
}

$(document).keypress('Z', (e) => {
    if (deletedToDo === null || !e.ctrlKey || deletedToDo.type !== selectedList) {
        return;
    }

    deletedToDo.classList.remove('done');
    deletedToDo.classList.remove('disappering-todo');
    removeDate(deletedToDo);
    toDoList.appendChild(deletedToDo);
    deletedToDo = null;
})

const searchTodo = () => {
    const allToDos = [...document.querySelectorAll('.todo')];
    let searchValue = searchInput.value;
    let isCaseSensitive = !document.getElementById('case-sensitive').checked;
    allToDos.filter(x => x.type === selectedList).forEach(todo => {
        let text = todo.firstChild.innerHTML;
        if (isCaseSensitive) {
            searchValue = searchValue.toLowerCase();
            text = text.toLowerCase();
        }
        if (text.includes(searchValue)) {
            todo.style.display = 'block';
            return;
        }
        todo.style.display = 'none';
    });
}
searchInput.oninput = searchTodo;

const selectList = () => {
    const list = document.getElementById('list-select').value;
    const allToDos = document.querySelectorAll('.todo');
    allToDos.forEach(todo => {
        if (todo.type === list) {
            todo.style.display = 'block';
            return;
        }
        todo.style.display = 'none';
    });
    selectedList = list;
    searchTodo();
}

const getJoke = () => {
    fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(data => {
        const joke = data.value;
        const toDo = createTodo(joke);
        toDoList.appendChild(toDo);
    })
}

const createHiddenButton = () => {
    const div = document.createElement('div');
    const button = document.createElement('button');
    div.classList.add('hidden-container');
    button.innerHTML = 'Give me some inspiration';
    button.onclick = getJoke;
    div.appendChild(button);
    document.body.appendChild(div);
}
createHiddenButton();