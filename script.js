$(function() {
    $('body').terminal({
        hello: function(what) {
            this.echo('Hello, ' + what + '. Welcome to this terminal.');
        }
    }, {
    greetings: "Welcome to my website! Clearly, there is a lot of work to do :D"
    })
});

