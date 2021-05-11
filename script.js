var commandText = function (text, colour) {
    return '[[gb;' + color + ';]' + text + ']'
};

var errorText = function (text) {
    return '[[g;red;]' + text + ']'
};

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
    greetings: "Welcome to my website! Clearly, there is a lot of work to do :D \n",
    onCommandNotFound: function(cmd, term) {
        error_strings = [ errorText("Whoops! Looks like " + cmd + " is not found! Try running ") + commandText("help", "green") + errorText(", maybe?"),
                    errorText("Are you sure " + cmd + "is right? :( Maybe you can check the spelling or type ") + commandText("help", "green") + errorText(", if that helps.")]
        term.echo(error_strings[Math.floor(error_strings.length * Math.random())])
    }
    }) 
});

/** TODO:
    1. add help
    2. add special effects
    3. refer to https://nntoan.com and http://tnt2113.github.io/ for inspiration
 */