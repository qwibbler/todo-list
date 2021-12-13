const documentToDo = (list) => {
  if (list) {
    const wrapper = document.querySelector('.items');
    wrapper.innerHTML = '';
    for (let i = 0; i < list.length; i += 1) {
      const item = list[i];

      const listElem = document.createElement('li');
      const div = document.createElement('div');
      const check = document.createElement('input');
      const label = document.createElement('label');
      const spanDiv = document.createElement('div');
      const span = document.createElement('span');
      const altSpan = document.createElement('span');

      div.appendChild(check);
      div.appendChild(label);
      listElem.appendChild(div);
      listElem.appendChild(spanDiv);
      spanDiv.appendChild(span);
      spanDiv.appendChild(altSpan);

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

      wrapper.appendChild(listElem);
    }
  }
};

export default documentToDo;