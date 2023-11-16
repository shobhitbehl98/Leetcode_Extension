chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.type === 'popupData') {
        removeDifficulty(request.data);
    }
});
let flag;
chrome.storage.sync.get(['popupData'], function (result) {
    if (result.popupData) {
        flag=result.popupData;
    }
});


function handleMutations(mutations) {
    mutations.forEach((mutation) => {
        mutation?.previousSibling?.classList.forEach((x) => {
            if (x.startsWith('text-difficulty')) {
                removeDifficulty(flag,x);
            }
        })
    });
}

const observerOptions = {
    childList: true,
    subtree: true,
};

const observer = new MutationObserver(handleMutations);

observer.observe(document, observerOptions);

function removeDifficulty(flag, val) {
    let ans = document?.getElementsByClassName(val)[0];
    let easy = document.getElementsByClassName('text-difficulty-easy');
    let medium = document.getElementsByClassName('text-difficulty-medium');
    let hard = document.getElementsByClassName('text-difficulty-hard');
    if (easy.length > 0) {
        ans = easy[0];
    } else if (medium.length > 0) {
        ans = medium[0];
    } else if (hard.length > 0) {
        ans = hard[0];
    }
    if (flag) {
        ans.style.display = 'none';
    } else {
        ans.style.display = 'flex';
    }
}