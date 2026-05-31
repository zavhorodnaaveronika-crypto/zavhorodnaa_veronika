(function () {
  var track = document.querySelector(".vibe__track");
  if (!track) return;

  var isDown = false;
  var startX = 0;
  var scrollLeft = 0;

  track.addEventListener("mousedown", function (event) {
    if (event.button !== 0) return;
    isDown = true;
    track.classList.add("is-dragging");
    startX = event.pageX;
    scrollLeft = track.scrollLeft;
  });

  track.addEventListener("mousemove", function (event) {
    if (!isDown) return;
    event.preventDefault();
    track.scrollLeft = scrollLeft - (event.pageX - startX);
  });

  function stopDrag() {
    if (!isDown) return;
    isDown = false;
    track.classList.remove("is-dragging");
  }

  track.addEventListener("mouseup", stopDrag);
  track.addEventListener("mouseleave", stopDrag);
})();
