const body = document.querySelector('.body');
const change = document.querySelector('.btnMode');
const mode = document.querySelector('.mode');
const all = document.querySelectorAll('.all');
const react = document.querySelectorAll('.react');
const html = document.querySelectorAll('.html');
const javascript = document.querySelectorAll('.javascript');
const workItem = document.querySelectorAll('.work-item');
const btnAll = document.querySelector('.btn-all');
const btnHtml = document.querySelector('.btn-html');
const btnreact = document.querySelector('.btn-react');
const btnjs = document.querySelector('.btn-js');
const workbtn = document.querySelectorAll('.work-btn');

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


btnAll.addEventListener('click', function(){
    workbtn.forEach(btn => {
        btn.classList.remove('active-btn');
    })
    btnAll.classList.add('active-btn');
    workItem.forEach(item => {
        if(item.classList.contains('all')){
            item.style.display = 'block';}
        else{
            item.style.display = 'none';
        }
    })
})

btnreact.addEventListener('click', function(){
    workbtn.forEach(btn => {
        btn.classList.remove('active-btn');
    })
    btnreact.classList.add('active-btn');
    workItem.forEach(item => {
        if(item.classList.contains('react')){
            item.style.display = 'block';}
        else{
            item.style.display = 'none';
        }
    })
})
btnHtml.addEventListener('click', function(){
    workbtn.forEach(btn => {
        btn.classList.remove('active-btn');
    })
    btnHtml.classList.add('active-btn');
    workItem.forEach(item => {
        if(item.classList.contains('html')){
            item.style.display = 'block';}
        else{
            item.style.display = 'none';
        }
    })
})
btnjs.addEventListener('click', function(){
    workbtn.forEach(btn => {
        btn.classList.remove('active-btn');
    })
    btnjs.classList.add('active-btn');
   workItem.forEach(item => {
    if(item.classList.contains('javascript')){
        item.style.display = 'block';
   }
    else{
         item.style.display = 'none';
    }
    })
})