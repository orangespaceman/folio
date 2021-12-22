/*
 * Comrade filter
 */

"use strict";

var comradeFilter;
var comradeListItems;

function init() {
  comradeFilter = document.querySelector(".js-Comrades-filter");
  if (!comradeFilter) return;

  comradeListItems = document.querySelectorAll(".js-Comrades-item");

  comradeFilter.classList.remove("u-hidden");
  comradeFilter.addEventListener("input", onInputChange);
}

function onInputChange(e) {
  var searchValue = e.target.value.toLowerCase();
  if (!searchValue) {
    Array.prototype.forEach.call(comradeListItems, setActiveState);
  } else {
    Array.prototype.forEach.call(comradeListItems, function (comradeListItem) {
      if (
        comradeListItem.dataset.skills.toLowerCase().indexOf(searchValue) >
          -1 ||
        comradeListItem.textContent.toLowerCase().indexOf(searchValue) > -1
      ) {
        setActiveState(comradeListItem);
      } else {
        setInactiveState(comradeListItem);
      }
    });
  }
}

function setActiveState(el) {
  el.classList.remove("is-inactive");
}

function setInactiveState(el) {
  el.classList.add("is-inactive");
}

module.exports = {
  init: init,
};
