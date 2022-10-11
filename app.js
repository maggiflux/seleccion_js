const btnone = document.querySelector('.btn--one');
const btntwo = document.querySelector('.btn--two');
const btnthree = document.querySelector('.btn--three');
const btnfour = document.querySelector('.btn--four');

const card = document.querySelector('.card');
const cardanswer = document.querySelector('.card__answer');
const buttonback = document.createElement("button");

const correct = `<h2>¡Correcto! fué dicho por el Filósofo hispanorromano Lucio Anneo Séneca (Corduba, 4 a. C.-Roma, 65 d. C.).</h2>`
const incorrect = `<h2>¡Incorrecto! pero no desistas, prueba de nuevo.</h2>`

btntwo.addEventListener('click', function() {
    card.style.display = 'none';
    buttonback.style.display = ''
    cardanswer.style.display = '';
    cardanswer.innerHTML = correct ;
    cardanswer.classList.add('buttonback')
    
    buttonback.innerText = 'volver al principio';
    buttonback.type = "button";
    buttonback.className = 'btn--start';
    cardanswer.appendChild(buttonback);
    
    buttonback.addEventListener('click', function() {
        cardanswer.style.display = 'none';
        buttonback.style.display = 'none'
        card.style.display = '';
    })
});


function btnincorrect() {
    card.style.display = 'none';
    buttonback.style.display = ''
    cardanswer.style.display = '';
    cardanswer.innerHTML = incorrect ;
    cardanswer.classList.add('buttonback');
    
    buttonback.innerText = 'volver al principio';
    buttonback.type = "text";
    buttonback.className = 'btn--start';
    cardanswer.appendChild(buttonback);
    
    buttonback.addEventListener('click', function() {
        cardanswer.style.display = 'none';
        buttonback.style.display = 'none';
        card.style.display = '';
    })
};


btnone.addEventListener('click', btnincorrect);

btnthree.addEventListener('click', btnincorrect);
btnfour.addEventListener('click', btnincorrect);