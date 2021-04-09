function getURLParameter( parameterName){
    var parameters = new URLSearchParameter(window.location.pathname);
    return parameters.get(parameterName);
}

function getURLParameterSlash (parameterNameSlash) {
    var currentURL = (document.URL);
    var afterSlash = currentURL.split("/")[1];
    alert(afterSlash);
    return afterSlash.get(parameterNameSlash);
}