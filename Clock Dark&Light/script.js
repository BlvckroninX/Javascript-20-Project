const timeEl = document.querySelector('.time')
const toggle = document.querySelector('.toggle')
const setTime =  () =>{
 const time = new Date()
 const [hour,minute,second] = [time.getHours(),time.getMinutes(),time.getSeconds()]

 timeEl.innerHTML=`${hour}:${minute < 10 ? `0${minute}`: minute}:${second < 10 ? `0${second}`:second}`
}
toggle.addEventListener('click',(e)=>{
    const html = document.querySelector('html')
    if(html.classList.contains("dark")){
      html.classList.remove('dark')
      e.target.innerHTML='โหมดกลางคืน'
    }else{
      html.classList.add('dark')
      e.target.innerHTML="โหมดกลางวัน"
    }
  })
setTime()
setInterval(setTime,1000)

