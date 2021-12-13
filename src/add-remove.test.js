import * as addRemove from './add-remove.js';
import documentToDo from './default-list.js';

jest.mock('./local-storage');
jest.mock('./default-list');

const itemsFull = [{
  description: 'xyzzy',
  complete: false,
  index: 0,
},
{
  description: 'abcde',
  complete: true,
  index: 1,
}];

describe('Add...', () => {
  test('Abc to empty items', () => {
    const input = { value: 'Abc' };
    const itemsEmpty = [];
    addRemove.addItem(input, itemsEmpty);
    expect(itemsEmpty.length).toBe(1);
  });

  test('Abc to full items', () => {
    const input = { value: 'Abc' };
    const itemsFull = [{
      description: 'xyzzy',
      complete: false,
      index: 0,
    },
    {
      description: 'abcde',
      complete: true,
      index: 1,
    }];
    addRemove.addItem(input, itemsFull);
    expect(itemsFull.length).toBe(3);
  });

  test('Abc to Empty DOM', () => {
    document.body.innerHTML = `
    <ul class="todo items">
    </ul>
    `;
    const input = { value: 'Abc' };
    const itemsEmpty = [];
    addRemove.addItem(input, itemsEmpty);
    documentToDo(itemsEmpty);
    expect(document.body.querySelectorAll('li').length).toBe(1);
  });

  test('Abc to NonEmpty DOM', () => {
    document.body.innerHTML = `
    <ul class="todo items">
    </ul>
    `;
    const input = { value: 'Abc' };
    const itemsFull = [{
      description: 'xyzzy',
      complete: false,
      index: 0,
    },
    {
      description: 'abcde',
      complete: true,
      index: 1,
    }];
    addRemove.addItem(input, itemsFull);
    documentToDo(itemsFull);
    expect(document.body.querySelectorAll('li').length).toBe(3);
  });
});

describe('Remove...', () => {
  test('Remove Item', () => {
    const newArr = addRemove.removeItem(itemsFull[0], itemsFull);
    expect(newArr.length).toBe(1);
  });

  test('Delete Item from DOM', () => {
    document.body.innerHTML = `
    <ul class="todo items">
    </ul>
    `;
    const itemsFull = [{
      description: 'xyzzy',
      complete: false,
      index: 0,
    },
    {
      description: 'abcde',
      complete: true,
      index: 1,
    }];
    const newArr = addRemove.removeItem(itemsFull[0], itemsFull);
    documentToDo(newArr);
    expect(document.body.querySelectorAll('li').length).toBe(1);
  });

  test('Delete All Completed Items', () => {
    document.body.innerHTML = `
    <ul class="todo items">
    </ul>
    `;
    const itemsFull = [{
      description: 'xyzzy',
      complete: false,
      index: 0,
    },
    {
      description: 'abcde',
      complete: true,
      index: 1,
    },
    {
      description: 'Item 3',
      complete: false,
      index: 2,
    },
    {
      description: 'Item 4',
      complete: true,
      index: 3,
    }];
    const newArr = addRemove.removeAllCompleted(itemsFull);
    documentToDo(newArr);
    expect(document.body.querySelectorAll('li').length).toBe(2);
  });
});