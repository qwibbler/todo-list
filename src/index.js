import './style.css';

const wrapper = document.querySelector('.items')
const items = [
  {
    description: 'wash the dishes',
    complete: false,
    index: '0',
  },
  {
    description: 'complete To Do list project',
    complete: false,
    index: '1',
  },
]

function documentToDo() {
    console.log('hello');
    for (let i = 0; i < items.length; i += 1) {
      const frag = document.createDocumentFragment();
      console.log(frag);
      const todoItem = items[i];
      console.log(i, todoItem);

      const todoList = document.createElement('li');
      const todoDiv = document.createElement('div');
      const checkBox = document.createElement('input');
      const labelDesc = document.createElement('label');
      const span = document.createElement('span')

      todoDiv.classList.add('todo', 'input');
      todoDiv.appendChild(checkBox);
      checkBox.type = 'checkbox';
      checkBox.name = todoItem.index;
      checkBox.id = todoItem.index;
      checkBox.checked = todoItem.complete;

      todoDiv.appendChild(labelDesc);
      labelDesc.htmlFor = todoItem.index;
      labelDesc.textContent = todoItem.description;

      todoList.appendChild(todoDiv);
      todoList.appendChild(span);
      frag.appendChild(todoList);
      wrapper.appendChild(frag);
  }
}

window.onload = documentToDo;