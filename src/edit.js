import * as ls from './local-storage.js';

const updateEdit = (inputDiv, label) => {
  const id = inputDiv.classList[1];
  const items = ls.getListData(ls.saveDataLocation);
  const item = items.find((item) => item.index === Number(id));
  item.description = label.textContent;
  ls.saveListData(items, ls.saveDataLocation);
};

const editDesc = (inputDiv) => {
  const label = inputDiv.querySelector('label');
  const input = document.createElement('input');
  input.type = 'text';
  input.id = 'editing';
  input.value = label.textContent;

  inputDiv.removeChild(label);
  inputDiv.appendChild(input);

  input.focus();
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      const listItem = inputDiv.parentElement;
      const altIcon = listItem.querySelector('.altSpan');
      altIcon.click();
    }
  });
};

export const endEdit = (inputDiv) => {
  const input = inputDiv.querySelector('#editing');
  const label = document.createElement('label');
  const index = inputDiv.classList[1];
  const check = document.getElementById(`${index}`);

  label.textContent = input.value;
  label.htmlFor = index;
  label.classList.add(`${check.checked}`);

  inputDiv.removeChild(input);
  inputDiv.appendChild(label);

  updateEdit(inputDiv, label);
};

export const toggleIcons = (inputDiv) => {
  const listItem = inputDiv.parentElement;
  const initIcon = listItem.querySelector('span');
  const altIcon = listItem.querySelector('.altSpan');

  const endEditListener = () => {
    endEdit(inputDiv);
    toggleIcons(inputDiv);
    altIcon.removeEventListener('click', endEditListener);
  };
  altIcon.removeEventListener('click', endEditListener);

  if (initIcon.style.display !== 'none') {
    initIcon.style.display = 'none';
    altIcon.style.display = 'initial';
    altIcon.addEventListener('click', endEditListener);
  } else {
    initIcon.style.display = 'initial';
    altIcon.style.display = 'none';
  }
};

const editStart = (inputDiv) => {
  editDesc(inputDiv);
  toggleIcons(inputDiv);
};
export default editStart;
