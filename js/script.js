
document.addEventListener('DOMContentLoaded', () => {

    const cells = document.querySelectorAll('.cell'),
          endgameMessage = document.querySelector('.endgameMessage'),
          restartBtn = document.querySelector('.restartGame'),
          endgameMessageText = document.querySelector('.endgameMessageText');

    const board = [
        '', '', '', 
        '', '', '', 
        '', '', ''
    ];

    let currentPlayer = 'X';

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

    

    function startGame () {

        cells.forEach((cell,index) => {

            cell.addEventListener('click', () => {
                
                if(currentPlayer === 'X') {
    
                    cell.innerHTML = `
                    <img src="cross.png" class="cross"></img>
                    `
                    board[index] = currentPlayer
                    currentPlayer = 'O'
                    
                } else {
    
                    cell.innerHTML = `
                    <div class="zero"></div>
                    `
                    board[index] = currentPlayer
                    currentPlayer = 'X'
                    
                }
                
                for(let winningCells of winningConditions) {
                    
                    if(board[winningCells[0]] === board[winningCells[1]] && board[winningCells[0]] === board[winningCells[2]] && board[winningCells[0]] !== '') {
                        
                        if(board[winningCells[0]] === 'X') {
    
                            endgameMessageText.innerHTML = 'You won'
                            
                        } else {
    
                            endgameMessageText.innerHTML = 'You lost'
    
                        }
                        endgameMessage.classList.toggle('show')
                        
                        
                    } 
                    
                }
    
                if(board[0] !== '' && board[1] !== '' && board[2] !== '' && board[3] !== '' && board[4] !== '' && board[5] !== '' && board[6] !== '' && board[7] !== '' && board[8] !== '') {
                    endgameMessageText.innerHTML = "It's draw"
                    endgameMessage.classList.toggle('show')
                }
                
                
            }, {once: true})
    
        })
    }

    startGame()
    
    restartBtn.addEventListener('click', () => {
        endgameMessage.classList.toggle('show')
        

        cells.forEach((cell,index) => {
            cell.innerHTML = ''
            board[index] = ''
        })

        currentPlayer = 'X'
        startGame()
    })


    // draw works not full and last cell win don't works + when modal pop-up you can continue play the game
})