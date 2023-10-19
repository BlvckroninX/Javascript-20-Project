// 0-100% => 0-1 => 0.3
const btn = document.querySelector('.top')
const html = document.documentElement
document.addEventListener('scroll',showBtn)
btn.addEventListener('click',scrollToTop)
    function showBtn(){
        const scrollTotal = html.scrollHeight - html.clientHeight
        if(html.scrollTop/scrollTotal>0.30){
            btn.classList.add('show-btn')
        }
        else{
            btn.classList.remove('show-btn')
        }
    }

function scrollToTop (){
    html.scrollTo({
        top:0,
        behavior:"smooth"
    })
}


