export const saveDataLocation = 'myLocalToDo';

const localStorage = { myLocalToDo: [] };

export const saveListData = (data, location) => {
  localStorage[location] = data;
  return localStorage[location];
};

export const getListData = (location) => localStorage[location];