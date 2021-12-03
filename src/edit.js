let checkEdit = false;

export const toggleIcons = (inputDiv) => {
  const listItem = inputDiv.parentElement;
  const initIcon = listItem.querySelector('span');
  const altIcon = listItem.querySelector('.altSpan');
  const listenerEnd = () => {
    endEdit(inputDiv)
    console.log('listener');
    altIcon.removeEventListener('click', listenerEnd);
  }
  if (checkEdit === true) {
    initIcon.style.display = 'none';
    altIcon.style.display = 'initial';
    altIcon.addEventListener('click', listenerEnd);
  } else {
    initIcon.style.display = 'initial';
    altIcon.style.display = 'none';
  }
  return [initIcon, altIcon];
}

export const editDesc = (inputDiv) => {
  checkEdit = true;

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
      endEdit(inputDiv);
    }
  })

  toggleIcons(inputDiv);
  // const listenerEnd = () => {
  //   endEdit(inputDiv)
  //   console.log('listener');
  // // }
  // icon.removeEventListener('click', listenerEnd);
  // icon.addEventListener('click', listenerEnd);
}

export const endEdit = (inputDiv) => {
  if (checkEdit === true) {
    checkEdit = false;
  } else {
    return
  }
  const input = inputDiv.querySelector('#editing');
  const label = document.createElement('label');
  label.textContent = input.value;
  inputDiv.removeChild(input);
  inputDiv.appendChild(label);

  toggleIcons(inputDiv)
}

export const toggleEditing = (inputDiv) => {
  if (checkEdit === false) {
    editDesc(inputDiv);
  } else {
    endEdit(inputDiv);
  }
}

