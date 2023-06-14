import './style.css';

function displayContact(){

    const content = document.querySelector('#content');
    content.classList.remove('content');
    content.innerHTML=`
    <div class='menu-page'>
        <div>Contact Us</div>
        <div class='menu'>
            <div class='phone'>
                <img class='icon' src=imgs/phone.svg>
                <div>57 321 4654905</div>
            </div>
            <div class='phone'>
                <img class='icon' src=imgs/ping.svg>
                <div>Cra 7 #70-24, Bogota 110221 Colombia</div>
            </div>
            <div class='phone'>
                <img class='icon' src=imgs/clock.svg>
                <div>11:30 AM - 9:00 PM</div>
            </div>
            
            <form>
                <div style='font-size:1.8vh;'>Message Us</div>
                <div class='text-ins'>
                   
                    <input type="text" placeholder='Enter your Name'>
                    
                    <input type="email" placeholder='Enter Email'>
                    
                    <input type="text" id='message' placeholder='Write Message'>
                    <button>Send<button>
                </div>
                
            </form>
            <p align='center'>
                <iframe class='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.6703923613136!2d-74.05868152500898!3d4.652742995322127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a424bc107b5%3A0xb152a5554d1ebb05!2sCra.%207%20%2370-24%2C%20Localidad%20de%20Chapinero%2C%20Bogot%C3%A1%2C%20Colombia!5e0!3m2!1sen!2sca!4v1686703871834!5m2!1sen!2sca" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </p>
        </div>
    </div>
    `
}

export {displayContact};