/**
 * Created by Anno59 on 2018.09.01.
 */

/**
 * 点赞功能
 * */
class LikeButton{
    constructor(){
        this.stateLike = true;
    }

    render(){
        this.element = this.createDomFromString(`
            <button class='like-btn'>
            <span class='like-text'>${this.stateLike ? 'Like' : 'Dislike'}</span>
            <span>👍</span>
            </button>`);
        this.element.addEventListener('click',this.createDomEvent.bind(this));
        return this.element;
    }

    setState(state){
        this.stateLike = state;
        const oldElement = this.element;
        const element = this.render();
        this.onStateChange(element,oldElement);
    }

    createDomEvent(){
        console.log('click');
    }
    createDomFromString(domString){
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = domString;
        return tempDiv;
    }
}

const wrapper = document.querySelector('.wrapper');
const likeButton1 = new LikeButton();
const likeButton2 = new LikeButton();
wrapper.appendChild(likeButton1.render());
wrapper.appendChild(likeButton2.render());
likeButton1.onStateChange = (newElement,oldElement) => {
    wrapper.insertBefore(newElement,oldElement);
    wrapper.removeChild(oldElement);
};
likeButton2.onStateChange = (newElement,oldElement) => {
    wrapper.insertBefore(newElement,oldElement);
    wrapper.removeChild(oldElement);
};


