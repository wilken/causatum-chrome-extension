var url = null
var text = null
var id = chrome.contextMenus.create(
  {
    "title": "Send to Causatum", 
    "contexts": ["selection"],
    "onclick": function(info, tab){ 
      url = info.pageUrl
      text = info.selectionText
//      chrome.windows.create({ type: "popup", url: "causatum.html", width: 300, height: 300 });
      chrome.tabs.insertCSS(null,{file:"css/experiments.css"})
      chrome.tabs.executeScript(null,{file:"js/jquery.min.js"})
      chrome.tabs.executeScript(null,{file:"js/content_script.js"})
    }
  }
);

chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
    if(request.cmd == "getData") {
        sendResponse({url: url, text: text});
    }
});
console.log('heyo')

post = {
  "user": "mwilken@gmail.com",
  "event": "blabla",
  "date": "10-10-2011",
  "source": "http://..."
}