let checkEdit = 0;

export const toggleIcons = (inputDiv) => {
  const listItem = inputDiv.parentElement;
  const initIcon = listItem.querySelector('span');
  const altIcon = listItem.querySelector('.altSpan');
  const listenerEnd = () => {
    endEdit(inputDiv); // eslint-disable-line no-use-before-define
    altIcon.removeEventListener('click', listenerEnd);
  };
  altIcon.removeEventListener('click', listenerEnd);
  if (initIcon.style.display !== 'none') {
    initIcon.style.display = 'none';
    altIcon.style.display = 'initial';
    altIcon.addEventListener('click', listenerEnd);
  } else {
    initIcon.style.display = 'initial';
    altIcon.style.display = 'none';
  }
  return [initIcon, altIcon];
};

export const editDesc = (inputDiv) => {
  checkEdit += 1;

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

  toggleIcons(inputDiv);
};

export const endEdit = (inputDiv) => {
  if (checkEdit >= 0) {
    checkEdit -= 1;
  } else {
    return;
  }
  const input = inputDiv.querySelector('#editing');
  const label = document.createElement('label');
  label.textContent = input.value;
  inputDiv.removeChild(input);
  inputDiv.appendChild(label);

  toggleIcons(inputDiv);
};

export const toggleEditing = (inputDiv) => {
  if (checkEdit === false) {
    editDesc(inputDiv);
  } else {
    endEdit(inputDiv);
  }
};
