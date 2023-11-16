chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.type === 'popupData') {
        let easy = document.getElementsByClassName('text-difficulty-easy');
        let medium = document.getElementsByClassName('text-difficulty-medium');
        let hard = document.getElementsByClassName('text-difficulty-hard');
        let ans;
        if (easy.length > 0) {
            ans=easy[0];
        }else if(medium.length>0){
            ans=medium[0];
        }else if(hard.length>0){
            ans=hard[0];
        }
      if (request.data) {
        ans.style.display='none';
       }else{
        ans.style.display='flex';
       }
    }
  });
