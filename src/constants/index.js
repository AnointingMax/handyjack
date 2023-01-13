import Swal from "sweetalert2";

export const setToStorage = (key, value) => {
	let storedValue = JSON.stringify(value);
	localStorage.setItem(key, storedValue);
};

export const getFromStorage = (key) => {
	let value = localStorage.getItem(key);
	return value ? JSON.parse(value) : null;
};

export const banks = {
	120001: "9mobile 9Payment Service Bank",
	801: "Abbey Mortgage Bank",
	51204: "Above Only MFB",
	51312: "Abulesoro MFB",
	"044": "Access Bank",
	"063": "Access Bank (Diamond)",
	120004: "Airtel Smartcash PSB",
	"035A": "ALAT by WEMA",
	50926: "Amju Unique MFB",
	50083: "Aramoko MFB",
	401: "ASO Savings and Loans",
	MFB50094: "Astrapolaris MFB LTD",
	51229: "Bainescredit MFB",
	50931: "Bowen Microfinance Bank",
	565: "Carbon",
	50823: "CEMCS Microfinance Bank",
	50171: "Chanelle Microfinance Bank Limited",
	"023": "Citibank Nigeria",
	50204: "Corestep MFB",
	559: "Coronation Merchant Bank",
	51297: "Crescent MFB",
	"050": "Ecobank Nigeria",
	50263: "Ekimogun MFB",
	562: "Ekondo Microfinance Bank",
	50126: "Eyowo",
	"070": "Fidelity Bank",
	51314: "Firmus MFB",
	"011": "First Bank of Nigeria",
	214: "First City Monument Bank",
	501: "FSDH Merchant Bank Limited",
	812: "Gateway Mortgage Bank LTD",
	"00103": "Globus Bank",
	100022: "GoMoney",
	"058": "Guaranty Trust Bank",
	51251: "Hackman Microfinance Bank",
	50383: "Hasal Microfinance Bank",
	"030": "Heritage Bank",
	120002: "HopePSB",
	51244: "Ibile Microfinance Bank",
	50439: "Ikoyi Osun MFB",
	50457: "Infinity MFB",
	301: "Jaiz Bank",
	50502: "Kadpoly MFB",
	"082": "Keystone Bank",
	50200: "Kredi Money MFB LTD",
	50211: "Kuda Bank",
	90052: "Lagos Building Investment Company Plc.",
	50549: "Links MFB",
	"031": "Living Trust Mortgage Bank",
	303: "Lotus Bank",
	50563: "Mayfair MFB",
	50304: "Mint MFB",
	120003: "MTN Momo PSB",
	100002: "Paga",
	999991: "PalmPay",
	104: "Parallex Bank",
	311: "Parkway - ReadyCash",
	999992: "Paycom",
	50746: "Petra Mircofinance Bank Plc",
	"076": "Polaris Bank",
	50864: "Polyunwana MFB",
	105: "PremiumTrust Bank",
	101: "Providus Bank",
	51293: "QuickFund MFB",
	502: "Rand Merchant Bank",
	90067: "Refuge Mortgage Bank",
	125: "Rubies MFB",
	51113: "Safe Haven MFB",
	50800: "Solid Rock MFB",
	51310: "Sparkle Microfinance Bank",
	221: "Stanbic IBTC Bank",
	"068": "Standard Chartered Bank",
	51253: "Stellas MFB",
	232: "Sterling Bank",
	100: "Suntrust Bank",
	302: "TAJ Bank",
	51269: "Tangerine Money",
	51211: "TCF MFB",
	102: "Titan Bank",
	100039: "Titan Paystack",
	50871: "Unical MFB",
	"032": "Union Bank of Nigeria",
	"033": "United Bank For Africa",
	215: "Unity Bank",
	566: "VFD Microfinance Bank Limited",
	"035": "Wema Bank",
	"057": "Zenith Bank",
};

export const fireSwalError = (message) => {
	return Promise.resolve(
		Swal.fire({
			icon: "error",
			toast: true,
			position: "top-end",
			title: message,
			showConfirmButton: false,
			timer: 2000,
		})
	);
};

export const fireSwalSuccess = (message) => {
	return Promise.resolve(
		Swal.fire({
			icon: "success",
			toast: true,
			position: "top-end",
			title: message,
			showConfirmButton: false,
			timer: 2000,
		})
	);
};

export const fireSwalMessage = () => {
	return Promise.resolve(
		Swal.fire({
			title:
				"<div><h2>Your shop has been created successfully</h2><p>Please wait for your account to be verified</p></div>",
			icon: "info",
		})
	);
};

export const IMAGE_BASEURL =
	import.meta.env.MODE === "development"
		? `${import.meta.env.VITE_LOCAL_BASEURL}`
		: `${import.meta.env.VITE_PROD_BASEURL}`;

export const convertToURL = (string) => string.split(" ").join("-");
