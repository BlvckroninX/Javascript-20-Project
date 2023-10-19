const eyeIcon = document.getElementById('eye')
const password = document.getElementById('password')
eyeIcon.addEventListener('click',()=>{
    //ถ้า eyeIcon มีค่าเป็น fa-eye = ดวงตาเปิด
    if(eyeIcon.classList.contains('fa-eye')){
        //แทนที่ class fa-eye ด้วย fa-eye-slash = ปิดตา
        eyeIcon.classList.replace('fa-eye','fa-eye-slash')
        //เซ็ทค่าของประเภทจาก password เป็น text
        password.setAttribute('type','text')
    }
    else{
        //แทนที่ class fa-eye-slash ด้วย fa-eye = เปิดตา
        eyeIcon.classList.replace('fa-eye-slash','fa-eye')
        //เซ็ทค่าของประเภทจาก text เป็น password
        password.setAttribute('type','password')
    } 
})