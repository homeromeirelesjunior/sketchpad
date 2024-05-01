const container = document.querySelector('.container');
const button = document.querySelector('button');

const removeContainerContent = () => {
    while(container.lastChild) {
        container.removeChild(container.lastChild);
    }
}

const createSquares = (numberOfSquares) => {
    removeContainerContent();
    const changeBgColor = () => square.classList.toggle('yellow-bg');
    let square = document.createElement('div');
    
    for(let i = 0; i < numberOfSquares; i++) {
        square.classList.toggle('square');
        container.appendChild(square);
    }

    square.addEventListener('mouseover', changeBgColor)
    square.addEventListener('mouseout', changeBgColor)
}

button.addEventListener('click', () => {
    let numberOfSquares = prompt('Insert the number of squares you want:')
    
    createSquares(numberOfSquares);
})