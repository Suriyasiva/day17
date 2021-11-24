var pressedbox = "X";
        var board = document.createElement("div");
        board.style.height = "315px";
        board.style.width = "300px";
        board.style.display = "flex";
        board.style.flexDirection = "row";
        board.style.flexWrap = "wrap";
        board.style.marginTop = "200px";
        board.style.marginLeft = "550px";
        board.style.backgroundColor = "yellow";
        for (let index = 1; index <= 9; index++) {
            var box = document.createElement("div")
            box.style.height = "90px";
            box.style.width = "28%";
            box.setAttribute("id", index);
            box.style.backgroundColor = "red";
            box.style.textAlign = "center";
            box.style.fontSize = "50px";
            box.style.marginBottom = "2px";
            box.style.marginTop = "6px";
            box.style.marginRight = "9px";
            box.style.color = "yellow";
            box.style.marginLeft = "7px";
            box.addEventListener("click", function () {
               
                if(this.innerText.length==0){
                if(pressedbox=="X"){
                    this.innerText="X";
                    pressedbox="O";
                }
                else{this.innerText="O";
                    pressedbox="X";

                }
                }
                   
               
            
            })
              
                
            board.appendChild(box);

        }
        document.body.appendChild(board)