/**
 * Created by Anno59 on 2018.09.01.
 */

/**
 * 点赞功能
 * */
class Component{
    constructor(props = {}){
        this.props = props;
    }

    _renderDOM(){
        this.element = this.createDomFromString(this.render());
        this.element.addEventListener('click',this.createDomEvent.bind(this));
        return this.element;
    }

    setState(state){
        this.stateLike = state;
        const oldElement = this.element;
        this._renderDOM();
        this.onStateChange(this.element,oldElement);
    }

    createDomFromString(domString){
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = domString;
        return tempDiv;
    }

}

class LikeButton extends Component{
    constructor(props){
        super(props);
        this.stateLike = true;
    }

    createDomEvent(){
        this.setState(!this.stateLike)
    }

    render(){
        return `
            <button class='like-btn' style="background-color:${this.props.bgColor}">
            <span class='like-text'>${this.stateLike ? 'Like' : 'Dislike'}</span>
            <span>👍</span>
            </button>`;
    }
}


const wrapper = document.querySelector('.wrapper');
const mount = (likeButton,wrapper) => {
    wrapper.appendChild(likeButton._renderDOM());
    likeButton.onStateChange = (newElement,oldElement) => {
        wrapper.insertBefore(newElement,oldElement);
        wrapper.removeChild(oldElement);
    };
};
mount(new LikeButton({bgColor:'red'}),wrapper);

React.createElement(
   'div',
    null,
    React.createElement(
        'h1',
        {className:'title'},
        'React小书'
    )
);



