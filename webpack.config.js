var path = require('path');
var mode = "production";//"development"
module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode:mode,
    entry: "./swipee.js",
    output: {
        filename:"swipee.js"
    }
}