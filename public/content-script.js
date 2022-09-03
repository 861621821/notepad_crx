const mask = document.createElement('div');
mask.className = 'xl-mask';
mask.innerHTML = `
  <div class="xl-btn-wrap">
    <div class="xl-msg">填写工时时间到！</div>
    <div class="xl-btn-1">打开系统</div>
    <div class="xl-btn-2">稍后</div>
  </div>
`
document.body.appendChild(mask);
document.querySelector('.xl-btn-wrap').onclick = (e)=>{
  if (!!e.target && e.target.className.toLowerCase() == "xl-btn-1") {
    document.querySelector('.xl-mask').style.display = 'none';
    chrome.runtime.sendMessage({ action: 'open' })
  } else if(!!e.target && e.target.className.toLowerCase() == "xl-btn-2"){
    document.querySelector('.xl-mask').style.display = 'none';
    chrome.runtime.sendMessage({ action: 'cancel' })
  }
}

chrome.runtime.onMessage.addListener(({ action }, sender, sendResponse)=>{
  console.log('content:', action);
  if(action == 'showModel'){
    document.querySelector('.xl-mask').style.display = 'block';
  }
  sendResponse()
})

setInterval(()=>{
  chrome.runtime.sendMessage({ action: 'check' })
}, 5000)