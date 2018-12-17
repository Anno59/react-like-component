function createStore(state, changeState){
    const handle = [];

    const subscribe = (callback) => {
        handle.push(callback);
    };

    const dispatch = (action) => {
        changeState(action);
        handle.forEach(
            (callback) => callback()
        )
    };

    const getState = () => state;

    return {getState, subscribe, dispatch}
}

const appState = {
    title:{
        text:'React',
        color:'red',
    },
    content:{
        text:'React-content',
        color:'blue',
    }
}

function changeState(action){
    switch(action.type){
        case 'UPDATE_TITLE_TEXT':
            appState.title.text = action.text;
            break;
        case 'UPDATE_TITLE_COLOR':
            appState.title.color = action.color;
            break;
        default:
            break;
    }
}

function renderApp (appState) {
    console.log('App')
    renderTitle(appState.title);
    renderContent(appState.content);
}

function renderTitle (title) {
    console.log('title')
    const titleDOM = document.getElementById('title')
    titleDOM.innerHTML = title.text
    titleDOM.style.color = title.color
}

function renderContent (content) {
    console.log('content')
    const contentDOM = document.getElementById('content')
    contentDOM.innerHTML = content.text
    contentDOM.style.color = content.color
}

const App = createStore(appState, changeState);
App.subscribe(()=>renderApp(App.getState()));

renderApp(App.getState());
App.dispatch({ type: 'UPDATE_TITLE_TEXT', text: '《React.js》' }); // 修改标题文本
App.dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'red' }); // 修改标题颜色
