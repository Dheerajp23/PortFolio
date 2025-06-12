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

const navbtn = document.querySelector('.nav-btn');
const show = document.querySelector('.show');

const links = document.querySelectorAll('.links');
const time=document.querySelector(".time");


change.addEventListener('click', function () {

    if (mode.classList.contains('fa-moon')) {

        mode.classList.remove('fa-moon')
        mode.classList.add('fa-sun')
    }
    else if (mode.classList.contains('fa-sun')) {

        mode.classList.remove('fa-sun')
        mode.classList.add('fa-moon')
    }
})


btnAll.addEventListener('click', function () {
    workbtn.forEach(btn => {
        btn.classList.remove('active-btn');
    })
    btnAll.classList.add('active-btn');
    workItem.forEach(item => {
        if (item.classList.contains('all')) {
            item.style.display = 'block';
        }
        else {
            item.style.display = 'none';
        }
    })
})

btnreact.addEventListener('click', function () {
    workbtn.forEach(btn => {
        btn.classList.remove('active-btn');
    })
    btnreact.classList.add('active-btn');
    workItem.forEach(item => {
        if (item.classList.contains('react')) {
            item.style.display = 'block';
        }
        else {
            item.style.display = 'none';
        }
    })
})
btnHtml.addEventListener('click', function () {
    workbtn.forEach(btn => {
        btn.classList.remove('active-btn');
    })
    btnHtml.classList.add('active-btn');
    workItem.forEach(item => {
        if (item.classList.contains('html')) {
            item.style.display = 'block';
        }
        else {
            item.style.display = 'none';
        }
    })
})
btnjs.addEventListener('click', function () {
    workbtn.forEach(btn => {
        btn.classList.remove('active-btn');
    })
    btnjs.classList.add('active-btn');
    workItem.forEach(item => {
        if (item.classList.contains('javascript')) {
            item.style.display = 'block';
        }
        else {
            item.style.display = 'none';
        }
    })
})


navbtn.addEventListener('click', function () {
    if (show.style.visibility === 'hidden' || show.style.visibility === '') {
        show.style.visibility = 'visible';
        show.style.opacity = '1';
        show.style.height = 'fit-content';
        navbtn.style.color = 'red'

    } else {
        show.style.visibility = 'hidden';
        show.style.opacity = '0';
        show.style.transition = 'all 0.5s ease-in-out';
        navbtn.style.color = 'white';
    }
})

links.forEach(function (link) {
    link.addEventListener('click', function () {
        show.style.visibility = 'hidden';
        show.style.opacity = '0';
        show.style.transition = 'all 0.5s ease-in-out';
        navbtn.style.color = 'white';
    })
})


document.querySelector('#contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = this.Username.value;
    const email= this.email.value;
    const number = this.number.value;
    const message = this.message.value;
    console.log(name);
    console.log(email);
    console.log(number);
    console.log(message);
  
    Toastify({
        text: "Thank you for reaching out to me, I will get back to you as soon as possible",
        duration: 5000,
        close: true,
        gravity: "top", 
        position: "right", 
        stopOnFocus: true, 
        style: {
            background: "linear-gradient(to right,rgb(98, 0, 255),rgb(0, 4, 255))",
        },
    }).showToast();
    document.querySelector('#contact-form').reset();
})


document.querySelector('.btn-cv').addEventListener('click', function () {
    const pdf = document.querySelector('#cvpdf');
    pdf.click()
    
    
    
    Toastify({
        text: "CV downloading initiated",
        duration: 5000,
        close: true,
        gravity: "top", 
        position: "right", 
        stopOnFocus: true, 
        style: {
            background: "linear-gradient(to right,rgb(98, 0, 255),rgb(0, 4, 255))",
        },
    }).showToast();

})

document.querySelector('.btn-hire').addEventListener('click', function (e){
    document.querySelector('#contact').scrollIntoView();
})

window.addEventListener('scroll',function(){
    if(window.scrollY > 80){
        document.querySelector('header').style.borderBottom = '1px solid #ccc';
        document.querySelector('header').style.margin = '0 auto';
        document.querySelector('header').style.maxWidth = '100%';
        document.querySelector('header').style.lineHeight = '30px';
        document.querySelector('header').style.backgroundColor = '#11001f';
        document.querySelector('header').style.transition = 'all 0.5s ease-in-out';
        document.querySelector('.home-ul').style.border = 'none';

    }
    else if(window.scrollY < 80){
        document.querySelector('header').style.backgroundColor = 'transparent';
        document.querySelector('header').style.lineHeight = '2.5rem';
        document.querySelector('header').style.borderBottom = 'none';
        document.querySelector('header').style.maxWidth = '1440px';
        document.querySelector('.home-ul').style.border = ' 1px solid #1f1c1c';
        document.querySelector('.home-ul').style.transition = 'all 0.3s ease-in';
        document.querySelector('.home-ul').style.borderTop = '2px solid #b10e45';
        document.querySelector('.home-ul').style.borderBottom = '2px solid rgb(12, 12, 182)';

    }
})


setTimeout(() => {
 let date = new Date().toDateString();
 time.innerHTML = `${date} ,All rights Reserved`;
 console.log("time");
 
}, 2000);