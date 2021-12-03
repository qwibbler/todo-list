export const saveDataLocation = 'myLocalToDo';

export const saveListData = (data, location) => {
  localStorage.setItem(location, JSON.stringify(data));
  return data;
};

export const getListData = (location) => {
  if (localStorage.getItem(location)) {
    const data = JSON.parse(localStorage.getItem(location));
    return data;
  }
  return [];
};
