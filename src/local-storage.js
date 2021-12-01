export const saveListData = (data, location) => {
  localStorage.setItem(location, JSON.stringify(data));
  console.log(data, JSON.stringify(data));
}

export const getListData = (data, location) => {
  if (localStorage.getItem(location)) {
    data = JSON.parse(localStorage.getItem(location));
    console.log(data);
    return data
  }
}
