
function drawLightbox(lightboxData) {

  var lightboxContainer = document.createElement("div");
  lightboxContainer.className = "lightbox";

  var overlay = document.createElement("div");
  overlay.className = "lightbox-overlay";
  lightboxContainer.appendChild(overlay);

  var lightboxControls = document.createElement("div");
  lightboxControls.className = "lightbox-controls";
  lightboxContainer.appendChild(lightboxControls);

  var lightboxControlsLeft = document.createElement("div");
  lightboxControlsLeft.className = "lightbox-controls-left";
  lightboxControls.appendChild(lightboxControlsLeft);

  var leftArrow = document.createElement("a");
  leftArrow.innerText = "<";
  lightboxControlsLeft.appendChild(leftArrow);

  var lightboxControlsRight = document.createElement("div");
  lightboxControlsRight.className = "lightbox-controls-right";
  lightboxControls.appendChild(lightboxControlsRight);

  var rightArrow = document.createElement("a");
  rightArrow.innerText = ">";
  lightboxControlsRight.appendChild(rightArrow);

  var lightboxImage = document.createElement("div");
  lightboxImage.className = "lightbox-image";
  lightboxControls.appendChild(lightboxImage);

  document.body.appendChild(lightboxContainer);

}
