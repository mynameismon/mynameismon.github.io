var yellow = "#EFFF11";
var green = "#00B200";
var red = "#FF2100";
var blue = "ADC9FF";
var lightgreen = "#CEFFED";
var lilac = "#ADC9FF";
var offwhite = "#f8f8ff";

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
};

const banner = "" +
"[[b;#008cff;]###########################################################################]\n"+
"[[b;#008cff;]#]                                                                         [[b;#008cff;]#]\n" +
"[[b;#008cff;]#][[b;#fbff00;]   __  __             _     _        _____ _             _           _   ][[b;#008cff;]#]\n" +
"[[b;#008cff;]#][[b;#fbff00;]  |  \\/  |           (_)   | |      / ____(_)           | |         | |  ][[b;#008cff;]#]\n" +
"[[b;#008cff;]#][[b;#fbff00;]  | \\  / | ___  _ __  _ ___| |__   | (___  _ _ __   __ _| |__   __ _| |  ][[b;#008cff;]#]\n" +
"[[b;#008cff;]#][[b;#fbff00;]  | |\\/| |/ _ \\| '_ \\| / __| '_ \\   \\___ \\| | '_ \\ / _` | '_ \\ / _` | |  ][[b;#008cff;]#]\n" +
"[[b;#008cff;]#][[b;#fbff00;]  | |  | | (_) | | | | \\__ \\ | | |  ____) | | | | | (_| | | | | (_| | |  ][[b;#008cff;]#]\n" +
"[[b;#008cff;]#][[b;#fbff00;]  |_|  |_|\\___/|_| |_|_|___/_| |_| |_____/|_|_| |_|\\__, |_| |_|\\__,_|_|  ][[b;#008cff;]#]\n" +
"[[b;#008cff;]#][[b;#fbff00;]                                                    __/ |                ][[b;#008cff;]#]\n" +
"[[b;#008cff;]#][[b;#fbff00;]                                                   |___/                 ][[b;#008cff;]#]\n" + 
"[[b;#008cff;]#][[b;#fbff00;]                                                                         ][[b;#008cff;]#]\n" +
"[[b;#008cff;]#] [[;#9CAAAA;] Welcome to " + commandText("Monish Singhal's", offwhite) + " personal website! Type " + commandText("help") + " to know more!  ][[b;#008cff;]#]\n"+ 
"[[b;#008cff;]#]                                                                         [[b;#008cff;]#]\n" +
"[[b;#008cff;]###########################################################################]\n";

const sourceText = "Source code for the website can be found " + link("https://github.com/mynameismon/mynameismon.github.io", "here");

const creditsText = "This website would not have been possible without the wonderful " + commandText("JQuery Terminal Package") + ", which can be found " + link("https://github.com/jcubic/jquery.terminal", "here");

const helpTextIntro =  "<br> <headings-text> What are the commands that you can use? </headings-text> <br> <br>";

const helpText = vertical() + commandText("help", green) + ":       Displays this help message.\n" +
                 vertical() + "\n" + 
                 vertical() + commandText("credits", yellow) + ":    Credits for the website.\n" +
                 vertical() + commandText("source", yellow) + ":     Source code for the website. \n";

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
            this.echo(helpTextIntro, {"raw": true});
            this.echo(helpText);
     }
    }, {

    // First message printed on opening the terminal
    greetings: banner,
    
    // If command is not found, it will execute this:
    onCommandNotFound: function(cmd, term) {
        var  error_strings = [errorText("Whoops! Looks like " + commandText(cmd, "white") + " is not found! \nTry running ") + commandText("help", "green") + errorText(", maybe?"),
                              errorText("Are you sure " + commandText(cmd, "white") + " is right? :( \nMaybe you can check the spelling or type ") + commandText("help", "green") + errorText(", if that helps.")];
        term.echo(error_strings[Math.floor(error_strings.length * Math.random())])
    }
    }) 
});

/** TODO:
    1. add help
    2. add special effects
    3. refer to https://nntoan.com and http://tnt2113.github.io/ for inspiration
 */