import './style.css';
import { displayHome } from './home';
import { displayMenu } from './menu';
import { displayContact } from './contact';
const body = document.querySelector('body');
const content = document.querySelector('#content');
const header = document.createElement('div');
header.classList.add('header');


header.innerHTML = `<div>TIO MAO</div>
<div class='choices'>
    <button class='home'>Home</button>
    <button class='menu-btn'>Menu</button>
    <button class='contact-btn'>Contact Us</button>
</div>`;
displayHome();
document.body.insertBefore(header,content);

const homeBtn = document.querySelector('.home');
homeBtn.addEventListener('click',()=>{
    content.innerHTML = '';
    displayHome();
});

const menuBtn = document.querySelector('.menu-btn');
menuBtn.addEventListener('click',() =>{
    content.innerHTML = '';
    displayMenu();
});

const contactBtn = document.querySelector('.contact-btn');
contactBtn.addEventListener('click',() =>{
    content.innerHTML = '';
    displayContact();
});
