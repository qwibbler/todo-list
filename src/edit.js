let checkEdit = false;

export const edit = (inputDiv) => {
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

  const icon = inputDiv.parentElement.querySelector('span');
  icon.innerHTML = '&#10003;'
}

export const endEdit = (inputDiv) => {
  checkEdit = false;

  const input = inputDiv.querySelector('#editing');
  const label = document.createElement('label');
  label.textContent = input.value;
  inputDiv.removeChild(input);
  inputDiv.appendChild(label);

  const icon = inputDiv.parentElement.querySelector('span');
  icon.innerHTML = '&#8942;';
}

export const toggleEditing = (inputDiv) => {
  if (checkEdit === false) {
    edit(inputDiv);
  } else {
    endEdit(inputDiv);
  }
}

