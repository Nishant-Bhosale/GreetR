(function (global, $) {
	var Greetr = function (firstName, lastName, language) {
		return new Greetr.init(firstName, lastName, language);
	};

	Greetr.prototype = {};

	Greetr.init = function (firstName, lastName, language) {
		let self = this;

		self.firstName = firstName || "Your FirstName";
		self.lastName = lastName || "Your LastName";
		self.language = language || "en";
	};

	Greetr.init.prototype = Greetr.prototype;
})(window, jQuery);
