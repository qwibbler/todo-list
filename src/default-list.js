import { toggleComplete } from './complete.js';
import * as edit from './edit.js';
import * as dropdown from './dropdown.js';

export function defaultList(item, i) {
  const frag = document.createDocumentFragment();
  const list = document.createElement('li');
  const div = document.createElement('div');
  const check = document.createElement('input');
  const label = document.createElement('label');
  const spanDiv = document.createElement('div');
  const span = document.createElement('span');

  div.appendChild(check);
  div.appendChild(label);
  list.appendChild(div);
  list.appendChild(spanDiv);
  spanDiv.appendChild(span);
  frag.appendChild(list);

  div.classList.add('todo', 'input');

  check.type = 'checkbox';
  check.name = item.index;
  check.id = item.index;
  check.checked = item.complete;

  label.classList = (item.complete);
  label.htmlFor = item.index;
  label.textContent = item.description;

  list.id = `${i}li`;

  span.innerHTML = '&#8942;';
  span.classList.add('icon', 'options-icon');

  function spanDel() {
    dropdown.delMenu(spanDiv);
    window.removeEventListener('click', spanDel);
  }

  span.addEventListener('click', () => {
    const dropped = dropdown.toggleDropmenu(spanDiv);
    if (dropped === true) {
    window.addEventListener('click', spanDel)
    }
  })

  spanDiv.classList.add('icon-dropmenu');
  spanDiv.addEventListener('click', (event) => {
    event.stopPropagation();
  });

  return {
    frag, list, div, check, label, span,
  };
}


export const documentToDo = (list) => {
  console.log('doctodo', list);
  if (list) {
    const wrapper = document.querySelector('.items');
    wrapper.innerHTML = '';
    for (let i = 0; i < list.length; i += 1) {
      // DEBUG!!!
      const todoArr = list.filter((item) => item.index === i);
      if (todoArr.length < 1) {
        alert('Repeat index!!!')
      } else if (todoArr.length === 0) {
        alert('No index!!!')
      }
      const todoItem = list.filter((item) => item.index === i)[0];
      const completeList = defaultList(todoItem, i);
      completeList.check.addEventListener('click', () => {
        toggleComplete(todoItem, list);
      });
      wrapper.appendChild(completeList.frag);
    }
  }
}