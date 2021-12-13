import './style.css';
import * as ls from './local-storage.js';
import documentToDo from './default-list.js';
import * as addRemove from './add-remove.js';

const addIt = document.querySelector('#add-item');
const removeIt = document.querySelector('#clear');
const refreshIcon = document.querySelector('.refresh-icon');
const addIcon = document.querySelector('.add-icon');
let items = ls.getListData(ls.saveDataLocation);

function refresh() {
  items = ls.getListData(ls.saveDataLocation);
  documentToDo(items);
}

function add() {
  addRemove.addItem(addIt, items);
  refresh();
}

function removeAllCompleted() {
  items = addRemove.removeAllCompleted(items);
  refresh();
}

window.onload = refresh;
refreshIcon.addEventListener('click', refresh);

addIcon.addEventListener('click', add);
addIt.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    add();
  }
});

removeIt.addEventListener('click', removeAllCompleted);
