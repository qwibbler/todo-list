import * as ls from './local-storage.js';

export const addItem = (input, items) => {
  items.push({
    description: input.value,
    complete: false,
    index: items.length,
  });
  input.value = '';
  ls.saveListData(items, ls.saveDataLocation);
  return items;
};

export const removeItem = (item, items) => {
  const arrWithoutItem = items.filter((i) => i !== item);
  arrWithoutItem.forEach((i) => {
    if (item.index < i.index) {
      i.index -= 1;
    }
  });
  ls.saveListData(arrWithoutItem, ls.saveDataLocation);
  return arrWithoutItem;
};

export const removeAllCompleted = (items) => {
  const arrAllComplete = items.filter((i) => i.complete);
  arrAllComplete.forEach((ele) => {
    items = removeItem(ele, items);
  });
  return items;
};