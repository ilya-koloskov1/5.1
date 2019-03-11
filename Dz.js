var arr= [1.1,1.2,1.3,
	      2.1,2.2,2.3,
          3.1,3.2,3.3] ;
var a;
var b;
alert('откройте консоль, введите "gameStart()"');
function gameStart(){
	console.log('- - -' + "\n" + "- x -" + "\n" + "- - -");
	console.log('1.1 1.2 1.3' + "\n" + '2.1  x  2.3' +'\n' + '3.1 3.2 3.3');
	play();
	function play(){
		for(var i = 1; i <= arr.length/2; i++){
			nol();
			function nol(){
			switch(a,b){
				case a = prompt('Ходят нолики'):
				break;
				case b = prompt('Ходят крестики'):if(a = 1.1 || 1.2 || 1.3 || 2.1 || 2.2 || 2.3 || 3.1 || 3.2 || 3.3);
				break;
			}
		   }
		}
	}
}