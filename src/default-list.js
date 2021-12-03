import { toggleComplete } from './complete.js';
import * as ls from './local-storage.js';

export function defaultList(item, i) {
  console.log('defaultlist', item, i);
  const frag = document.createDocumentFragment();
  const list = document.createElement('li');
  const div = document.createElement('div');
  const check = document.createElement('input');
  const label = document.createElement('label');
  const span = document.createElement('span');

  div.appendChild(check);
  div.appendChild(label);
  list.appendChild(div);
  list.appendChild(span);
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

  return {
    frag, list, div, check, label, span,
  };
}

export const documentToDo = (list) => {
  if (list) {
    console.log('refresh, listnotnull', list);
    const wrapper = document.querySelector('.items');
    wrapper.innerHTML = '';
    for (let i = 0; i < list.length; i += 1) {
      const todoItem = list.filter((item) => item.index === i)[0];
      const completeList = defaultList(todoItem, i);
      completeList.check.addEventListener('click', () => {
        console.log('run doc-todo addevent', list);
        toggleComplete(todoItem, list);
        ls.saveListData(list, ls.saveDataLocation);
        documentToDo(list);
      });
      wrapper.appendChild(completeList.frag);
    }
  }
}