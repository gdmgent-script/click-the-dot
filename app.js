/**
 * Hide/unhide element
 * @argument {object} item
 */
const toggleHide = (item)=>{
    item.classList.toggle('hide');
}


/**
 * Get element random location
 * @return {array} [left ,top]
 */
 const getRandomLocation = (item)=>{
    //get canvas width and height minus item-size
     const cw = window.innerWidth - item.offsetWidth;
     const ch = window.innerHeight - item.offsetHeight;
     return [Math.floor(Math.random() * cw), Math.floor(Math.random() * ch)];
 }
 
/**
 * Set element random location
 * @argument {object} item
 */
const setReandomLocation = (item) => {
    //get random location within viewport
    const dotLocation = getRandomLocation(item);
    item.style.left = dotLocation[0]+'px';
    item.style.top = dotLocation[1]+'px';
 }
 

/**
 * Initialize dot
 * 
 */
const initDot = () => {
    //init counter
    let counter = 0;
    let counterSpan = document.getElementById('score-span');
    //initdot
    const dot = document.createElement('div');
    dot.classList.add('hideandseek');
    setReandomLocation(dot);
    document.body.appendChild(dot);

    //hide and unhide
    setInterval(() => { toggleHide(dot) }, 1000);
    //set location
    setInterval(() => { setReandomLocation(dot) }, 1000);
    
    dot.addEventListener('click', () => {
        counter++;
        counterSpan.innerText = counter;
    })
}
initDot();
