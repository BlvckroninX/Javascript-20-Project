const celciusInput = document.getElementById('celcius')
const fahrenheitInput = document.getElementById('fahrenheit')
const KelvinInput = document.getElementById('kelvin')
const tempInput = document.querySelectorAll('input')
tempInput.forEach(input=>{
    input.addEventListener('input',(e)=>{
        // ตัวที่ป้อนเข้ามา
        let tempValue = parseInt(e.target.value)
        //ชื่อหน่วยอุณหภูมิ
        let inputName = e.target.name
        
        
        if(e.target.value === ''){
            celciusInput = null
            fahrenheitInput = null
            KelvinInput = null
            return
        }
        //กระบวนการแปลงอุณหภูมิ
        if(inputName==='celcius'){
            // c -> f
            let fahrenheit = temValue*1.8+32
            fahrenheitInput.value = fahrenheit.toFixed(2)

            // c->k
            let kelvin = tempValue+273
            KelvinInput.value= kelvin.toFixed(2)
        }
        else if(inputName==='fahrenheit'){
            //f->c
            let celcius =(tempValue-32)/1.8
            celciusInput.value = celcius.toFixed(2)
            //f->k
            let kelvin = (tempValue-32)/1.8+273
            KelvinInput.value = kelvin.toFixed(2)
        }
        else if(inputName==='kelvin'){
            //k->c
            let celcius =tempValue-273
            celciusInput.value = celcius.toFixed(2)
            //k->f
            let fahrenheit = (tempValue-273)*1.8+32
            fahrenheitInput.value = fahrenheit.toFixed(2)
        }
    })
})