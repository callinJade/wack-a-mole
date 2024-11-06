const cursor = document.querySelector('.cursor')
const holes = [...document.querySelectorAll('.hole')]
const scoreEl = document.querySelector('.score span')
let score = 0
let speed = 2000

const sound = new Audio("https://cdn.glitch.global/43a7e515-45a2-4f53-b020-2b9bdfb58a74/smash.mp3?v=1719798103651")
sound.volume = 0.5

run() 

function run(){
  const i = Math.floor(Math.random() * holes.length)
  const hole = holes[i]
  let timer = null
  
  const img = document.createElement('img')
  img.classList.add('mole')
  img.src = "https://cdn.glitch.global/43a7e515-45a2-4f53-b020-2b9bdfb58a74/mole.png?v=1719697294028"
  
  img.addEventListener('click', () => {
    score++
    speed -= 100
    sound.play()
    scoreEl.textContent = score
    img.src = "https://cdn.glitch.global/43a7e515-45a2-4f53-b020-2b9bdfb58a74/mole-whacked.png?v=1719697299492"
    clearTimeout(timer)
    timer = setTimeout(() => {
    hole.removeChild(img)
    run()
  }, 250)
  })
  
  hole.appendChild(img)
  
  timer = setTimeout(() => {
    hole.removeChild(img)
    run()
  }, speed)
  
  if (score >= 15){
    alert("You Won!!")
    score = 0
    scoreEl.textContent = score
    speed = 2000
    return
  }
}



window.addEventListener('mousemove', e => {
  cursor.style.top = e.pageY + 'px'
  cursor.style.left = e.pageX + 'px'
})

window.addEventListener('mousedown', () => {
   cursor.classList.add('active')
})

window.addEventListener('mouseup', () => {
   cursor.classList.remove('active')
})