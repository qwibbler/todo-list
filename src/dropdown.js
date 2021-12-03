import editStart from './edit.js';
import * as ls from './local-storage.js';
import * as addRemove from './add-remove.js';

export const delItem = (id) => {
  let items = ls.getListData(ls.saveDataLocation);
  const delThis = items.filter((i) => i.index === id)[0];
  items = addRemove.removeItem(delThis, items);
  document.querySelector('.refresh-icon').click();
};

export const createMenu = (elem, i) => {
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
  del.className = 'all-del';

  edit.innerHTML = '&#x270D Edit';
  del.innerHTML = '&#128465; Delete';

  edit.addEventListener('click', () => {
    const inputDiv = elem.parentElement.querySelector('.input');
    editStart(inputDiv);
  });

  del.addEventListener('click', () => {
    delItem(i);
  });

  elem.appendChild(frag);
  const icon = elem.querySelector('span');
  icon.innerHTML = '&#8230;';
};

export const delMenu = (elem) => {
  const menu = elem.querySelector('ul');
  if (menu) {
    elem.removeChild(menu);
  }

  const icon = elem.querySelector('span');
  icon.innerHTML = '&#8942;';
};
