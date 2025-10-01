import $ from "jquery";

$("body").on(
    "click",
    ".filter-input .input-close-filter-button",
    function (this: HTMLElement, _e: JQuery.Event) {
        const $input = $(this).prev(".input-element");
        $input.val("").trigger("input");
        $input.trigger("blur");
    },
);
