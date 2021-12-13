import * as ls from './local-storage.js';

const toggleComplete = (item, items) => {
  const itemElement = document.getElementById(item.index);
  const label = itemElement.parentElement.querySelector('label');
  if (itemElement.checked) {
    item.complete = true;
    label.classList = (item.complete);
  } else {
    item.complete = false;
    label.classList = (item.complete);
  }
  ls.saveListData(items, ls.saveDataLocation);
};

export default toggleComplete;