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

	Greetr.prototype = {};

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
