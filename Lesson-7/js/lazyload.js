const imagesToLoad = document.querySelectorAll("img[data-src]");

const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 50px 0px"
};

const loadImages = (images) => {
    images.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {image.removeAttribute('data-src');};
}
if('IntersectionObserver'in window){
    const imgObserver = new IntersectionObserver((items, observer) => {
        items.forEach((items) =>{

        });
    }, imgOptions);

    imagesToLoad.forEach((img)=>{
        imgObserver.observe(img);
    });
} else {

}