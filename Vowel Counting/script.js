const countEL = document.querySelector('.count')
const input = document.querySelector('input')
input.addEventListener('keyup',()=>{
    //เก็บค่าจาก input และ แปลงเป็นตัวพิมเล็ก
    let word = input.value.toLowerCase()
    //จำนวนตัวสระภาษาอังกฤษ
    let vowelCount = 0
    // loop เพื่อนับตัวอักษรออกมาที่ระตัว
    for(let i = 0 ; i<word.length;i++){
        let letter = word[i]
        //เงื่อนไขถ้า ตัวหนังสือตรงกับ สระจะมีค่าเป็นจริงและเพิ่มจำนวน vowelCount เรื่อยๆ
        if(letter.match(/([a,e,i,o,u])/)){
           vowelCount++ 
    }
    countEL.innerHTML =`${vowelCount}`
}
})