module.exports = function(express, app, server, settings, passport) {
	server.listen(settings.port)
	app.use(passport.initialize());
	app.use(passport.session());	
};
