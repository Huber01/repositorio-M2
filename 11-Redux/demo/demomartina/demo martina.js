const redux = require ('redux');

const initialState = {
    owner: 'agus',
    todo: [],
    completed:[]
}


const reducer = (state = initialState, action) => {
    switch (action.type){
			case 'ADD':
				return ({
					...state,
					todo:[...state.todo, action.text]
				})
			case 'REMOVE':
				return({
					...state,
					todo: state.todo.filter((text,i) => i !== action.index), //me filtra por el indice. el segundo param de filter es el indice. le dice que se quede con todos los indices que no sea el indicado.
					completed: [...state.completed, state.todo[action.index]]
				})
			default:
				return {...state};

    }
}


const store = redux.createStore();

function addTodo (text){
    return({type: 'ADD', text}) 
}

function removeTodo(index){
	return ({type:'REMOVE', index})
}

store.subscribe(()=>{
	console.log(store.getState());
});

store.dispatch(addTodo('comprar pan'));
console.log(store.getState());