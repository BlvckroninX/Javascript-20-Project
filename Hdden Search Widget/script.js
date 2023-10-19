const search = document.querySelector('.search')
const input =document.querySelector('.input')
const btn = document.querySelector('.btn')
btn.addEventListener('click',()=>{
    //เพิ้ม  class  ลบ class active
    search.classList.toggle('active')
    input.focus()
})