const productContainers = [...document.querySelectorAll('.item_container')];
const preBtn = [...document.querySelectorAll('.pre_button')];
const nxtBtn = [...document.querySelectorAll('.nxt_button')];


productContainers.forEach((item, i) => {
    let containerDimenstions = item.getBoundingClientRect();
    let containerWidth = containerDimenstions.width;

    preBtn[i].addEventListener ('click', () => {
        item.scrollLeft -= containerWidth;
    })

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

   
})