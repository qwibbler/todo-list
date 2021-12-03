let dropped = false

export const createMenu = (elem) => {
  dropped = true;

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

  elem.appendChild(frag)
  const icon = elem.querySelector('span');
  icon.innerHTML = '&#8230;'
}

export const delMenu = (elem) => {
  dropped = false;

  const menu = elem.querySelector('ul');
  elem.removeChild(menu);

  const icon = elem.querySelector('span');
  icon.innerHTML = '&#8942;'
}

export const toggleDropmenu = (elem) => {
  if (dropped == false) {
    createMenu(elem);
  } else {
    delMenu(elem)
  }
  return dropped;
}