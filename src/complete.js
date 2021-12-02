export const itemComplete = (item, items) => {
  item.complete = true;
  let indexGreater = items.filter(i => i.index > item.index);
  console.log(items.filter(i => i.index > item.index));
  for (let i = 0; i < indexGreater.length; i += 1) {
    if (!indexGreater[i].complete) {
      console.log('iter incomp index greater', indexGreater[i]);
      indexGreater[i].index -= 1;
      item.index += 1;
    }
  }
  console.log('finish', items);
};

export const itemIncomplete = (item, items) => {
  item.complete = false;
  let indexLesser = items.filter((i) => i.index < item.index);
  for (let i = 0; i < indexLesser.length; i += 1) {
    // console.log(items, iterItem);
    console.log('incomp iter index less', indexLesser[i]);
    indexLesser[i].index += 1;
  }
  item.index = 0;
  console.log('finish', items);
};

export const toggleComplete = (item, items) => {
  const itemElement = document.getElementById(item.index);
  if (itemElement.checked) {
    itemComplete(item, items);
  } else {
    itemIncomplete(item, items);
  }
};