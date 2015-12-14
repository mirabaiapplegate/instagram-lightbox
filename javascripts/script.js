// On DOM ready check for Instagram access token
document.addEventListener("DOMContentLoaded", function(evt) {
  var accessToken = checkForAccessToken();

  if (accessToken != null) {
    openLightbox();
  }
});

// Begin process to open lightbox
function openLightbox() {
  var lightboxButton = document.getElementById('openLightbox');
  var userID         = lightboxButton.getAttribute('data-instagram-user-id');

  // Retrieve token
  var accessToken = instaAuth();

  // Fetch images from Instagram
  fetchFromInsta(userID, accessToken, "instaCallback");
}

// JSONP Instagram callback
function instaCallback(data) {
  var images = convertInstaData(data.data);
  lightbox(images);
}

// Convert raw Instagram data to lightbox usable data
function convertInstaData(data) {
  var images = [];
  for (i = 0; i < data.length; i++) {
    var image = {};
    var imageData = data[i];
    image.caption = imageData.caption.text;
    image.url = imageData.images.standard_resolution.url;
    images.push(image);
  }
  return images;
}
