import * as startEdit from './edit.js'
// import * as addRemove from './add-remove.js'
import { items, delItem } from './index.js';
export let dropped = 0;

export const createMenu = (elem) => {
  dropped += 1;

  const frag = document.createDocumentFragment();
  const ul = document.createElement('ul');
  const edit = document.createElement('li');
  const del = document.createElement('li');

  frag.appendChild(ul);
  ul.appendChild(edit);
  ul.appendChild(del);

  ul.id = 'list-menu';
  edit.id = 'edit-list';
  del.id = 'del-list';

  edit.innerHTML = '&#x270D Edit';
  del.innerHTML = '&#128465; Delete';

  edit.addEventListener('click', () => {
    const inputDiv = elem.parentElement.querySelector('.input');
    startEdit.editDesc(inputDiv);
  })

  del.addEventListener('click', () => {
    const delThis = items.filter((i) => i.index == elem.parentElement.id[0])[0];
    // items = addRemove.removeItem(delThis, items);
    delItem(delThis);
  })

  elem.appendChild(frag)
  const icon = elem.querySelector('span');
  icon.innerHTML = '&#8230;'
}

export const delMenu = (elem) => {
  dropped -= 1;

  const menu = elem.querySelector('ul');
  if (menu) {
    elem.removeChild(menu);
  }

  const icon = elem.querySelector('span');
  icon.innerHTML = '&#8942;'
}

export const toggleDropmenu = (elem) => {
  if (dropped === 0) {
    createMenu(elem);
  } else if (dropped === 1) {
    delMenu(elem)
  }
  return dropped;
}