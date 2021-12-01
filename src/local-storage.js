export const saveDataLocation = 'myLocalToDo'

export const saveListData = (data, location) => localStorage.setItem(location, JSON.stringify(data));

export const getListData = (data, location) => {
  if (localStorage.getItem(location)) {
    data = JSON.parse(localStorage.getItem(location));
    return data
  }
}
