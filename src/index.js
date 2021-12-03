// import './style.css';
import * as ls from './local-storage.js';
import * as defaultList from './default-list.js';
import * as addRemove from './add-remove.js';
// import * as dropdown from './dropdown.js';

const addIt = document.querySelector('#add-item');
const removeIt = document.querySelector('#clear');
const refreshIcon = document.querySelector('.refresh-icon');
const addIcon = document.querySelector('.add-icon');

export let items = ls.getListData(ls.saveDataLocation);

function refresh() {
  defaultList.documentToDo(items);
}

function add() {
  addRemove.addItem(addIt, items);
  refresh();
}

function removeAll() {
  items = addRemove.removeAll(items);
  refresh();
}

export function delItem(delThis) {
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