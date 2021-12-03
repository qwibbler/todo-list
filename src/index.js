// import './style.css';
import { toggleComplete } from './complete.js';
import * as ls from './local-storage.js';
import defaultList from './default-list.js';
import * as addRemove from './add-remove.js';

const wrapper = document.querySelector('.items');
const addIt = document.querySelector('#add-item');
const removeIt = document.querySelector('#clear');
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

function documentToDo(list) {
  wrapper.innerHTML = '';
  for (let i = 0; i < list.length; i += 1) {
    const todoItem = list.filter((item) => item.index === i)[0];
    const completeList = defaultList(todoItem, i);
    completeList.check.addEventListener('click', () => {
      toggleComplete(todoItem, list);
      ls.saveListData(list, ls.saveDataLocation);
      documentToDo(list);
    });
    wrapper.appendChild(completeList.frag);
  }
}

window.onload = documentToDo(items);
addIt.addEventListener('change', () => {
  addRemove.addItem(addIt, items)
  documentToDo(items);
  ls.saveListData(items, ls.saveDataLocation);
})
removeIt.addEventListener('click', () => {
  items = addRemove.removeAll(items)
  documentToDo(items);
  ls.saveListData(items, ls.saveDataLocation);
})