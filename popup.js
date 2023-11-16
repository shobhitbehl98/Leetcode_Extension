document.addEventListener('DOMContentLoaded', function () {
    let remd = document.getElementById('remd');
    chrome.storage.sync.get(['popupData'], function (result) {
        if (result.popupData) {
            remd.checked = result.popupData;
        }
    });
    remd.addEventListener('click', () => {
        chrome.runtime.sendMessage({ type: 'popupData', data: remd.checked });
    })
    let videoSolution=document.getElementById('button');
    videoSolution.addEventListener('click',()=>{
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            if (tabs[0]) {
              const title = tabs[0].title.replace(/\s+/g, '+');
              chrome.tabs.create({ url: "https://www.youtube.com/results?search_query="+title });
            }
          });
    })
});