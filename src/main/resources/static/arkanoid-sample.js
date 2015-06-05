$(function () {
    var canvasLeft = $('#gamecanvas').offset().left + window.screenX;
    var canvasRight = canvasLeft + $('#gamecanvas').width();
    var canvasMid = (canvasRight + canvasLeft) / 2;

    var time = Bacon.fromPoll(50, function () {
        return new Bacon.Next(function () {
            return new Date();
        });
    });
    var mousePos = $('html')
        .asEventStream('mousemove')
        .map(function (event) {
            return {x: event.screenX, y: event.screenY};
        });

    var vausPos = mousePos.map(function (canvasLeft, canvasMid, canvasRight, coords) {
        return ((coords.x < canvasLeft || coords.x > (canvasRight - 40))
                ? (coords.x < canvasMid ? canvasLeft : (canvasRight - 40))
                : coords.x) - canvasLeft;
    }, canvasLeft, canvasMid, canvasRight).toProperty();

    var ballPos = time.scan({
        x: 200,
        y: 200,
        dx: Math.random() * 10,
        dy: Math.random() * 10
    }, function (prev, time) {

        function norm(low, high, value) {
            if (value < low)
                return low;
            else if (value > high)
                return high;
            else return value;
        }

        var dx = prev.x > 399 || prev.x < 1 ? -prev.dx : prev.dx;
        var dy = prev.y > 399 || prev.y < 1 ? -prev.dy : prev.dy;

        return {
            dx: dx,
            dy: dy,
            x: norm(0, 400, prev.x + dx),
            y: norm(0, 400, prev.y + dy)
        }
    }).combine(vausPos, function (ballPos, vausPos) {
        if (ballPos.y >= 380) {
            if (ballPos.x < vausPos + 40 && ballPos.x > vausPos) {
                console.log("Collision detected!");
            }
        }

        return ballPos;
    });

    vausPos.assign($('#vaus'), 'css', 'left');
    ballPos.onValue(function (pos) {
        var ball = $('#ball');
        ball.css('left', pos.x);
        ball.css('top', pos.y);
    });
});
