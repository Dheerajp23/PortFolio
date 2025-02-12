const body = document.querySelector('.body');
const change = document.querySelector('.btn');


change.addEventListener('click', function(){
    body.classList.toggle('dark');
    if(body.classList.contains('dark')){
        change.textContent = 'Light Mode';
    }else{
        change.textContent = 'Dark Mode';
    }
})
