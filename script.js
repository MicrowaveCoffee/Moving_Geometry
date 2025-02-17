const main = document.querySelector('.main');

const message = document.createElement('div')
document.body.prepend(message)
message.classList.add('message')
message.textContent = 'Let us Play'

const box = document.createElement('div');
main.append(box);
box.textContent = 'Click To Start The Game';
box.classList.add('box');

const game = {timer:0, start:null}

box.addEventListener('click', (e) => {
    box.textContent = ''
    box.style.display = 'none';
    game.timer = setTimeout(addBox, randomGenerate(2000));
    if(!game.start) {
        message.textContent = 'Watch for element and click it'
    }else {
        const cur = new Date().getTime();
        const dur = ((cur - game.start)/1000)
        message.textContent = `It took ${dur} seconds to click`;
    }
    
    

    
})

function addBox() {
    game.start = new Date().getTime();
    const outline = main.getBoundingClientRect();
    const dimension = [randomGenerate(50) + 20, randomGenerate(50) + 20]
    box.style.display = 'block';
    box.style.width = dimension[0] + 'px';
    box.style.height = dimension[1] + 'px';
    box.style.backgroundColor = '#' + Math.random().toString(16).substr(-6)
    box.style.left = randomGenerate(outline.width - dimension[0])  + 'px'
    box.style.top = randomGenerate(outline.height - dimension[1])  + 'px'
    box.style.borderRadius = randomGenerate(50) + '%'
}


function randomGenerate(max) {
    return Math.floor(Math.random() * max)
}
