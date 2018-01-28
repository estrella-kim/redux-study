/*
컨테이너란 ?
리덕스를 통해 스토어를 만들어야한다.
 */
const ActionTypes = {
    PLUS_NUMBER : 'PLUS_NUMBER',
    MINUS_NUMBER : 'MINUS_NUMBER'
}
const store = Redux.createStore(function(state, action) { //state는 불변해ㅑ한다. 객체의 상태가 변하는 게 아니라 새로운 객체를 반화해야한다.
    console.log('reducer:',state);
    console.log('action:',action);
    if(action.type === ActionTypes.PLUS_NUMBER) {
        return {
            count : state.count +1
        };
    }
    else if(action.type === ActionTypes.MINUS_NUMBER) {
        return {
            count : state.count -1
        }
    }

    return state;
},{
    count : 0
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
/*document.getElementById('plus').addEventListener('click', ()=>{
    store.dispatch({
    type : ActionTypes.PLUS_NUMBER
    })
})

document.getElementById('minus').addEventListener('click', () => {
    store.dispatch({
    type : ActionTypes.MINUS_NUMBER
    })
})*/

store.subscribe(() => { //store를 바라보고 있다가 store의 state가 변경될 때마다 subscribe가 불린다. (구독하기)
    const state = store.getState();
    document.querySelector('#app')
        .innerHTML = state.count;

})
//createStore의 첫번재 인자는 reduce
console.log(store.getState());

store.dispatch({
    type : ActionTypes.PLUS_NUMBER,

}) //객체를 넣어야한다. dispatch가 전달해주는 객체를 'action'이라 한다. 이 action은 type property를 가지고 있어야한다. dispatch를 실행할 때마다 reducer가 불린다.
console.log(store.getState());

store.dispatch({
    type : ActionTypes.PLUS_NUMBER,

}) //객체를 넣어야한다. dispatch가 전달해주는 객체를 'action'이라 한다. 이 action은 type property를 가지고 있어야한다. dispatch를 실행할 때마다 reducer가 불린다.
console.log(store.getState());

store.dispatch({
    type : ActionTypes.PLUS_NUMBER,

})
console.log(store.getState());
store.dispatch({ //dispatch 는 보내기
    type : ActionTypes.MINUS_NUMBER,

})
console.log(store.getState());
//정의와 실행 파일이 따로 관리되어야한다.
function bindEvent(selector, actionType) {
    document.querySelector(selector).addEventListener('click', () =>{
        store.dispatch({
            type : actionType
        })
    })
}
bindEvent('#plus', ActionTypes.PLUS_NUMBER);
bindEvent('#minus', ActionTypes.MINUS_NUMBER);