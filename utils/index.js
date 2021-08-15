

module.exports = {
    functions: require("./others/functions"),
    logs: require("./others/logs"),
    vars: require("./others/vars"),
    mstohours: require('./others/mstohours'),
    mysql: require("./mysql/mysql"),
    schema: require("./mysql/schema"),
    quote: require("./others/quote"),
    embed: require("./extenders/embed"),
    attach: require("./extenders/attach"),
    canvas: require("./canvas/canvas"),
    splitText: require("./others/splitText"),
    imgDetect: require("./others/imgDetect"),
    translate: require("./others/translate"),
    googleTranslate: require("./api/googleTranslate"),
    defaltIcon: './img/png/wuzimu.jpg',
    reloadcmds: require('./others/reloadcmds'),
    progess: require('./others/progess'),
    langs: require('./languages/index.js'), 
};