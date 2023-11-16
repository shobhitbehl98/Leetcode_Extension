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
});