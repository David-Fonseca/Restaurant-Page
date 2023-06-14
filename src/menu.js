import './style.css';

function displayMenu(){

    const content = document.querySelector('#content');
    content.classList.remove('content');
    content.innerHTML=`
    <div class='menu-page'>
        <div>MENU</div>
        <div class='menu'>
            <div class='menu-item'>
                <img class='item-pic' src='imgs/1st.jpeg'>
                <div class='item-name'>Wantons Szechuan</div>
                <div class='item-description'>Tender meant in slippery wrappers seasoned with with a chili oil based sauce, Schuan spicy wonton combines great flavour and texture</div>
                <div class='item-price'>$10</div>
            </div>
            <div class='line'></div>
            <div class='menu-item'>
                <img class='item-pic' src='imgs/2nd.jpeg'>
                <div class='item-name'>Wanton Soup</div>
                <div class='item-description'>A simple, light, Chinese classic with pork-filled dumplings in seasoned chicken broth. Whether in soup or fried, wontons always add delicious, hearty flavor to any dish!</div>
                <div class='item-price'>$14</div>
            </div>
            <div class='line'></div>
            <div class='menu-item'>
                <img class='item-pic' src='imgs/3rd.jpeg'>
                <div class='item-name'>Fried Rice</div>
                <div class='item-description'>A combination of long grained rice, mixture of warm peas, carrots and onions with scrambled eggs mixed all together!</div>
                <div class='item-price'>$11</div>
            </div>
            <div class='line'></div>
            <div class='menu-item'>
                <img class='item-pic' src='imgs/4th.jpg'>
                <div class='item-name'>Pork Dumplings</div>
                <div class='item-description'>These tasty steamed pork dumplings make a perfect appetizer for a party or you can serve them as a main dish.  Serve with hoisin sauce, hot Chinese-style mustard, and toasted sesame seeds.</div>
                <div class='item-price'>$9</div>
            </div>
            
        </div>
    </div>
     `
}

export {displayMenu};
