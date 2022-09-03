let stopTime = null;
// 监听content_script传过来的事件
chrome.runtime.onMessage.addListener(({ action }, sender, sendResponse)=>{
  if(action == 'open'){
    // 打开新页面
    chrome.tabs.create({
      url: 'http://projectmanage.51qqt.com/#/login'
    })
    chrome.storage.local.set({done: true});
    sendResponse({ status: 'ok' })
  } else if(action == 'cancel'){
    stopTime = Date.now();
  } else if(action == 'check'){
    if(stopTime && Date.now() - stopTime < 5 * 60 * 1000){
      return false
    }
    // 检查是否完成
    const date = new Date();
    chrome.storage.local.get({done: false}, ({ done })=>{
      console.log(done ? '已完成' :'未完成');
      // if(date.getDay() == 5 && date.getHours() >= 18){
      if(date.getDay() == 6 && date.getHours() >= 10){
        if(!done) {
          chrome.tabs.query({active: true, currentWindow: true}, tabs=>{
            tabs[0] && chrome.tabs.sendMessage(tabs[0].id, {action: 'showModel'})
          })
        }
      } else {
        chrome.storage.local.set({done: false});
      }
    })
  }
})