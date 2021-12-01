export const itemComplete = (item, items) => {
  item.complete = true;
  for (let i = 0; i < items.length; i += 1) {
    let iterItem = items.filter((item) => item.index === i)[0];
    if (!iterItem.complete) {
      if (iterItem.index > item.index) {
        iterItem.index -= 1;
        item.index += 1;
      }
    }
  }
}

export const itemIncomplete = (item, items) => {
  item.complete = false;
  for (let i = 0; i < items.length; i += 1) {
    let iterItem = items.filter((item) => item.index === i)[0];
    if (iterItem.index < item.index) {
      iterItem.index += 1;
    }
    item.index = 0;
  }
}

export const toggleComplete = (item, items) => {
  const itemElement = document.getElementById(item.index);
  if (itemElement.checked) {
    itemComplete(item, items);
  } else {
    itemIncomplete(item, items);
  }
}