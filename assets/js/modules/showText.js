const ELEMENTS_SELECTOR = {
    text: "[data-add-text]",
    btnText: "[data-description-btn-text]",
    btnIcon: "[data-description-icon]",
    btn: "[data-description-btn]",
};

export default function () {
    $(document).on('click', ELEMENTS_SELECTOR.btn, function () {

        const addText = $(this).prev(ELEMENTS_SELECTOR.text),
            btnText = $(this).find(ELEMENTS_SELECTOR.btnText),
            btnIcon = $(this).find(ELEMENTS_SELECTOR.btnIcon),
            mainText = btnText.text(),
            altText = btnText.data("description-btn-text");
            

        addText.slideToggle();
        btnText.text(altText).data("description-btn-text", mainText);
        btnIcon.toggleClass("description__icon--rotate");
        
    });
}
