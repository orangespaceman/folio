/*
 * Video
 */

"use strict";

var videos;

function init() {
  videos = document.querySelectorAll(".js-Video");
  if (videos.length === 0) return;

  videos.forEach(addListener);
}

function addListener(video) {
  var videoToggle = video.querySelector(".js-Video-toggle");

  videoToggle.addEventListener("click", (e) => {
    e.preventDefault();
    video.classList.add("is-active");

    var videoEl = document.createElement("video");
    videoEl.classList.add("Video-video");
    videoEl.setAttribute("controls", true);
    videoEl.setAttribute("autoplay", true);

    var sourceEl = document.createElement("source");
    sourceEl.setAttribute("src", video.dataset.video);

    videoEl.appendChild(sourceEl);
    video.appendChild(videoEl);
  });
}

module.exports = {
  init: init,
};
