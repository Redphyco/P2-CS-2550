/* your javascript is all included here */
function helloWorld(){
    //window.alert("Hello World");
}

const modal= document.getElementById('modal')
const me = document.getElementById('me')
const closebtn = document.querySelector('.close')

me.addEventListener('click', () => {
    modal.style.display = 'block'
});

closebtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', () => {
    if (event.target == modal){
        modal.style.display = 'none';
    }
});