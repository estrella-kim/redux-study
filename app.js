/*
컨테이너란 ?
리덕스를 통해 스토어를 만들어야한다.
 */
const store = Redux.createStore(function(state, action) {
    console.log('reducer:',state);
    console.log('action:',action);
    if(action.type === 'PLUS_NUMBER') {
        return state+1;
    }
    else if(action.type === 'MINUS_NUMBER') {
        return state-1;
    }

    return state;
},0);
//createStore의 첫번재 인자는 reduce
console.log(store.getState());

store.dispatch({
    type : 'PLUS_NUMBER',

}) //객체를 넣어야한다. dispatch가 전달해주는 객체를 'action'이라 한다. 이 action은 type property를 가지고 있어야한다. dispatch를 실행할 때마다 reducer가 불린다.
console.log(store.getState());

store.dispatch({
    type : 'PLUS_NUMBER',

}) //객체를 넣어야한다. dispatch가 전달해주는 객체를 'action'이라 한다. 이 action은 type property를 가지고 있어야한다. dispatch를 실행할 때마다 reducer가 불린다.
console.log(store.getState());

store.dispatch({
    type : 'PLUS_NUMBER',

}) .
console.log(store.getState());
store.dispatch({
    type : 'MINUS_NUMBER',

})
console.log(store.getState());
