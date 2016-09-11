/* global window */

const localStorage = window.localStorage;

function getItem(key) {
  JSON.parse(localStorage.getItem(key));
}

function setItem(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

module.exports = {
  getItem,
  setItem
};
