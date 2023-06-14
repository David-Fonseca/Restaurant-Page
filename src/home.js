import './style.css';

function displayHome(){

    const content = document.querySelector('#content');
    content.classList.add('content');
    content.innerHTML=`
    <div class='slogan'>El Rey de Comida China en Bogota</div>
    <div class='addy'>
        <ul>
            <li class='street'>Cra 7#70-24, Bogota 110221 Colombia</li>
            <li class='hours'>11:30 AM - 9:00 PM</li>
        </ul>
    </div>
    `
}

export {displayHome};