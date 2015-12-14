// Draw the lightbox and bind events
function lightbox(images) {
  // Current image index
  var imageIndex = 0;
  // Creating nodes
  var lightboxContainer      = createElement("div", "lightbox", document.body);
  var overlay                = createElement("a", "lightbox-overlay", lightboxContainer);
  var lightboxControls       = createElement("div", "lightbox-controls", lightboxContainer);
  var lightboxControlsLeft   = createElement("div", "lightbox-controls-left", lightboxControls);
  var leftArrow              = createElement("a", "", lightboxControlsLeft);
  var lightboxImageContainer = createElement("div", "lightbox-image-container", lightboxControls);
  var lightboxImage          = createElement("img", "image", lightboxImageContainer);
  var lightboxControlsRight  = createElement("div", "lightbox-controls-right", lightboxControls);
  var rightArrow             = createElement("a", "", lightboxControlsRight);
  var lightboxImageCaption   = createElement("div", "lightbox-caption", lightboxImageContainer);

  // Binding events to left arrow
  leftArrow.href        = "#";
  leftArrow.innerText   = "<";
  leftArrow.textContent = "<"; // Firefox support
  leftArrow.addEventListener('click', function(evt) {
    evt.preventDefault();
    if (imageIndex > 0) {
      imageIndex -= 1;
      updateLightboxImage(imageIndex, images, lightboxImage, lightboxImageCaption);
    }
  });

  // Binding events to left arrow
  rightArrow.href        = "#";
  rightArrow.innerText   = ">";
  rightArrow.textContent = ">"; // Firefox support
  rightArrow.addEventListener('click', function(evt) {
    evt.preventDefault();
    if (imageIndex < (images.length - 1)) {
      imageIndex += 1;
      updateLightboxImage(imageIndex, images, lightboxImage, lightboxImageCaption);
    }
  });

  // Bind event to overlay
  overlay.href = "#";
  overlay.addEventListener('click', function(evt) {
    evt.preventDefault();
    removeLightbox(lightboxContainer);
  });

  // Setup initial image
  updateLightboxImage(imageIndex, images, lightboxImage, lightboxImageCaption);
}

// Create new element
function createElement(type, className, container) {
  var el = document.createElement(type);
  el.className = className;
  container.appendChild(el);
  return el;
}

// Update the current image in lightbox
function updateLightboxImage (imageIndex, images, lightboxImage, lightboxImageCaption) {
  lightboxImage.src                = images[imageIndex].url;
  lightboxImageCaption.innerText   = images[imageIndex].caption;
  lightboxImageCaption.textContent = images[imageIndex].caption; // Firefox support
}

// Remove entire lightbox from DOM tree
function removeLightbox(container) {
  document.body.removeChild(container);
}
