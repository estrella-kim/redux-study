const initialCountReducerState = {
    number : 0
};

const ActionTypes = {
    PLUS_NUMBER : 'PLUS_NUMBER',
    MINUS_NUMBER : 'MINUS_NUMBER'
} //왜 대문자로 표기하나?
const conuntReducer = function(state = initialCountReducerState, action) { // 인자 안에서 정의해도 되나?
    switch( action.type) {
        case ActionTypes.PLUS_NUMBER : {
            return {
                number : state.number +1
            }
        }
        case ActionTypes.MINUS_NUMBER : {
            return {
                number : state.number -1
            }
        }
        default :
            return state;
    }
}

const reducer = Redux.combineReducers({
    count : conuntReducer
})
const store = Redux.createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
) //createStore( reducer,  enhancer

store.subscribe(() => {
    const state = store.getState();
document.querySelector('#app').innerHTML = state.count.number;
}) //subscribe(listener)


function bindEvent(selector, ActionType) {
    document.querySelector(selector)
        .addEventListener('click', () => {
        store.dispatch({
        type : ActionType
    }) // store의 dispatch(action: object)
});
}



bindEvent('#plus', ActionTypes.PLUS_NUMBER);
bindEvent('#minus', ActionTypes.MINUS_NUMBER);