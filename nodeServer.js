var socket 	 = require( 'socket.io' ),
 	express  = require( 'express' ),
	http 	 = require( 'http' ),
	path     = __dirname,
	connect  = require('connect'),
	settings = require('./config/settings'),
	passport = require('passport');


//Express
var app = express();
var server = module.exports = http.createServer( app );
require('./config/express')(express, app, server, settings, passport);

//Socket.io
require('./lib/sockets')(socket, server);

console.log('Running in ' + (process.env.NODE_ENV || 'development') + ' mode @ ' + settings.uri);