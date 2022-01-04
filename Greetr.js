(function (global, $) {
	var Greetr = function (firstName, lastName, language) {
		return new Greetr.init(firstName, lastName, language);
	};

	const supportedLangs = ["en", "es"];

	let greetings = {
		en: "Hello",
		es: "Hola",
	};

	let formalGreetings = {
		en: "Greetings",
		es: "Saludos",
	};

	let logMessages = {
		en: "Logged In",
		es: "Inicio sesion",
	};

	Greetr.prototype = {
		fullName: function () {
			return this.firstName + " " + this.lastName;
		},
		validateLang: function () {
			if (supportedLangs.indexOf(this.language) === -1) {
				throw new Error("Please enter one of two languages!");
			}
		},
		greeting: function () {
			return greetings[this.language] + " " + this.firstName + "!";
		},
		formalGreeting: function () {
			return formalGreetings[this.language] + ", " + this.fullName() + "!";
		},
		greet: function (formal) {
			let msg;

			formal ? (msg = this.formalGreeting()) : (msg = this.greeting());

			if (console) {
				console.log(msg);
			}
			return this;
		},
		log: function () {
			if (console) {
				console.log(logMessages[this.language] + ": " + this.fullName());
			}
			return this;
		},
		setLanguage: function (lang) {
			this.language = lang;
			this.validateLang();
			return this;
		},
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

	Greetr.init = function (firstName, lastName, language) {
		let self = this;

		self.firstName = firstName || "Your FirstName";
		self.lastName = lastName || "Your LastName";
		self.language = language || "en";
	};

	Greetr.init.prototype = Greetr.prototype;

	global.Greetr = Greetr;
	global.$G = Greetr;
})(window, jQuery);
