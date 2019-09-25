/* global localStorage */

function getItem <T>(key: string): T | null {

  const item = localStorage.getItem(key);

  return item
    ? JSON.parse(item)
    : null;
}

function setItem <T>(key: string, value: T) {
  localStorage.setItem(key, JSON.stringify(value))
}

function removeItem (key: string) {
  localStorage.removeItem(key)
}

export default {
  getItem,
  setItem,
  removeItem
};
