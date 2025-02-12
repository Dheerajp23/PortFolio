const body = document.querySelector('.body');
const change = document.querySelector('.btnMode');
const mode = document.querySelector('.mode');


change.addEventListener('click', function(){
    body.classList.toggle('dark');
    if(body.classList.contains('dark')){
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');
        change.style.backgroundColor = 'white';
        mode.style.color = 'orange';
    }else{
        mode.classList.remove('fa-sun')
        mode.classList.add('fa-moon')
        mode.style.color = 'white';
        change.style.backgroundColor = 'transparent'
    }
})
