const videopopup = document.querySelector('.videopopup')
const closediv = document.querySelector('.closediv')
const playvideobuttons = document.querySelectorAll('.playvideobutton')
closediv.addEventListener('click' , (e) => {
    videopopup.classList.remove('active')
})
for(let i = 0 ;  i < playvideobuttons.length;i++){
    playvideobuttons[i].addEventListener('click' , (e) => {
        videopopup.classList.add('active')
    })
}
