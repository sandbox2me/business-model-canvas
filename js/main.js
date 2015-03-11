'use strict';

// Listens for the app launching then creates the window
chrome.app.runtime.onLaunched.addListener(function() {
  var width = 900;
  var height = 600;

  chrome.app.window.create('layout.html#/view/keyPartness', {
    id: 'main',
    bounds: {
//      width: screen.availWidth,
//      height: screen.availHeight,
      width: width,
      height: height,
      left: Math.round((screen.availWidth - width) / 2),
      top: Math.round((screen.availHeight - height)/2)
    }
  });
});
