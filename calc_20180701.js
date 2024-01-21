var money;
var price;
var rub, kop;
var litera = sotny = desatky = edinicy = minus = "";
var k = 0, i, j;

N = ["", "один", "два", "три", "четыре", "пять", "шесть", "семь", "восемь", "девять",
"", "одиннадцать", "двенадцать", "тринадцать", "четырнадцать", "пятнадцать", "шестнадцать", "семнадцать", "восемнадцать", "девятнадцать",
"", "десять", "двадцать", "тридцать", "сорок", "пятьдесят", "шестьдесят", "семьдесят", "восемьдесят", "девяносто",
"", "сто", "двести", "триста", "четыреста", "пятьсот", "шестьсот", "семьсот", "восемьсот", "девятьсот",
"тысяч", "тысяча", "тысячи", "тысячи", "тысячи", "тысяч", "тысяч", "тысяч", "тысяч", "тысяч",
"миллионов","миллион","миллиона","миллиона", "миллиона", "миллионов", "миллионов", "миллионов", "миллионов", "миллионов",
"миллиардов", "миллиард", "миллиарда", "миллиарда", "миллиарда", "миллиардов", "миллиардов", "миллиардов", "миллиардов", "миллиардов"];

var M = new Array(10);
for (j = 0; j < 10; ++j)
  M[j] = new Array(N.length);

for (i = 0; i < N.length; i++)
  for (j = 0; j < 10; j++)
    M[j][i] = N[k++]

var R = new Array("рублей", "рубль", "рубля", "рубля", "рубля", "рублей", "рублей", "рублей", "рублей", "рублей");
var K = new Array("копеек", "копейка", "копейки", "копейки", "копейки", "копеек", "копеек", "копеек", "копеек", "копеек");

function num2str(money, target)
{
  rub = "", kop = "";
  money = money.replace(",", ".");

  if(isNaN(money)) {document.getElementById(target).innerHTML = "Не числовое значение"; return}
  if(money.substr(0, 1) == "-") {money = money.substr(1); minus = "минус "}
   else minus = "";
  money = Math.round(money * 100) / 100 + "";

  if(money.indexOf(".") != -1)
    {
     rub = money.substr(0, money.indexOf("."));
     kop = money.substr(money.indexOf(".") + 1);
     if(kop.length == 1) kop += "0";
    }
  else rub = money;

  if(rub.length > 12) {document.getElementById(target).innerHTML = "Слишком большое число"; return}

  ru = propis(price = rub, R);
  ko = propis(price = kop, K);
  ko != "" ? res = ru + " " + ko: res = ru;
  ru == "Ноль " + R[0] && ko != ""? res = ko: 0;
  kop == 0? res += " ноль " + K[0]: 0;
  document.getElementById(target).innerHTML = (minus + res).substr(0,1).toUpperCase() + (minus + res).substr(1);
}

function propis(price, D)
{
  litera = "";
  for(i = 0; i < price.length; i += 3)
    {
     sotny = desatky = edinicy = "";
     if(n(i + 2, 2) > 10 && n(i + 2, 2) < 20)
       {
        edinicy = " " + M[n(i + 1, 1)][1] + " " + M[0][i / 3 + 3];
        i == 0? edinicy += D[0]: 0;
       }
     else
       {
        edinicy = M[n(i + 1, 1)][0];
        (edinicy == "один" && (i == 3 || D == K))? edinicy = "одна": 0;
        (edinicy == "два"  && (i == 3 || D == K))? edinicy = "две" : 0;
        i == 0 && edinicy != ""? 0: edinicy += " " + M[n(i + 1, 1)][i / 3 + 3];
        edinicy == " "? edinicy = "": (edinicy == " " + M[n(i + 1, 1)][i / 3 + 3])? 0: edinicy = " " + edinicy;
        i == 0? edinicy += " " + D[n(i + 1, 1)]: 0;
        (desatky = M[n(i + 2, 1)][2]) != ""? desatky = " " + desatky: 0;
       }
     (sotny = M[n(i + 3, 1)][3]) != ""? sotny = " " + sotny: 0;
     if(price.substr(price.length - i - 3, 3) == "000" && edinicy == " " + M[0][i / 3 + 3]) edinicy = "";
     litera = sotny + desatky + edinicy + litera;
    }
   if(litera == " " + R[0]) return "ноль" + litera;
     else return litera.substr(1);
}

function n(start,len)
{
  if(start > price.length) return 0;
    else return Number(price.substr(price.length - start, len));
}

function moneyFormat(n) {
	var s = String(n);
	var k = s.indexOf('.');
	if (k < 0) {
		k = s.length;
		s += '.00';
	}
	else {
		s += '00';
	}
	s = s.substr(0, k + 3);
	for (var i = k - 3, j = n < 0 ? 1 : 0; i > j; i -= 3) s = s.substr(0, i) + ' ' + s.substr(i);
	return s;
}

function calculator() {
	nz = eval(document.getElementById("nz").value);
	sz = eval(document.getElementById("sz").value);
	gpe = eval(document.getElementById("gpe").value);
	gpt = eval(document.getElementById("gpt").value);
	gpg = eval(document.getElementById("gpg").value);
	gpo = eval(document.getElementById("gpo").value);
	gp = gpe*0.123 + gpt*0.143 + gpg*1.154 + gpo;
	costru4 = gp*80000/6*0.01;
	costru3=0;
	if (document.getElementById("kot").checked==true){costru3=costru3+6000;};
	if (document.getElementById("bas").checked==true){costru3=costru3+3000;};
	if (document.getElementById("vent").checked==true){costru3=costru3+4000;};
	if (document.getElementById("kan").checked==true){costru3=costru3+3500;};
	if (document.getElementById("tran").checked==true){costru3=costru3+5000;};
	if (document.getElementById("kab").checked==true){costru3=costru3+4000;};

	costru1 = 15000 + (nz-1)*4000;
	costru2 = sz*8;
	costru = costru1 + costru2 + costru3 + costru4;
	
	document.getElementById("total").value = costru;
	num2str(document.getElementById("total").value, 'str');
	document.getElementById("total").value=moneyFormat(document.getElementById("total").value);
}
function calculator_vznos() {
	cst = eval(document.getElementById("cst").value);
        fil = Math.ceil(eval(document.getElementById("fil").value));
        document.getElementById("fil").value = fil;
        if ( fil > 0 ) { ep = fil + 1; } else { ep = 1; }
        document.getElementById("ep").value = ep;
        usr = cst / ep;
        document.getElementById("usr").value = moneyFormat(usr);
	k1 = 0.01;
	baz = 2000;
        if (document.getElementById("prm").checked==true || document.getElementById("gas").checked==true)
                {
			if (document.getElementById("prm").checked==true)
				{
					k1 = 0.02;
					baz = 2500;
				}
                       	if (document.getElementById("gas").checked==true)
				{
					k1 = 0.025;
					baz = 3000;
				}
                       	vzn1 = baz + usr * k1;
                }
                else
                {
                       usrt = Math.ceil(usr/1000);
                       if ( usrt >= 80 ) vzn1 = 2000 + usr * k1;
                       if ( usrt < 80 ) vzn1 = 2000;
                       if ( usrt < 50 ) vzn1 = 1500;
                       if ( usrt < 20 ) vzn1 = 1000;
                }
        vzn1 = 100 * Math.ceil(vzn1/100);
        document.getElementById("vzn1").value = moneyFormat(vzn1);
        vzn = vzn1 * ep;
	document.getElementById("vzn").value = moneyFormat(vzn);
        dol = vzn / cst * 100;
	document.getElementById("dol").value = moneyFormat(dol);
	document.getElementById("total").value = moneyFormat(vzn);
}
function calculatortut() {
	fuelInd = document.getElementById("fuel").options.selectedIndex;
	fuelPar = document.getElementById("fuel").options[fuelInd].value;
	q = eval(document.getElementById("q").value);
	
	var units = {
		a: 'тонна',
		b: 'тыс. м3',
		c: 'складской м3',
		d: 'плотный м3',
        e: 'тыс. кВт·ч',
        f: 'Гкал'
	};
	
	measure = units[fuelPar.split('-')[0]];
	koef = parseFloat(fuelPar.split('-')[1]);
	koefTxt = koef + " (т у.т./" + measure + ")";
	total = koef*q;
	
	document.getElementById("koefTxt").innerHTML = koef.toFixed(3);
	document.getElementById("measure").innerHTML = measure;
	document.getElementById("total").innerHTML = total.toFixed(3);
}

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

function replacer(el) {
    el.value = el.value.replace(/[^0-9.]/g, '');
	if(el.value.match(/\./g).length > 1) { 
        el.value = el.value.substr(0, el.value.lastIndexOf("."));
		}
}