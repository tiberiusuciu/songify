var express = require('express');
var path = require('path');
var webpackConfig = require('../webpack.config.js');
var webpack = require('webpack');
var webpackDevMiddleWare = require('webpack-dev-middleware');
var webpackHotMiddleWare = require('webpack-hot-middleware');
var Game = require('./engine/Game.js');
var config = require('../config.js');
var find = require('find');
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
				console.log("WE IN", action.link);
				link = action.link;

				var child = require('child_process').execFile;
				var executablePath = "C:\\Users\\Core\\Documents\\labs\\songify\\lib\\youtube-dl.exe";
				var parameters = ["-x --audio-format 'mp3' --ffmpeg-location 'C:\\Users\\Core\\Documents\\labs\\songify\\lib\\ffmpeg.exe'", link, '-o %(title)s.%(ext)s'];

				child(executablePath, parameters, function(err, data) {
					console.log("THIS IS ERROR:", err)
					//console.log("THIS IS DATA", data.toString());

					if (data) {
						var dataPath = data.match(/Destination:.*/i);
						//console.log(dataPath);
						var filename = dataPath[0].substring(14);
						console.log(filename);
					}
				});
				io.emit('action', {type: config.actionConst.MUSIC_DOWNLOAD, meta: {remote: false}});

		}
	})

	socket.on("disconnect", function () {
		console.log('A user has disconnected!');
	})
});
