$(function() {
    $('body').terminal({
            hello: function(what) {
            this.echo('Hello, ' + what + '. Welcome to this terminal.');
        }, credits: function() {
            this.echo("This website would not have been possible without the wonderful [[ub;;;;]JQuery Terminal Package], which can be found [[!;;;;https://github.com/jcubic/jquery.terminal]here]")
        }, source: function() {
            this.echo("Source code for the website can be found  [[!;;;;https://github.com/mynameismon/mynameismon]here].")
        }
    }, {
    greetings: "Welcome to my website! Clearly, there is a lot of work to do :D \n"
    })
});