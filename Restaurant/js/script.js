$(function () { // Same as document.addEventListener("DOMContentLoaded"...

    // Same as document.querySelector("#navbarToggle").addEventListener("blur",...
    $("#navbarToggle").blur(function (event) {
        var screenWidth = window.innerWidth;
        if (screenWidth < 768) {
            $("#navbarSupportedContent").collapse('hide');
        }
    });

    // In Firefox and Safari, the click event doesn't retain the focus
    // on the clicked button. Therefore, the blur event will not fire on
    // user clicking somewhere else in the page and the blur event handler
    // which is set up above will not be called.
    // Refer to issue #28 in the repo.
    // Solution: force focus on the element that the click event fired on
    $("#navbarToggle").click(function (event) {
        $(event.target).focus();
    });
});
(function (global) {
    var dc = {};
    var homeHtml = "snippets/home-snippet.html";
    var insertHtml = function (selector, html) {
        var element = document.querySelector(selector);
        element.insertHtml = html;
    }
    var loading = function (selector) {
        var html = "<img src='images/ajax-loader.gif' width='40px' height='40px' class='rounded mx-auto d-block'>";
        insertHtml(selector, html)
    }
    document.addEventListener("DOMContentLoaded", function (event) {
        loading("#main-content");
        $ajaxUtils.sendGetRequest(
            homeHtml,
            function (responseText) {
                document.querySelector("#main-content")
                    .innerHTML = responseText;
            },
            false);
    })
})(window);