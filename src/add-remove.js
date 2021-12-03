export const addItem = (input, items) => {
  items.forEach(item => item.index += 1);
  // console.log('add, index++', items);
  items.push({
    description: input.value,
    complete: false,
    index: 0,
  });
  input.value = '';
  // console.log('add, push', items);
  return items;
}

export const removeItem = (item, items) => {
  items.forEach(i => {
    console.log('remove', item, 'index:', item.index);
    if (item.index > i.index) {
      console.log('remove, index--', item, 'index:', item.index);
      i.index -= 1;
    }
  })
  return items.filter(i => i == item);
}

export const removeAll = (items) => {
  // const completedArr = items.filter(i => i.complete);
  console.log(items);
  items = items.filter(i => !i.complete);
  console.log(items);
  return items;
}