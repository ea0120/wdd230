const images = document.querySelectorAll("[data-src]")

function preloudImage(img){
    const src = img.getAttribute("data-src");
    if(!src){
        return;
    }
    img.src = src;
}

const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px -500px 0px"
};

const imgObserver = new IntersectionObserver((enteries, imgObserver) => {
    enteries.forEach(entry => {
        if (!entry/inInerselecting) {
            return;
        } else{
            preloudImage(entry.target)
            imgObserver.unobserve(entry.target)
        }
    })

}, imgOptions);

images.forEach(images => {
    imgObserver.observe(image);
}

);