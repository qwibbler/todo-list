// import './style.css';
import { toggleComplete } from './complete.js';
import * as ls from './local-storage.js';
import defaultList from './default-list.js';

const wrapper = document.querySelector('.items');
const defaultItems = [
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

const items = ls.getListData(defaultItems, ls.saveDataLocation);

function documentToDo() {
  wrapper.innerHTML = '';
  for (let i = 0; i < items.length; i += 1) {
    const todoItem = items.filter((item) => item.index === i)[0];
    const completeList = defaultList(todoItem, i);
    completeList.check.addEventListener('click', () => {
      toggleComplete(todoItem, items);
      ls.saveListData(items, ls.saveDataLocation);
      documentToDo();
    });
    wrapper.appendChild(completeList.frag);
  }
}

window.onload = documentToDo;