import tippy from 'tippy.js';

function tooltips() {

    const tips = $("[data-tippy]");

    tips.each(function (i, el) {

        let type = $(el).data("tippy"),
            params = {
                duration: 100,
            },
            paramsCustom = {};

        if (type === "star") {
            paramsCustom = {
                arrow: false,
                theme: "light",
            }
        }

        params = $.extend(params, paramsCustom);

        tippy(el, params);
    });
}

export default tooltips;