chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['content-script.js']
    });
  });


// function injectedFunction() {
//   document.body.style.backgroundColor = 'orange';
// }

// chrome.action.onClicked.addListener((message, callback) => {
//   chrome.scripting.executeScript({
//     target: { tabId: tab.id },
//     function: injectedFunction
//   });
// });