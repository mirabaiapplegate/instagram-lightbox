// Fetch images from Instagram API
function fetchFromInsta (user_id, accessToken, callbackName) {
  var url        = "https://api.instagram.com/v1/users/" + user_id +
                   "/media/recent/?access_token=" + accessToken + "&callback="
                   + callbackName;
  var requestTag = document.createElement("script");

  requestTag.setAttribute("src", url);
  document.body.appendChild(requestTag);
}

// Authorize Instagram
function instaAuth() {
  // Retrieve access token
  var accessToken = checkForAccessToken();
  // If accessToken is null, redirect user to obtain a token
  if (accessToken == null) {
    var clientId      = "a635cf38f2404dd4ac295c3b2ca53164";
    var redirect_uri  = document.URL;
    var redirect_uri  = redirect_uri.replace(/\/$/, "");
    var url           = "https://api.instagram.com/oauth/authorize/?client_id="
                        + clientId + "&redirect_uri=" + redirect_uri +
                        "&response_type=token";

    document.location = url;
  }

  return accessToken;
}

// Check for access token
function checkForAccessToken() {
  // Fetch the access token from the url
  var accessToken = window.location.hash.substring(1);

  // Check if access token exists if not set to null
  if (accessToken.match(/access_token=/)) {
    accessToken = accessToken.replace('access_token=', '');
  } else {
    accessToken = null;
  }

  return accessToken;
}
