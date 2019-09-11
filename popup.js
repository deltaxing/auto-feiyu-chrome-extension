
document.querySelector('#btnLogin').onclick = ()=>{
    var value = document.querySelector('#username').value;
    chrome.storage.sync.set({key: value}, function() {
        console.log('Value is set to ' + value);
      });
}