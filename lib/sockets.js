module.exports = function Server(socket, server) {
	var io = socket.listen(server);

	io.sockets.on( 'connection', function( client ) {
		console.log( "New client !" );
		
		client.on( 'message', function( data ) {
			console.log( 'Message received ' + data.name + ":" + data.message );
			
			//client.broadcast.emit( 'message', { name: data.name, message: data.message } );
			io.sockets.emit( 'message', { name: data.name, message: data.message } );
		});
	});

	return this;
};