const g = $G("Nishant", "Bhosale", "en");
console.log(g);

//Without chaining
// g.greet(true);
// g.log();

//With chaining
g.setLanguage("es").greet(false).setLanguage("en").log();
g.changeText("greeting", true);
