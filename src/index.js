// import './style.css';
import * as ls from './local-storage.js';
import { documentToDo } from './default-list.js'; // eslint-disable-line
import * as addRemove from './add-remove-edit.js';

const addIt = document.querySelector('#add-item');
const removeIt = document.querySelector('#clear');
const refreshIcon = document.querySelector('.refresh-icon');
const addIcon = document.querySelector('.add-icon');
let items = ls.getListData(ls.saveDataLocation);

export function refresh() {
  documentToDo(items);
  ls.saveListData(items, ls.saveDataLocation);
}

function add() {
  addRemove.addItem(addIt, items);
  refresh();
}

function removeAll() {
  items = addRemove.removeAll(items);
  refresh();
}

export const delItem = (id) => {
  const delThis = items.filter((i) => i.index === id)[0];
  items = addRemove.removeItem(delThis, items);
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

removeIt.addEventListener('click', removeAll);
