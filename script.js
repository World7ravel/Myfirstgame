const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const gameboard = document.querySelector('.game-board');

const jump = () => {
     mario.classList.add('jump');

     setTimeout(() => {
        mario.classList.remove('jump');
     }, 500)
}

const loop = setInterval(() => {
    const pipePosition =  pipe.offsetLeft;
    const mairioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    

    if (pipePosition <= 150 && pipePosition > 0 && mairioPosition < 120 ) {
       pipe.style.animation = 'none';
       pipe.style.left = `${pipePosition}px`;

       mario.style.animation = 'none';
       mario.style.left = `${mairioPosition}px`;

       mario.src = '/assets/images/gameover.jpg';
       mario.style.width = '100%';
       mario.style.height = '100%';
       mario.style.left = '-0%';

       gameboard.style.border = 'none';
       
       clearInterval(loop);

    }

}, 10);

document.addEventListener('keydown', jump);