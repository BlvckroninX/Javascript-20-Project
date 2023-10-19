const btn = document.querySelector('.btn')
const container = document.querySelector('.container')
// message[0]-[4]
const message =['สวัสดี','Hello','ราตรีสวัสด','goodnight','Hi']

btn.addEventListener('click',()=>createNotification())

function createNotification(){
    //สร้าง element div
    const notification = document.createElement('div')
    //สร้าง class notification
    notification.classList.add('notification')
    // random  ข้อความ ใส่ใน div
    notification.innerText=randomMessage()
    // appendchild ให้ element div เป็น element ลูกข้อง container
    container.appendChild(notification)
    setTimeout(()=>{
        notification.remove()},3000)
}

function randomMessage(){
    return message[Math.floor(Math.random()*message.length)]
 }
