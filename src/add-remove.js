export const addItem = (input, items) => {
  // items.forEach((item) => { item.index += 1; });
  items.push({
    description: input.value,
    complete: false,
    index: items.length,
  });
  input.value = '';
  return items;
};

export const removeItem = (item, items) => {
  const removed = items.filter((i) => i !== item);
  removed.forEach((i) => {
    if (item.index < i.index) {
      i.index -= 1;
    }
  });
  return removed;
};

export const removeAll = (items) => {
  const complete = items.filter((i) => i.complete);
  complete.forEach(ele => {
    items = removeItem(ele, items)
  });
  return items;
}