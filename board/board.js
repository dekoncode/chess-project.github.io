generateBoard();

function generateBoard() {
    const board = document.querySelector('.grid');
    for (let r = 1; r < 9; r++) {
        for (let i = r%2 ? 1 : 0; i < (r%2 ? 9 : 8); i++) {
            const whitePile = document.createElement('div');
            whitePile.style.background = 'white';
            // whitePile.style.display = 'block';
            const blackPile = document.createElement('div');
            blackPile.style.background = 'black';
            // blackPile.style.display = 'block';
            blackPile.style.height = '100px';
           
            if(i%2) {
                board.appendChild(whitePile);
            } else {
                board.appendChild(blackPile);
            }        
        }
        
    }
    console.log('Board generated')
}
