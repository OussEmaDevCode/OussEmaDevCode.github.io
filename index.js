var Workspace = Backbone.Router.extend({
    routes: {
        "": "main",
        "me": "me",
        "projects": "projects",
        "social": "social"
    },
    main: function () {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".first").offset().top
        }, 1000);
    },
    me: function () {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".second").offset().top
        }, 1000);
    },
    projects: function () {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".third").offset().top
        }, 1000);
    },
    social: function () {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".fourth").offset().top
        }, 1000);
    }
});

document.addEventListener("DOMContentLoaded", function () {
    new PanelSnap();
    new Workspace();
    Backbone.history.start();
});

/*$([document.documentElement, document.body]).animate({
    scrollTop: $(".third").offset().top
}, 1000);*/

