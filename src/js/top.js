import $ from 'jquery';

// Cursor
$(function () {

    //カーソル要素の指定
    var cursor = $("#cursor");

    $(document).on("mousemove", function (e) {
        //カーソルの座標位置を取得
        var x = e.clientX;
        var y = e.clientY;

        cursor.css({
            "opacity": "1",
            "top": y + "px",
            "left": x + "px"
        });
    });

    $(".js-works-prev").on({
        'mouseenter': function () {
            $(document).on("mousemove", function () {
                cursor.addClass('-hover -prev');
            });
        },
        'mouseleave': function () {
            $(document).on("mousemove", function () {
                cursor.removeClass('-hover -prev');
            });
        }
    })

    $(".js-works-next").on({
        'mouseenter': function () {
            $(document).on("mousemove", function () {
                console.log('mouseenter next')
                cursor.addClass('-hover -next');
            });
        },
        'mouseleave': function () {
            $(document).on("mousemove", function () {
                cursor.removeClass('-hover -next');
            });
        }
    })

    $(".js-works-thumb").on({
        'mouseenter': function () {
            $(document).on("mousemove", function () {
                cursor.addClass('-hover -thumb');
                2
            });
        },
        'mouseleave': function () {
            $(document).on("mousemove", function () {
                cursor.removeClass('-hover -thumb');
            });
        }
    })
});