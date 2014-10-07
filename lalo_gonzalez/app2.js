/*
Tic Tac Toe Game
Steps:
1.- Add event listeners to all the table boxes,
	- every time someone clicks it adds an X or an O with an add inner HTML function. 
		.Should start witH X and continue with O. - So even clicks will be Xs and odd clicks will be Os.

*/


var spots = document.getElementsByClassName("spots"); // the 9 boxes where the game is played
var clicks = 0; // to count clicks even are X and odd O
var choicex = []; // to store choices where x was clicked
var choiceo= [];  // to store choices where O was clicked
for ( var i = 0; i<spots.length ; i++){
	spots[i].addEventListener("click" , function asign (){
			clicks++;		
			if(clicks % 2 !== 0){
			this.innerHTML = "<div class = \"markedx\" >" + "X" + "</div>"; // add X to the click
			choicex.push(this.id);
			this.setAttribute("class" , "clicked");
			if(choicex.length>1){
				if(((choicex[0]=== "0" || choicex[1] === "0" || choicex[2] === "0" || choicex[3] === "0" || choicex[4]==="0") && ( choicex[0] === "1" || choicex[1] === "1" || 
					choicex[2]==="1" || choicex[3] === "1" || choicex[4] === "1") && (choicex[0] === "2" || choicex[1]=== "2" || choicex[2] ==="2" || choicex[3] ==="2" || 
					choicex[4] === "2")) ||
					//second 
					((choicex[0]=== "3" || choicex[1] === "3" || choicex[2] === "3" || choicex[3] === "3" || choicex[4]==="3") && ( choicex[0] === "4" || choicex[1] === "4" || 
					choicex[2]==="4" || choicex[3] === "4" || choicex[4] === "4") && (choicex[0] === "5" || choicex[1]=== "5" || choicex[2] ==="5" || choicex[3] ==="5" || 
					choicex[4] === "5")) ||
					// third 
					((choicex[0]=== "6" || choicex[1] === "6" || choicex[2] === "6" || choicex[3] === "6" || choicex[4]==="6") && ( choicex[0] === "7" || choicex[1] === "7" || 
					choicex[2]==="7" || choicex[3] === "7" || choicex[4] === "7") && (choicex[0] === "8" || choicex[1]=== "8" || choicex[2] ==="8" || choicex[3] ==="8" || 
					choicex[4] === "8")) ||
					// fourth  
					((choicex[0]=== "2" || choicex[1] === "2" || choicex[2] === "2" || choicex[3] === "2" || choicex[4]==="4") && ( choicex[0] === "4" || choicex[1] === "4" || 
					choicex[2]==="4" || choicex[3] === "4" || choicex[4] === "4") && (choicex[0] === "6" || choicex[1]=== "6" || choicex[2] ==="6" || choicex[3] ==="6" || 
					choicex[4] === "6")) ||
					// fifth 
					((choicex[0]=== "0" || choicex[1] === "0" || choicex[2] === "0" || choicex[3] === "0" || choicex[4]==="0") && ( choicex[0] === "4" || choicex[1] === "4" || 
					choicex[2]==="4" || choicex[3] === "4" || choicex[4] === "4") && (choicex[0] === "8" || choicex[1]=== "8" || choicex[2] ==="8" || choicex[3] ==="8" || 
					choicex[4] === "8")) ||
					// sixth  
					((choicex[0]=== "0" || choicex[1] === "0" || choicex[2] === "0" || choicex[3] === "0" || choicex[4]==="0") && ( choicex[0] === "3" || choicex[1] === "3" || 
					choicex[2]==="3" || choicex[3] === "3" || choicex[4] === "3") && (choicex[0] === "6" || choicex[1]=== "6" || choicex[2] ==="6" || choicex[3] ==="6" || 
					choicex[4] === "6")) ||
					// seventh  
					((choicex[0]=== "1" || choicex[1] === "1" || choicex[2] === "1" || choicex[3] === "1" || choicex[4]==="1") && ( choicex[0] === "4" || choicex[1] === "4" || 
					choicex[2]==="4" || choicex[3] === "4" || choicex[4] === "4") && (choicex[0] === "7" || choicex[1]=== "7" || choicex[2] ==="7" || choicex[3] ==="7" || 
					choicex[4] === "7")) ||
					// eigth 
					((choicex[0]=== "2" || choicex[1] === "2" || choicex[2] === "2" || choicex[3] === "2" || choicex[4]==="2") && ( choicex[0] === "5" || choicex[1] === "5" || 
					choicex[2]==="5" || choicex[3] === "5" || choicex[4] === "5") && (choicex[0] === "8" || choicex[1]=== "8" || choicex[2] ==="8" || choicex[3] ==="8" || 
					choicex[4] === "8"))
				){
					alert("X won");
					 
			}  ;
			this.removeEventListener("click" , asign, false);
		}
		} else {
			this.innerHTML = "<div class = \"markedo\">" + "O" + "</div>";
			choiceo.push(this.id);
			this.setAttribute("class" , "clicked2");
			if(choiceo.length>1){
				if(((choiceo[0]=== "0" || choiceo[1] === "0" || choiceo[2] === "0" || choiceo[3] === "0" || choiceo[4]==="0") && ( choiceo[0] === "1" || choiceo[1] === "1" || 
					choiceo[2]==="1" || choiceo[3] === "1" || choiceo[4] === "1") && (choiceo[0] === "2" || choiceo[1]=== "2" || choiceo[2] ==="2" || choiceo[3] ==="2" || 
					choiceo[4] === "2")) ||
					//second 
					((choiceo[0]=== "3" || choiceo[1] === "3" || choiceo[2] === "3" || choiceo[3] === "3" || choiceo[4]==="3") && ( choiceo[0] === "4" || choiceo[1] === "4" || 
					choiceo[2]==="4" || choiceo[3] === "4" || choiceo[4] === "4") && (choiceo[0] === "5" || choiceo[1]=== "5" || choiceo[2] ==="5" || choiceo[3] ==="5" || 
					choiceo[4] === "5")) ||
					// third 
					((choiceo[0]=== "6" || choiceo[1] === "6" || choiceo[2] === "6" || choiceo[3] === "6" || choiceo[4]==="6") && ( choiceo[0] === "7" || choiceo[1] === "7" || 
					choiceo[2]==="7" || choiceo[3] === "7" || choiceo[4] === "7") && (choiceo[0] === "8" || choiceo[1]=== "8" || choiceo[2] ==="8" || choiceo[3] ==="8" || 
					choiceo[4] === "8")) ||
					// fourth  
					((choiceo[0]=== "2" || choiceo[1] === "2" || choiceo[2] === "2" || choiceo[3] === "2" || choiceo[4]==="4") && ( choiceo[0] === "4" || choiceo[1] === "4" || 
					choiceo[2]==="4" || choiceo[3] === "4" || choiceo[4] === "4") && (choiceo[0] === "6" || choiceo[1]=== "6" || choiceo[2] ==="6" || choiceo[3] ==="6" || 
					choiceo[4] === "6")) ||
					// fifth 
					((choiceo[0]=== "0" || choiceo[1] === "0" || choiceo[2] === "0" || choiceo[3] === "0" || choiceo[4]==="0") && ( choiceo[0] === "4" || choiceo[1] === "4" || 
					choiceo[2]==="4" || choiceo[3] === "4" || choiceo[4] === "4") && (choiceo[0] === "8" || choiceo[1]=== "8" || choiceo[2] ==="8" || choiceo[3] ==="8" || 
					choiceo[4] === "8")) ||
					// sixth  
					((choiceo[0]=== "0" || choiceo[1] === "0" || choiceo[2] === "0" || choiceo[3] === "0" || choiceo[4]==="0") && ( choiceo[0] === "3" || choiceo[1] === "3" || 
					choiceo[2]==="3" || choiceo[3] === "3" || choiceo[4] === "3") && (choiceo[0] === "6" || choiceo[1]=== "6" || choiceo[2] ==="6" || choiceo[3] ==="6" || 
					choiceo[4] === "6")) ||
					// seventh  
					((choiceo[0]=== "1" || choiceo[1] === "1" || choiceo[2] === "1" || choiceo[3] === "1" || choiceo[4]==="1") && ( choiceo[0] === "4" || choiceo[1] === "4" || 
					choiceo[2]==="4" || choiceo[3] === "4" || choiceo[4] === "4") && (choiceo[0] === "7" || choiceo[1]=== "7" || choiceo[2] ==="7" || choiceo[3] ==="7" || 
					choiceo[4] === "7")) ||
					// eigth 
					((choiceo[0]=== "2" || choiceo[1] === "2" || choiceo[2] === "2" || choiceo[3] === "2" || choiceo[4]==="2") && ( choiceo[0] === "5" || choiceo[1] === "5" || 
					choiceo[2]==="5" || choiceo[3] === "5" || choiceo[4] === "5") && (choiceo[0] === "8" || choiceo[1]=== "8" || choiceo[2] ==="8" || choiceo[3] ==="8" || 
					choiceo[4] === "8"))
				){
					alert("O won");
					 
				} 
			}  ;
			this.removeEventListener("click" ,asign, false);
		}
		
	})
};





//2.- Find a way to remove clicks from clicked spots

//3.- Logic to see who won

/*
0 1 2
3 4 5
6 7 8 
2 4 6
0 4 8
0 3 6
1 4 7 
2 5 8
*/ 