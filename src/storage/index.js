export const updateStorage = (data) => {
  const jsonData = JSON.stringify(data);
  localStorage.setItem('columnsList', jsonData);
};

export const fetchStorage = () => {
  const data = localStorage.getItem('columnsList');
  return JSON.parse(data);
};
