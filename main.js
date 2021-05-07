const tictactoe={

    run(){
        this.cache_DOM()
        this.bind()
        this.preassign()
    },

    cache_DOM(){
        turnboard = document.querySelector(".turnboard")
        player_turn = document.querySelector("#player")
        player_sign = document.querySelector("#sign")
        gameboard = document.querySelector(".tictactoeboard")
        boxes = document.querySelectorAll(".boxes")
        winnerText = document.querySelector("#winnerText")
        display = document.querySelector(".display")
        playagain = document.querySelector("#playagain")
    },

    preassign(){
        turn = false
    },

    bind(){
        for(var index = 0; index < boxes.length; index++){
            boxes[index].addEventListener("click", this.box_check)
            boxes[index].addEventListener("click", this.win_algorithm)
            boxes[index].addEventListener("click", this.draw)
        }
    },

    box_check(event){
        target = event.target
        if(!this.innerText){
            tictactoe.play_turn(target)
        }
    },

    play_turn(target){
        if(turn == false){
            player_turn.innerText = "Two"
            player_sign.innerText = "O"
            tictactoe.input(target)
        }else if(turn == true){
            player_turn.innerText = "One"
            player_sign.innerText = "X"
            tictactoe.input(target)
        }
    },

    input(target){
        if(turn == false){
            target.innerText  = "X"
            turn = true
        }else if(turn == true){
         target.innerText  = "O"
         turn = false
        }
    },

    win_algorithm(event){
        check = event.target.innerText
      if(boxes[0].innerText == check && boxes[1].innerText == check && boxes[2].innerText == check){
          tictactoe.winner(check)
      }else if(boxes[3].innerText == check && boxes[4].innerText == check && boxes[5].innerText == check){
        tictactoe.winner(check)
      }else if(boxes[6].innerText == check && boxes[7].innerText == check && boxes[8].innerText == check){
        tictactoe.winner(check)
      }

      else if(boxes[0].innerText == check && boxes[3].innerText == check && boxes[6].innerText == check){
        tictactoe.winner(check)
      }else if(boxes[1].innerText == check && boxes[4].innerText == check && boxes[7].innerText == check){
        tictactoe.winner(check)
      }else if(boxes[2].innerText == check && boxes[5].innerText == check && boxes[8].innerText == check){
        tictactoe.winner(check)
      }
      
      else if(boxes[0].innerText == check && boxes[4].innerText == check && boxes[8].innerText == check){
        tictactoe.winner(check)
      }else if(boxes[2].innerText == check && boxes[4].innerText == check && boxes[6].innerText == check){
        tictactoe.winner(check)
      }
    },

    winner(check){
        playagain.addEventListener("click", tictactoe.restart)
        for(var i = 0; i < boxes.length; i++){
            boxes[i].removeEventListener("click", tictactoe.box_check)
            boxes[i].removeEventListener("click", tictactoe.win_algorithm)
        }
        if(check == "X"){
            turn = false
            winnerText.innerText = "Player One win"
            display.style.zIndex = "1"
            display.style.opacity = "1"
            
        }else if (check == "O"){
            turn = false
            winnerText.innerText = "Player Two win"
            display.style.zIndex = "1"
            display.style.opacity = "1"
        }
    },

    draw(){
        playagain.addEventListener("click", tictactoe.restart)
        if(boxes[0].innerText && boxes[1].innerText && boxes[2].innerText){
            if(boxes[3].innerText && boxes[4].innerText && boxes[5].innerText){
                if(boxes[6].innerText && boxes[7].innerText && boxes[8].innerText){
                    turn = false
                    winnerText.innerText = "Draw"
                    display.style.zIndex = "1"
                    display.style.opacity = "1"
                }
            }
        }
    },

    restart(){
        display.style.zIndex = "-1"
        display.style.opacity = "0"
        player_turn.innerText = "One"
        player_sign.innerText = "X"
        turn = false
        for(var i = 0; i < boxes.length; i++){
            boxes[i].innerText = ""
        }
        for(var i = 0; i < boxes.length; i++){
            boxes[i].addEventListener("click", tictactoe.box_check)
            boxes[i].addEventListener("click", tictactoe.win_algorithm)
        }
    }

    
}

tictactoe.run()