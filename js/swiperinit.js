var swiper=new Swiper(".blog-slider",{passiveListeners:!0,spaceBetween:30,effect:"fade",loop:!0,autoplay:{disableOnInteraction:!1,delay:3e3},mousewheel:!0,pagination:{el:".blog-slider__pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});swiper.el.onmouseenter=function(){swiper.autoplay.stop()},swiper.el.onmouseleave=function(){swiper.autoplay.start()};