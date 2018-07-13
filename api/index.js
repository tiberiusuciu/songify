var express = require('express');
var path = require('path');
var webpackConfig = require('../webpack.config.js');
var webpack = require('webpack');
var webpackDevMiddleWare = require('webpack-dev-middleware');
var webpackHotMiddleWare = require('webpack-hot-middleware');
var Game = require('./engine/Game.js');
var config = require('../config.js');
var fs = require('fs');

var app = express();

app.use(express.static(__dirname + '/public'));

// Socket.io
var server = require('http').createServer(app);
var io = require('socket.io')(server);

var compiler = webpack(webpackConfig);
app.use(webpackDevMiddleWare(compiler, {noInfo: true, publicPath: webpackConfig.output.publicPath}));
app.use(webpackHotMiddleWare(compiler));

app.use(express.static('./dist'));

app.use('/', function (req, res) {
    res.sendFile(path.resolve('app/index.html'));
});

var port = 3000;

server.listen(port, function(error) {
	if (error) throw error;
	console.log("Express server listening on port", port);
});

// Oracle section
var game = new Game();

var link = "";
io.on('connection', function (socket) {

	// Making new user here
	let user = game.addUser('unknown');
	socket.emit('action', {type: config.actionConst.NEW_USER, user});

	socket.on("action", function (action) {
		switch (action.type) {
			case config.actionConst.SUBMIT_LINK:
				link = action.link;

				var child = require('child_process').exec;
				var executablePath = __dirname + "/../lib/youtube-dl -x --audio-format 'mp3' --ffmpeg-location " + __dirname + "/../lib/ffmpeg " + link + ' -o ' + __dirname + '\'/public/music/%(title)s.%(ext)s\'';

				child(executablePath, function(err, stdout, stderr) {
          if (stderr) {
            console.log("THIS IS ERROR:", stderr)
          }
          console.log(stdout);
          var pattern = "(?!(.*/?m?u?s?i?c?/))(.*.mp3)";
					var filename = stdout.match(pattern)[0];
          io.emit('action', {type: config.actionConst.MUSIC_DOWNLOAD, meta: {remote: false}, filename: filename});
				});
		}
	})

	socket.on("disconnect", function () {
		console.log('A user has disconnected!');
	})
});
