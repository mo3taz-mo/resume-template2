/*global $ */
$(document).ready(function () {
    "use strict";
    $(function () {
        $(".profile-img").hover(function () {
            $(this).attr("src", "img/Moataz.png");
        }, function () {
            $(this).attr("src", "img/person.png");
        });
    });
});