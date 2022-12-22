const setBannerWidth = () => {
    const banner = document.getElementById('banner-img');
    banner.style.width = `${window.innerWidth}px`;
}


const main = () => {
    window.onresize = setBannerWidth;
}


main();