let checkEdit = false;

export const edit = (inputDiv) => {
  const label = inputDiv.querySelector('label');
  const input = document.createElement('input');
  input.type = 'text';
  input.id = 'editing';
  input.value = label.textContent;
  inputDiv.removeChild(label);
  inputDiv.appendChild(input);
  input.focus();
  checkEdit = true;
}

export const endEdit = (inputDiv) => {
  const input = inputDiv.querySelector('#editing');
  const label = document.createElement('label');
  label.textContent = input.value;
  inputDiv.removeChild(input);
  inputDiv.appendChild(label);
  checkEdit = false;
}

export const toggleEditing = (inputDiv) => {
  if (checkEdit === false) {
    edit(inputDiv);
  } else {
    endEdit(inputDiv);
  }
}

