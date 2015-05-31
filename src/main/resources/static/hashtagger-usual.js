$(function() {
    var currentWord = '';

    $('#textin').keypress(function(event) {
        var key = String.fromCharCode(event.keyCode || event.charCode);

        if (!key.match(/[\w]/) && currentWord) {
            var link = 'https://twitter.com/hashtag/' + currentWord;

            $('#textout').append($(' ')).append(
                $('<a/>').attr('href', link).text('#' + currentWord)
            );

            currentWord = '';
        } else if (key) {
            currentWord += key;
        }

        console.log('Current word: ' + currentWord);
    });
});
