import toggleComplete from './complete.js';
import { createMenu, delMenu } from './dropdown.js';
import editStart from './edit.js';

let trackDropmenu = 0;

function defaultList(item) {
  const frag = document.createDocumentFragment();
  const list = document.createElement('li');
  const div = document.createElement('div');
  const check = document.createElement('input');
  const label = document.createElement('label');
  const spanDiv = document.createElement('div');
  const span = document.createElement('span');
  const altSpan = document.createElement('span');

  div.appendChild(check);
  div.appendChild(label);
  list.appendChild(div);
  list.appendChild(spanDiv);
  spanDiv.appendChild(span);
  spanDiv.appendChild(altSpan);
  frag.appendChild(list);

  div.classList.add('input', `${item.index}`);

  check.type = 'checkbox';
  check.name = item.index;
  check.id = item.index;
  check.checked = item.complete;

  label.classList = (item.complete);
  label.htmlFor = item.index;
  label.textContent = item.description;

  span.innerHTML = '&#8942;';

  altSpan.style.display = 'none';
  altSpan.className = 'altSpan';
  altSpan.innerHTML = '&#10003;';
  spanDiv.classList.add('icon-dropmenu');

  return {
    frag, list, div, check, label, spanDiv, span, altSpan,
  };
}

function dropdownListener(span, spanDiv, id, items) {
  function spanDel() {
    if (trackDropmenu === 1) {
      trackDropmenu -= 1;
      delMenu(spanDiv);
    }
    window.removeEventListener('click', spanDel);
  }

  function spanMake(e) {
    if (trackDropmenu === 0) {
      e.stopPropagation();
      createMenu(spanDiv, id, items);
      trackDropmenu += 1;
      window.addEventListener('click', spanDel);
    }
  }

  span.addEventListener('click', spanMake);
}

const documentToDo = (list) => {
  if (list) {
    const wrapper = document.querySelector('.items');
    wrapper.innerHTML = '';
    for (let i = 0; i < list.length; i += 1) {
      const todoItem = list.filter((item) => item.index === i)[0];
      const completeList = defaultList(todoItem, i, list);

      dropdownListener(completeList.span, completeList.spanDiv, i, list);
      completeList.check.addEventListener('click', () => {
        toggleComplete(todoItem, list);
      });
      completeList.label.addEventListener('dblclick', () => {
        editStart(completeList.div);
      });

      wrapper.appendChild(completeList.frag);
    }
  }
};

export default documentToDo;