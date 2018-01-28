/*
컨테이너란 ?
리덕스를 통해 스토어를 만들어야한다.
 */
const ActionTypes = {
    PLUS_NUMBER : 'PLUS_NUMBER',
    MINUS_NUMBER : 'MINUS_NUMBER',
    OPEN_SIDEBAR : 'OPEN_SIDEBAR',
    CLOSE_SIDEBAR : 'CLOSE_SIDEBAR',
    TOGGLE_SIDEBAR : 'TOGGLE_SIDEBAR'
}
const initialCounterState = {
    number :0
}
const countReducer = function(state = initialCounterState, action) { //state는 불변해ㅑ한다. 객체의 상태가 변하는 게 아니라 새로운 객체를 반화해야한다.
    console.log('reducer:',state);
    console.log('action:',action);
    /*if(!state) { //state를 초기화해주어야한다.
        return {
            number :0
        }
    }*/
    if(action.type === ActionTypes.PLUS_NUMBER) {
        return {
            number : state.number +1
        };
    }
    else if(action.type === ActionTypes.MINUS_NUMBER) {
        return {
            number : state.number -1
        }
    }

    return state;
}
const initialSidebarState = {
    opened : false
}

const sidebarReducer = function(state = initialSidebarState, action) { //state는 불변해ㅑ한다. 객체의 상태가 변하는 게 아니라 새로운 객체를 반화해야한다.
    /*if(!state) {
        state = {
            opened: false //각각 초기화시켜주어야한다.
        }
        // state =initialSidebarState 와 같다.
    }*/
    switch(action.type) {
        case ActionTypes.OPEN_SIDEBAR : {
            return {
                opened : true
            };
        }
        case ActionTypes.CLOSE_SIDEBAR_SIDEBAR : {
            return {
                opened : false
            };
        }
        case ActionTypes.TOGGLE_SIDEBAR : {
            return {
                opened : !state.opened
            };
        }
        default: return state;
    }
}
const reducer = Redux.combineReducers({ //여러 개의 reducer를 하나의 reduceer로 반환시켜줌.
    count : countReducer,
    sidebar : sidebarReducer
})
/*const initialState = {
    count : 0,
    sidebar : false
};*/// 각각의 reducer가 초기화해주고 있기 때문에 제거
const store = Redux.createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); //chrome redux tools
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
        .innerHTML = state.count.number;

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