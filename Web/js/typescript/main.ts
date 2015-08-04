/// <reference path="jquery.d.ts" />
module Application{
	$(() => {
		$(".cd-main-nav").on("click", (event) => {
			if($(event.target).is(".cd-main-nav")) {
				$(this).children("ul").toggleClass("is-visible");
			}
		});
	});
}