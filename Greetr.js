(function (global, $) {
	// 'new' an object is returned
	var Greetr = function (firstName, lastName, language) {
		return new Greetr.init(firstName, lastName, language);
	};

	// Languages that are supported and are not accessible directly
	const supportedLangs = ["en", "es"];

	//Informal Greetings
	let greetings = {
		en: "Hello",
		es: "Hola",
	};

	//Formal Greetings
	let formalGreetings = {
		en: "Greetings",
		es: "Saludos",
	};

	let logMessages = {
		en: "Logged In",
		es: "Inicio sesion",
	};

	//Prototype which contains all the functions that are accessible to every object that is created with the help of GreetR library
	Greetr.prototype = {
		//Returns the fullname of the person
		fullName: function () {
			return this.firstName + " " + this.lastName;
		},
		//Checks if the language passed is supported or not
		validateLang: function () {
			if (supportedLangs.indexOf(this.language) === -1) {
				throw new Error("Please enter one of two languages!");
			}
		},
		//Informal Greetings
		greeting: function () {
			return greetings[this.language] + " " + this.firstName + "!";
		},
		//Formal Greetings
		formalGreeting: function () {
			return formalGreetings[this.language] + ", " + this.fullName() + "!";
		},
		//Chainable method which logs a formal or informal greeting
		greet: function (formal) {
			let msg;

			formal ? (msg = this.formalGreeting()) : (msg = this.greeting());

			if (console) {
				console.log(msg);
			}
			return this;
		},
		//Simple log function / Chainable
		log: function () {
			if (console) {
				console.log(logMessages[this.language] + ": " + this.fullName());
			}
			return this;
		},
		// Changes language on the fly / Chainable
		setLanguage: function (lang) {
			this.language = lang;
			this.validateLang();
			return this;
		},
		// Changes the text in the heading tag using jQuery
		changeText: function (selector, formal) {
			if (!$) {
				throw new Error("jQuery not installed");
			}

			if (selector != "greeting") {
				throw new Error("InAppropriate Selector");
			}

			let msg;

			formal ? (msg = this.formalGreeting()) : (msg = this.greeting());

			document.getElementById(selector).innerText = msg;
			// $(selector).html(msg);

			return this;
		},
	};

	// The actual object is created here, allowing us to 'new' an object without calling new
	Greetr.init = function (firstName, lastName, language) {
		//set this to self
		let self = this;

		//Check if params are present and set default
		self.firstName = firstName || "Your FirstName";
		self.lastName = lastName || "Your LastName";
		self.language = language || "en";
	};

	//Change the reference of Greetr.init() objects prototype to custom prototype
	Greetr.init.prototype = Greetr.prototype;

	//Attach Greetr and $G to global object to reduce typing
	global.Greetr = Greetr;
	global.$G = Greetr;
})(window, jQuery);
