const progressEl  = document.querySelector('.progress')
window.onscroll=()=>scrollProgress()
const scrollProgress = () =>{
   //0-1
   const pageHeight =document.documentElement.scrollHeight - document.documentElement.clientHeight
   const scrollTop =document.documentElement.scrollTop
   const scrollPer =(scrollTop/pageHeight )*100
   progressEl.style.visibility ='visible'
   progressEl.style.width=scrollPer+'%'
}