export const addItem = (input, items) => {
  items.forEach((item) => { item.index += 1; });
  items.push({
    description: input.value,
    complete: false,
    index: 0,
  });
  input.value = '';
  return items;
};

export const removeItem = (item, items) => {
  items.forEach((i) => {
    if (item.index > i.index) {
      i.index -= 1;
    }
  });
  return items.filter((i) => i === item);
};

export const removeAll = (items) => items.filter((i) => !i.complete);