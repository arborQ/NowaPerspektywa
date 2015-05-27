var Application;
(function (Application) {
    $(function () {
        $(".cd-main-nav").on("click", function (event) {
            alert("ds");
            if ($(event.target).is(".cd-main-nav")) {
                $(self).children("ul").toggleClass("is-visible");
            }
        });
    });
})(Application || (Application = {}));
