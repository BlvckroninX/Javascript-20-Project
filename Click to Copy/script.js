const btn = document.querySelector('.copy')
const code = document.querySelector('.value')
btn.addEventListener('click',()=>{
    code.select()
    code.setSelectionRange(0,999999)
   navigator.clipboard.writeText(code.value)
   btn.textContent='คัดลอกเรียบร้อย !!!'
   setTimeout(()=>{
    btn.textContent='คัดลอก'
   },3000)
})
