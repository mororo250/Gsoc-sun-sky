
function makeImageComparator(container) {
    var $container = $(container);
    var first = $container.children().first();
    var width = first.width();
    var height = first.height();
    $container.height(height);
    first.css({
        "background-color": "#000",
        position: "absolute",
        "z-index": 0,
    });
    $container
        .children()
        .eq(1)
        .replaceWith(function () {
            return $("<div>").css({
                position: "absolute",
                "z-index": 1,
                "background-color": "#000",
                "background-image": "url('" + $(this).attr("src") + "')",
                "background-position": "left",
                width: width / 2,
                height: height,
                "border-right": "1px solid #222",
            });
        });
    var handle = $container.children("div").eq(0);
    $container.children().mousemove(function (e) {
        var newWidth = e.pageX - $container.offset().left;
        handle.width(Math.min(newWidth, width));
    });
}
$(document).ready(function () {
    $("img").error(function () {
        $(this).width(500);
        $(this).height(375);
    });
    $(".popup-toggle").each(function () {
        $(this).click(function () {
            var popup = $(this).prevAll(".popup").first();
            popup.toggle();
            var imagesContainer = popup.find(".compare-images");
            if (!imagesContainer.data("initialized")) {
                var img = imagesContainer.find("img").first();
                var width = img.width();
                var height = img.height();
                popup.find(".window").css({
                    width: width,
                    height: height,
                    "margin-top": -height / 2,
                    "margin-left": -width / 2,
                });
                imagesContainer.each(function () {
                    makeImageComparator(this);
                });
                imagesContainer.data("initialized", true);
            }
            return false;
        });
    });
    $(".popup").click(function () {
        $(this).hide();
        return false;
    });
    $(document).keyup(function (e) {
        if (e.keyCode == 27) {
            $(".popup").hide();
            return false;
        }
    });
});
