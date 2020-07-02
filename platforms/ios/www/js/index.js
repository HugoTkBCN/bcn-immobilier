document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    window.open = cordova.InAppBrowser.open;
    var ref = cordova.InAppBrowser.open("https://www.bcn-immobilier.com/", "_self", "zoom=no,location=no");

}