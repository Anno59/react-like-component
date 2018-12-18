function createStore(state, changeState){
    const handle = [];

    const subscribe = (callback) => {
        handle.push(callback);
    };

    const dispatch = (state, action) => {
        state = changeState(state, action);
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

function changeState(state, action){
    switch(action.type){
        case 'UPDATE_TITLE_TEXT':
            // appState.title.text = action.text;
            return {
                ...state,
                title:{
                    ...state.title,
                    text : action.text
                }
            };
        case 'UPDATE_TITLE_COLOR':
            // appState.title.color = action.color;
            return {
                ...state,
                title:{
                    ...state.title,
                    color : action.color
                }
            };
        default:
            return state;
    }
}

function renderApp (appState,oldAppState = {}) {
    if(appState === oldAppState)
        return
    console.log('App')
    renderTitle(appState.title, oldAppState.title);
    renderContent(appState.content, oldAppState.content);
}

function renderTitle (title, oldTitle = {}) {
    if(title === oldTitle)
        return
    console.log('title')
    const titleDOM = document.getElementById('title')
    titleDOM.innerHTML = title.text
    titleDOM.style.color = title.color
}

function renderContent (content, oldContent = {}) {
    if(content === oldContent)
        return
    console.log('content')
    const contentDOM = document.getElementById('content')
    contentDOM.innerHTML = content.text
    contentDOM.style.color = content.color
}

const App = createStore(appState, changeState);
App.subscribe(

    ()=>renderApp(App.getState())
);

renderApp(App.getState());
App.dispatch({ type: 'UPDATE_TITLE_TEXT', text: '《React.js》' }); // 修改标题文本
App.dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'blue' }); // 修改标题颜色
