// instagram API

function fetchFromInsta (user_id, accessToken, callbackName) {
  var url = "https://api.instagram.com/v1/users/" + user_id + "/media/recent/?access_token=" + accessToken + "&callback=" + callbackName;

  var requestTag = document.createElement("script");
  requestTag.setAttribute("src", url);
  document.body.appendChild(requestTag);
}


function instaAuth() {
  var accessToken = window.location.hash.substring(1);

  if (accessToken.match(/access_token=/)) {
    accessToken = accessToken.replace('access_token=', '');
  } else {
    var clientId = 	"a635cf38f2404dd4ac295c3b2ca53164";
    var redirect_uri = document.URL;

    var redirect_uri = redirect_uri.replace(/\/$/, "");

    var url = "https://api.instagram.com/oauth/authorize/?client_id=" + clientId + "&redirect_uri=" + redirect_uri + "&response_type=token";

    document.location = url;
  }
  
  return accessToken;
}
