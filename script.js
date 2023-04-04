function convert() {
	const celsiusInput = document.getElementById("celsius");
	const fahrenheitInput = document.getElementById("fahrenheit");
	const resultElement = document.getElementById("result");

	let celsius = parseFloat(celsiusInput.value);
	let fahrenheit = parseFloat(fahrenheitInput.value);

	if (!isNaN(celsius)) {
		let fahrenheitResult = (celsius * 9/5) + 32;
		resultElement.innerHTML = `${celsius} Celsius = ${fahrenheitResult.toFixed(2)} Fahrenheit`;
	} else if (!isNaN(fahrenheit)) {
		let celsiusResult = (fahrenheit - 32) * 5/9;
		resultElement.innerHTML = `${fahrenheit} Fahrenheit = ${celsiusResult.toFixed(2)} Celsius`;
	} else {
		resultElement.innerHTML = "Please enter a valid temperature";
	}
}
