function calculatorco2() {
	fuelInd = document.getElementById("fuel").options.selectedIndex;
	fuelPar = document.getElementById("fuel").options[fuelInd].value;
	q = eval(document.getElementById("q").value);
	
	measure = "т у.т.";
	koef = parseFloat(fuelPar.split('-')[1]);
	total = koef*q;
	
	document.getElementById("koefTxt").innerHTML = koef.toFixed(3);
	document.getElementById("measure").innerHTML = measure;
	document.getElementById("total").innerHTML = total.toFixed(3);
}
