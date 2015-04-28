'use strict';

// Listens for the app launching then creates the window
chrome.app.runtime.onLaunched.addListener(function() {
  var width = screen.availWidth;
  var height = screen.availHeight;

  chrome.app.window.create('layout.html', {
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
