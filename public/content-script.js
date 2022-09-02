setInterval(()=>{
  notice();
  if(document.querySelector('.EmpWorkingHours .searchBtn')) {
    document.querySelector('.EmpWorkingHours .searchBtn').style.display = 'none';
  }
}, 500)

function notice(){
  const flag = localStorage.getItem('xilanFlag');
  if(!flag){
    const date = new Date();
    if(date.getDay() == 5 && date.getHours() == 18){
      var res = confirm('填写工时时间到！');
      if(res){
        localStorage.setItem('xilanFlag', true)
      }
    }
  }
}