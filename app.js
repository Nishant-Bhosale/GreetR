const button = document.getElementById("login");
const loginDiv = document.getElementById("lang");

button.addEventListener("click", function (e) {
	let g = $G("Nishant", "Bhosale", loginDiv.value);
	console.log(loginDiv.value);
	g.changeText("greeting", true);
});

//Without chaining
// g.greet(true);
// g.log();

//With chaining
// g.setLanguage("es").greet(false).setLanguage("en").setLanguage("es").log();
// g.changeText("greeting", true);
