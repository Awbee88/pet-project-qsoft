const ELEMENTS_SELECTOR = {
    spoiler: "[data-spoiler]",
    button: "[data-spoiler-toggle]",
    content: "[data-spoiler-content]",
};


export default function () {
    $(document).on("click", ELEMENTS_SELECTOR.button, function () {
        const parent = $(this).closest(ELEMENTS_SELECTOR.spoiler),
            content = parent.find(ELEMENTS_SELECTOR.content);

        parent.toggleClass("spoiler__item--opened");
        content.slideToggle();

    });
}