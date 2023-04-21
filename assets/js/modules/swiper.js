import Swiper from "swiper";

function swipers() {
    const carousel = $("[data-carousel]");

    carousel.each(function (i, el) {
        let obj = $(el),
            type = obj.data("carousel"),
            container = $("[data-carousel-container]", obj),
            prev = $("[data-carousel-prev]", obj),
            next = $("[data-carousel-next]", obj),
            pagination = $("[data-carousel-pagination]", obj),

            params = {
                navigation: {
                    nextEl: next,
                    prevEl: prev,
                },
                followFinger: false,
                loop: true,
            },
            paramsCustom = {};

        if (type === "infinity") {
            paramsCustom = {
                slidesPerView: "auto",
                centeredSlides: true,
                breakpoints: {
                    375: {
                        spaceBetween: 5,
                    },
                    768: {
                        spaceBetween: 20,
                    },
                    1440: {
                        spaceBetween: 30,
                    },
                },
            };
        } else if (type === "pagination") {
            paramsCustom = {
                slidesPerView: 4,
                centerInsufficientSlides: true,
                breakpoints: {
                    375: {
                        spaceBetween: 30,
                    },
                    1440: {
                        spaceBetween: 32,
                    },
                },
                pagination: {
                    el: pagination,
                    clickable: true,
                },
            };
        }

        params = $.extend(params, paramsCustom);

        let instance = new Swiper(container, params);
    });
}

export default swipers;