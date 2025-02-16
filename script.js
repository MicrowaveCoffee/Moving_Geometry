const main = document.querySelector('.main');

const box = document.createElement('div');
main.append(box);
box.textContent = 'Click To Start The Game';
box.classList.add('box');

const game = {timer:0, start:0}

box.addEventListener('click', (e) => {
    box.style.display = 'none'

    const dimension = [randomGenerate(50) + 20 + 'px', randomGenerate(50) + 20 + 'px']
    box.style.width = dimension[0];
    box.style.height = dimension[1];
    box.style.display = 'block';
})


function randomGenerate(max) {
    return Math.floor(Math.random() * max)
}
