import Inputmask from "inputmask";

const ELEMENTS_SELECTOR = {
    im: "[data-inputmask]",
};

function mask() {

    Inputmask().mask($(ELEMENTS_SELECTOR.im));

}

export default mask;