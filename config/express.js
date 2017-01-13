module.exports = function(express, app, server, settings, passport) {
	server.listen(settings.port)
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(express.session({secret: settings.sessionSecret}));
	app.use(passport.initialize());
	app.use(passport.session());	
};