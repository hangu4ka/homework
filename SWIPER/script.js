document.addEventListener('DOMContentLoaded', () => {
    let swiperInstance = null;
    const sliderEl = document.querySelector('.brands__slider');
    const listEl = document.querySelector('.brands__list');
    const toggleBtn = document.querySelector('.change-btn');

    const initSwiper = () => {
        const isMobile = window.innerWidth <= 430;

        if (isMobile && !swiperInstance) {
            swiperInstance = new Swiper('.brands__slider', {
            slidesPerView: 'auto',
            spaceBetween: 16,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            }
    });

            if (toggleBtn) toggleBtn.style.display = 'none';
            listEl.classList.remove('brands__list--collapsed');
    } else if (!isMobile) {
        if (swiperInstance) {
            swiperInstance.destroy(true, true);
            swiperInstance = null;
        }

        // if (!isMobile && swiperInstance) {
        // swiperInstance.destroy(true, true);
        // swiperInstance = null;

        // sliderEl.classList.remove('swiper-initialized');
        // listEl.removeAttribute('style');
        // Array.from(listEl.children).forEach((slide) => {
        //     slide.removeAttribute('style');
        // });


        if (toggleBtn) toggleBtn.style.display = '';
        listEl.classList.add('brands__list--collapsed');
    }
};


initSwiper();
window.addEventListener('resize', initSwiper);

if (toggleBtn) {
    toggleBtn.classList.add('brands__list--collapsed');

    toggleBtn.addEventListener('click', () => {
        const collapsed = listEl.classList.toggle('brands__list--collapsed');
        toggleBtn.textContent = collapsed ? 'Показать все' : 'Скрыть';
        toggleBtn.classList.toggle('change-btn--open', !collapsed);
    });
}
});