chrome.runtime.onInstalled.addListener(function () {
    console.log('Extension installed');
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.type === 'popupData') {
        chrome.storage.sync.set({ 'popupData': request.data }, function () {

        });
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { type: 'popupData', data: request.data });
        });
    }
});