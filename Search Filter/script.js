const result = document.getElementById('result')
const filter = document.getElementById('filter')
const listItems = []


filter.addEventListener('input',(e)=>{
    //input thailand  === listItem thailand
    const search = e.target.value.toLowerCase()
    listItems.forEach(item=>{
        if(item.innerHTML.toLowerCase().includes(search)){
            //แสดงรายการ
            item.classList.remove('hide')
            
        }
        else{
            //ซ่อนรายการที่ไม่เกี่ยวข้อง
            item.classList.add('hide')
        }
    })

})

async function getData (){
    const url = 'https://restcountries.com/v2/all'
    const res = await fetch(url)
    const items = await res.json()
    result.innerHTML=''
    items.forEach(country => {
        const li = document.createElement('li')
        listItems.push(li)
        li.innerHTML=`
        <img src="${country.flag}">
        <div class="info">
            <h4>${country.name}</h4>
            <p>${formatNumber(country.population)}</p>
        </div>
        
        `
        result.appendChild(li)
    });
}
function formatNumber(num) {

    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')

}
getData()
