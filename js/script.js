
document.addEventListener('DOMContentLoaded', () => {

    const cells = document.querySelectorAll('.cell'),
          endGameMessage = document.querySelector('.endgameMessage'),
          restartGameBtn = document.querySelector('.restartGame'),
          endGameMessageText = document.querySelector('.endgameMessageText'),
          overlay = document.querySelector('#overlay');

    const board = [
        '', '', '', 
        '', '', '', 
        '', '', ''
    ];

    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    function endGame() {
        // cells.forEach(cell => {
        //     cell.replaceWith(cell.cloneNode(true));
        // })
        overlay.style.display = 'block'
        endGameMessage.classList.add('show');
    }

    function startGame() {
        // const cells = document.querySelectorAll('.cell')
        
        
        let currentPlayer = 'X';
        let isGameEnded = false;
        let isDraw = 0
        
        cells.forEach((cell,index) => {
            
            cell.addEventListener('click', function game () {
                isDraw++;

                if(currentPlayer === 'X') {
    
                    cell.innerHTML = `
                    <img src="cross.png" class="cross"></img>
                    `;
                    board[index] = currentPlayer;
                    currentPlayer = 'O';
                    
                } else {
                    cell.innerHTML = `
                    <div class="zero"></div>
                    `;
                    board[index] = currentPlayer;                  
                    currentPlayer = 'X';
                    
                }
                console.log(board)
                
                for(let winningCells of winningConditions) {
                    
                    if((board[winningCells[0]] === board[winningCells[1]] && board[winningCells[1]] === board[winningCells[2]]) && board[winningCells[0]] !== '') {
                        
                        if(board[winningCells[0]] === 'X') {
                            endGameMessageText.innerHTML = "Player 'X' won";
                        } else {
                            endGameMessageText.innerHTML = "Player 'O' won";
                        }
                        // cells.forEach(cell => {
                            
                        // })
                        endGame();
                        isGameEnded = true;
                        // cells.forEach(cell => [
                        //     cell.removeEventListener('click', game)
                        // ])
                    } 

                    if(board[0] !== '' && board[1] !== '' && board[2] !== '' && board[3] !== '' && board[4] !== '' && board[5] !== '' && board[6] !== '' && board[7] !== '' && board[8] !== '' && isGameEnded !== true) {
                        
                        endGameMessageText.innerHTML = "It's draw";
                        endGame();
                        // cells.forEach(cell => [
                        //     cell.removeEventListener('click', game)
                        // ])
                    }   

                    // if(isDraw === 9) {
                    //     endGameMessageText.innerHTML = "It's draw";
                    //     endGame();
                    // }  

                }
                
            }, {once: true});
    
        });
    }

    startGame();
    

    restartGameBtn.addEventListener('click', () => {
        endGameMessage.classList.toggle('show')

        cells.forEach((cell,index) => {
           
            cell.innerHTML = '';
            board[index] = '';
        })
        overlay.style.display = 'none'
        startGame()

    })

    // when you click on the button addEventLisner may work more than one time on the same button
})