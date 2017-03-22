import {Dispatcher, Store} from './flux';

const controlPanelDispatcher = new Dispatcher();

document.getElementById("userNameInput").addEventListener('input',
	({target})=>{
		const name = target.value;
		console.log("Dispachin=",name);
		controlPanelDispatcher.dispatch(name);

	} )

class UserPrefStore extends Store{

	getInitialState(){
		return {
			userName :"pepe",
			fontSize :"small"
		}
	}

	__onDispatch(action){
		console.info("store recive dispachar",action);
		this.__emitChange();
	}

	fetUserPreferences(){
		return this._state;
	}

}
//inicializar la clase UserPrefStore
const userPrefStore = new UserPrefStore(controlPanelDispatcher);

userPrefStore.addListener((state)=>{
	console.info(`estado es`,state);
})

controlPanelDispatcher.register(action=>{
	console.info("recibe=",action);
});

document.forms.fontSizeForm.fontSize.forEach(element=>{
	element.addEventListener(`change`,({target})=>{
		controlPanelDispatcher.dispatch(`todo cammbia fuente`);

	})
})