import Dado from './dado.js'
export default class JugadorA{
    constructor(){
        this._actual = 1;
        this._da = new Dado();
    }

    play(d, t) {
		let lan = d.tirarDado();
        this._actual= this._actual + lan;
        let caminar = t.checkPo(this._actual);

        this._actual = this._actual + caminar;


    }
}