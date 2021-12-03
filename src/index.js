// import './style.css';
import { toggleComplete } from './complete.js';
import * as ls from './local-storage.js';
import defaultList from './default-list.js';
import * as addRemove from './add-remove.js';

const wrapper = document.querySelector('.items');
const addIt = document.querySelector('#add-item');
const removeIt = document.querySelector('#clear');
const refreshIcon = document.querySelector('.refresh-icon');
const addIcon = document.querySelector('.add-icon');

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

let items = ls.getListData(defaultItems, ls.saveDataLocation);

function documentToDo() {
  console.log('refresh');
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

function add() {
  console.log('add');
  addRemove.addItem(addIt, items)
  documentToDo();
  ls.saveListData(items, ls.saveDataLocation);
}

function removeAll() {
  console.log('removeAll');
  items = addRemove.removeAll(items)
  documentToDo();
  ls.saveListData(items, ls.saveDataLocation);
}

window.onload = documentToDo;
refreshIcon.addEventListener('click', documentToDo)

addIt.addEventListener('keypress', e => {
  if (e.key === 'Enter') {
    add()
  }
});

addIcon.addEventListener('click', add)

removeIt.addEventListener('click', removeAll)