export class Store {
	constructor(dispatcher){
		this._listener = [];
		this._state= this.getInitialState();
		dispatcher.register(this.__onDispatch.bind(this));	
	}

	__onDispatch(){
		throw new Error("subclase error en Store");
	
	}

	getInitialState(){
		throw new Error("subclas ese errro");
	}

	addListener(listener){
		this._listener.push(listener);
	}

	__emitChange(){
		this._listener.forEach(listener=>
			listener(this._state));
	}


}