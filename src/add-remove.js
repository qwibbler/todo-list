import * as ls from './local-storage.js';

const { v4: uuidv4 } = require('uuid');

export const addItem = (input, items) => {
  items.push({
    description: input.value,
    complete: false,
    index: items.length,
    uniqueID: uuidv4(),
  });
  input.value = '';
  ls.saveListData(items, ls.saveDataLocation);
  return items;
};

export const removeItem = (item, items) => {
  const removed = items.filter((i) => i !== item);
  removed.forEach((i) => {
    if (item.index < i.index) {
      i.index -= 1;
    }
  });
  ls.saveListData(removed, ls.saveDataLocation);
  return removed;
};

export const removeAll = (items) => {
  const complete = items.filter((i) => i.complete);
  complete.forEach((ele) => {
    items = removeItem(ele, items);
  });
  return items;
};