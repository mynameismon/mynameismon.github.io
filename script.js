var yellow = "#EFFF11";
var green = "#00B200";
var red = "#FF2100";
var blue = "ADC9FF";
var lightgreen = "#CEFFED";
var lilac = "#ADC9FF";

var commandText = function (text, color = green) {
    return '[[gb;' + color + ';]' + text + ']'
};

var errorText = function (text) {
    return '[[;' + red + ';]' + text + ']'
};

var vertical = function () {
    return commandText('|', lightgreen) + "    "
};

var link = function (url, text, color = lilac) {
    return "[[!gbu;" + color + ";;;" + url + "]" + text + "]";
}

const sourceText = "Source code for the website can be found " + link("https://github.com/mynameismon/mynameismon.github.io", "here");

const creditsText = "This website would not have been possible without the wonderful " + commandText("JQuery Terminal Package") + ", which can be found " + link("https://github.com/jcubic/jquery.terminal", "here");

const helpText = "What are the commands that you can use? \n" +
                 vertical() + commandText("help", green) + ":       Displays this error message.\n" +
                 vertical() + "\n" + 
                 vertical() + commandText("credits", yellow) + ":    Credits for the website.\n" +
                 vertical() + commandText("source", yellow) + ":    Source code for the website.";

$(function() {
    $('body').terminal({
        // hello: function(what) {
        //     this.echo('Hello, ' + what + '. Welcome to this terminal.');
        // }, 
        credits: function() {
            this.echo(creditsText)
     }, source: function() {
            this.echo(sourceText)
     }, help: function() {
            this.echo(helpText)
     }
    }, {

    // First message printed on opening the terminal
    greetings: "Welcome to my website! Clearly, there is a lot of work to do :D \n",
    
    // If command is not found, it will execute this:
    onCommandNotFound: function(cmd, term) {
        var  error_strings = [errorText("Whoops! Looks like " + cmd + " is not found! \nTry running ") + commandText("help", "green") + errorText(", maybe?"),
                              errorText("Are you sure " + cmd + " is right? :( \nMaybe you can check the spelling or type ") + commandText("help", "green") + errorText(", if that helps.")];
        term.echo(error_strings[Math.floor(error_strings.length * Math.random())])
    }
    }) 
});

/** TODO:
    1. add help
    2. add special effects
    3. refer to https://nntoan.com and http://tnt2113.github.io/ for inspiration
 */