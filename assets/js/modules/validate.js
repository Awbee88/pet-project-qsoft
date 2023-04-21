import validate from "jquery-validation";

const ELEMENTS_SELECTOR = {
    validation: "[data-validation]",
};

function valid() {

    $.extend($.validator.messages, {
        required: "Обязательное поле",
        email: "E-Mail указан не верно",
    });

    $.validator.setDefaults({
        errorClass: "input--err",
        errorElement: "span",
        validClass: "input--valid",

        errorPlacement: function (error, element) {
            error.addClass("input--text-err");

            error.appendTo(element.closest(".form__field"));
        }
    });

    $.validator.addClassRules("js-required", {
        required: true,
    });

    $.validator.addClassRules("js-email", {
        email: true,
    });

    $(ELEMENTS_SELECTOR.validation).validate();
}

export default valid;