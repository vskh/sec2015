$(function () {
    var keyStream = Rx.Observable.fromEvent($('#textin'), 'keypress')
                    .map(function (event) {
                        return String.fromCharCode(event.keyCode || event.charCode);
                    });

    var endOfWordStream = keyStream.filter(function (char) {
        return !String(char).match(/[\w]/);
    });

    var wordStream = keyStream.buffer(endOfWordStream);

    var uiUpdater = Rx.Observer.create(function (word) {
        word = word.join('').trim();
        var link = 'https://twitter.com/hashtag/' + word;

        $('#textout').append($(' ')).append(
            $('<a/>').attr('href', link).text('#' + word)
        );
    });

    wordStream.subscribe(uiUpdater);
});
