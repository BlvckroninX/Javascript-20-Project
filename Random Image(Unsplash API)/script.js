const container = document.querySelector('.container')
const row = 4
const cols = 3
function randomNum(){
   return Math.floor(Math.random()*500)
}
for(let i = 0 ; i<row*cols;i++)
{
   const url =`https://source.unsplash.com/random/${randomNum()}`
   const imageEL = document.createElement('img')
   imageEL.src=url
   container.appendChild(imageEL)

}