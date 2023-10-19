const btn = document.querySelector(".btn")
const result = document.querySelector(".result")

btn.addEventListener("click",(e)=>{
    e.preventDefault()
    let weight = document.getElementById("weight").value
    let height = document.getElementById("height").value
   if(weight === "" || isNaN(weight)){
        return result.innerHTML = 'กรุณาป้อนน้ำหนัก'
   }
   else if(height === "" || isNaN(height)){
    return result.innerHTML = 'กรุณาป้อนสูง'
   }
   else{
       
        //แปลง cm = > m
        height = height/100 
         //เริ่มต้นคำนวนค่าดัชนีมวลกาย
        let bmi = (weight/Math.pow(height,2)).toFixed(2)
        // บอกเกณ
        if(bmi<18.5){
            showResult(bmi,"ผอมเกินไป","rgb(223, 164, 37)")
        }
        else if(bmi>=18.5&& bmi<=24.9){
            showResult(bmi,"ปกติ","green")
        }
        else if(bmi>=25 && bmi<=29.9){
            showResult(bmi,"อ้วน","orange")
        }
        else{
            showResult(bmi,"อ้วนเกินไป","red")
        }
    }

})
function showResult(bmi,message,color){
    result.style.backgroundColor = color
    return result.innerHTML=  `ผลลัพธ์ ${bmi} (${message})`
}