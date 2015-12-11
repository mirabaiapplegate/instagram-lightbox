function openLightbox(userID) {
  var accessToken = instaAuth();

  fetchFromInsta(userID, accessToken, "drawLightbox");
}
