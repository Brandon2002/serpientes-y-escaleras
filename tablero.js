import JugadorA from "./playerA.js";
import JugadorB from "./playerB.js";
import Dado from "./dado.js";


class Tablero{
    constructor(){
        this._tab = [101];
        for(let i = 0; i <= 100; i++){
            this._tab[i] = 0;

            this._tab[7] = 8;
            this._tab[12] = 5;
            this._tab[19] = 8;
            this._tab[21] = 12;
            this._tab[25] = 38;
            this._tab[32] = 20;
            this._tab[68] = 7;
            this._tab[88] = 4;

            this._tab[29] = -7;
            this._tab[40] = -3;
            this._tab[43] = -2;
            this._tab[58] = -13;
            this._tab[64] = -10;
            this._tab[74] = -4;
            this._tab[86] = -20;
        }
    
    }

   
    checkPo(pos){
        return this._tab[pos];
        
    }
   
}

class Principal{
    constructor(){
        this._pA = new JugadorA();
        this._pB = new JugadorB();
        this._dado = new Dado();
        this._tablero = new Tablero();

    }

  

    playersTurn(){
        while(this._pA._actual < 100 && this._pB._actual < 100){
            this._pA.play(this._dado, this._tablero);
            this._pB.play(this._dado, this._tablero);

            console.log('jA' + this._pA._actual + ' jB' + this._pB._actual);
        } 
        if(this._pA._actual >= 100){
            console.log('Eljugador A es el ganador')
        }else{
            console.log('El jugador B es el ganador');
        }


        
    }

    
    
    


    
}

let partida = new Principal();
partida.playersTurn();
