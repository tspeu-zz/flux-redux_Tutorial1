export class Dispatcher{
	constructor(){
		this._listeners = [];
	}

//toma una accion com argumento cuando lo llamas
/*  toma cada uno dentro delarray _listener
asumindo que cada uno es una fncion referida a su
listener  -llama a la funcion listener con la accion
como argumento
en este caso cada listener sera un funcion diferente
que varios componentes pasan al dispacher para 
invocar que sera invoca 
*/
	dispatch(action){
		this._listeners.forEach(listener =>
			listener(action));

	}
/*
toma un listener y agrega a la lista de listeners


*/
	register(listener){
		this._listeners.push(listener);
	}
}