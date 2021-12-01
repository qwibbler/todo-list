import './style.css';
import {toggleComplete} from './complete.js';
import * as ls from './local-storage.js';

const wrapper = document.querySelector('.items');
let items = [
  {
    description: 'wash the dishes',
    complete: false,
    index: 0,
  },
  {
    description: 'complete To Do list project',
    complete: false,
    index: 1,
  },
];
ls.getListData(items, ls.saveDataLocation)

function documentToDo() {
  wrapper.innerHTML = '';
  for (let i = 0; i < items.length; i += 1) {
    const frag = document.createDocumentFragment();
    const todoItem = items.filter((item) => item.index === i)[0];

    const todoList = document.createElement('li');
    const todoDiv = document.createElement('div');
    const checkBox = document.createElement('input');
    const labelDesc = document.createElement('label');
    const span = document.createElement('span');

    todoDiv.classList.add('todo', 'input');
    todoDiv.appendChild(checkBox);
    checkBox.type = 'checkbox';
    checkBox.name = todoItem.index;
    checkBox.id = todoItem.index;
    checkBox.checked = todoItem.complete;
    checkBox.addEventListener('click', () => {
      toggleComplete(todoItem, items);
      ls.saveListData(items, ls.saveDataLocation)
      documentToDo();
    })

    todoDiv.appendChild(labelDesc);
    labelDesc.htmlFor = todoItem.index;
    labelDesc.textContent = todoItem.description;
    labelDesc.classList = (todoItem.complete);

    todoList.id = `${i}li`
    todoList.appendChild(todoDiv);
    todoList.appendChild(span);
    span.innerHTML = '&#8942;';
    frag.appendChild(todoList);
    wrapper.appendChild(frag);
  }
}

window.onload = documentToDo;