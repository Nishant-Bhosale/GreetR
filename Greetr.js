(function (global, $) {
	var Greetr = function (firstName, lastName, language) {
		return new Greetr.init(firstName, lastName, language);
	};

	Greetr.prototype = {
		getFullName: function () {
			console.log(this.firstName);
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
