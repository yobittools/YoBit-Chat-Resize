chrome.tabs.onUpdated.addListener(function(tabId,changeInfo,tab){
    if (tab.url.indexOf("https://yobit") > -1 && changeInfo.url === undefined){
        chrome.tabs.executeScript(tab.id, {file: 'jquery.min.js'});
        chrome.tabs.executeScript(tab.id, {file: 'chat.js'});
    }
});