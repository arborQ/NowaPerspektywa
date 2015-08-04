var Application;
(function (Application) {
    $(function () {
        $(".cd-main-nav").on("click", function (event) {           
            if ($(event.target).is(".cd-main-nav")) {
                $(this).children("ul").toggleClass("is-visible");
            }
            event.stopPropagation();
        });
        $(window).on("hashchange", function(){
            $(".is-visible").removeClass("is-visible");
        });
       
    });
})(Application || (Application = {}));
