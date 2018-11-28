
  "use strict" 

class King {
   constructor(name, color, image, position, points, life) {
      this.name = name;
      this.color = color;
      this.image = image;
      this.position = position;
      this.points = points;
      this.life = life;
   }
}
class Queen {
   constructor(name, color, image, position, points, life) {
      this.name = name;
      this.color = color;
      this.image = image;
      this.position = position;
      this.points = points;
      this.life = life;
   }
}
class Bishop {
   constructor(name, color, image, position, points, life) {
      this.name = name;
      this.color = color;
      this.image = image;
      this.position = position;
      this.points = points;
      this.life = life;
   }
}
class Knight {
   constructor(name, color, image, position, points, life) {
      this.name = name;
      this.color = color;
      this.image = image;
      this.position = position;
      this.points = points;
      this.life = life;
   }
}
class Rook {
   constructor(name, color, image, position, points, life) {
      this.name = name;
      this.color = color;
      this.image = image;
      this.position = position;
      this.points = points;
      this.life = life;
   }
}
class Pawn {
   constructor(name, color, image, position, points, life) {
      this.name = name;
      this.color = color;
      this.image = image;
      this.position = position;
      this.points = points;
      this.life = life;
   }
}

const pieceConstant = {
   king: "king",
   queen: "queen",
   bishop: "bishop",
   knight: "knight",
   rook: "rook",
   pawn: "pawn"
};

const piecePoint = {
   king: " ",
   queen: "8",
   bishop: "3",
   knight: "3",
   rook: "5",
   pawn: "1"
};

const number_Of_Piece_Of_Each_Color = {
   king: 1,
   queen: 1,
   bishop: 2,
   knight: 2,
   rook: 2,
   pawn: 8
};

const pieceColor = {
   white: "white",
   black: "black"
};


//empty array to store the object
const kingArray = new Array();
const queenArray = new Array();
const bishopArray = new Array();
const knigtArray = new Array();
const rookArray = new Array();
const pawnArray = new Array();


// an anonymous function creating object
(function () {
   //creating object of king
   const whiteKing = new King(pieceConstant.king, pieceColor.white, "", "", piecePoint.king, "yes");
   kingArray.push(whiteKing);
   const blackKing = new King(pieceConstant.king, pieceColor.black, " ", " ", piecePoint.king, "yes");
   kingArray.push(blackKing);
   //creating object of queen
   const whiteQueen = new Queen(pieceConstant.queen, pieceColor.white, "", "", piecePoint.queen, "yes");
   queenArray.push(whiteQueen);
   const blackQueen = new Queen(pieceConstant.queen, pieceColor.black, "", "", piecePoint.queen, "yes");
   queenArray.push(blackQueen);

   for (let i = 1; i <= 4; i++) {

      //creating object of bishops
      const whiteBishop = new Bishop(pieceConstant.bishop,pieceColor.white, "","", piecePoint.bishop, "yes");
      bishopArray.push(whiteBishop);
      const blackBishop = new Bishop(pieceConstant.bishop, pieceColor.black, "", "",piecePoint.bishop, "yes");
      bishopArray.push(blackBishop);

      //creating object of knight
      const whiteKnight = new Knight(pieceConstant.knight, pieceColor.white, "", " ",piecePoint.knight, "yes");
      knigtArray.push(whiteKnight);
      const blackKnight = new Knight(pieceConstant.knight,pieceColor.black, "", " ",piecePoint.knight, "yes");
      knigtArray.push(blackKnight);

      // creating object of rook
      const whiteRook = new Rook(pieceConstant.rook, pieceColor.white, "","", piecePoint.rook, "yes");
      rookArray.push(whiteRook);
      const blackRook = new Rook(pieceConstant.rook,pieceColor.black, "", "", piecePoint.rook, "yes");
      rookArray.push(blackRook);

   }

   for (let i = 0; i < 16; i++) {
      //creates object of pawn     
      const whitePawn = new Pawn(pieceConstant.pawn, pieceColor.white, "", "",piecePoint.pawn, "yes");
      pawnArray.push(whitePawn);
      const blackPawn = new Pawn(pieceConstant.pawn,pieceColor.black, "", "", piecePoint.pawn, "yes");
      pawnArray.push(blackPawn);
   }
})();


//creating chess board and implementing it on screen using html.
function ChessBoard() {
   let table = document.getElementById("chessBoard");
   for (let i = 1; i <= 8; i++) {
      let row = table.insertRow();
      for (let j = 1; j <= 8; j++) {
         let cell = row.insertCell();
         let img = document.createElement("img");
         
         //inserting image of black pawns
         if (i == 2) {
            img.src = "Images/blackPawn.png";
          
            cell.appendChild(img);
            
         }
         //inserting image of white pawns
         else if (i == 7) {
            img.src = "Images/whitePawn.png";
            cell.appendChild(img);
         }
         //inserting image of white powerfull Pieces
         else if (i == 8) {
            // inserting image of white rook
            if (j == 1 || j == 8) {
               img.src = "Images/whiteRook.png";
               cell.appendChild(img);
            }
            //inserting image of white knight

            else if (j == 2 || j == 7) {
               img.src = "Images/whiteKnight.png";
               cell.appendChild(img);
            }
            //inserting image of white bishops
            else if (j == 3 || j == 6) {
               img.src = "Images/whiteBishop.png";
               cell.appendChild(img);
            }
            //inserting image of white queen
            else if (j == 4) {
               img.src = "Images/whiteQueen.png";
               cell.appendChild(img);
            }
            //inserting image of white king
            else if (j == 5) {
               img.src = "Images/whiteKing.png";
               cell.appendChild(img);
            }
         }

         //inserting image of black powerfull pieces
         else if (i == 1) {
            //inserting image of black rooks
            if (j == 1 || j == 8) {
               img.src = "Images/blackRook.png";
               cell.appendChild(img);
            }

            //inserting image of black knights
            else if (j == 2 || j == 7) {
               img.src = "Images/blackKnight.png";
               cell.appendChild(img);
            }
            //inserting image of black bishops
            else if (j == 3 || j == 6) {
               img.src = "Images/blackBishop.png";
               cell.appendChild(img);
            }
            //insrting image of black queen
            else if (j == 4) {
               img.src = "Images/blackQueen.png";
               cell.appendChild(img);
            }
            //inserting image of black king
            else if (j == 5) {
               img.src = "Images/blackKing.png";
               cell.appendChild(img);
            }
         }
      
      }
   }
}



