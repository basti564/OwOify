document.title = "OwO"

if (window.location.href.substring(0, 30) == "https://www.google.com/search?") {
	try {
		var oldLogo = document.getElementById('logo');
		var newLogo = document.createElement('img');
		newLogo.id = "User-Logo";
		newLogo.src = "https://i.ibb.co/cCWTKTX/Ow-O-92x30dp.png"
		newLogo.height = "30";
		newLogo.width = "92";
		newLogo.onclick = function () {
			window.location.href = 'https://www.google.com/';
		};
		oldLogo.parentNode.replaceChild(newLogo, oldLogo);
	} catch (e) {
		console.log(`Error overwriting search Google logo: ${e}`);
	}
} else if (window.location.href.substring(8, 22) == "www.google.com") {
	try {
		var oldLogo = document.getElementsByClassName('lnXdpd')[0];
		var newLogo = document.createElement('img');
		newLogo.id = "User-Logo";
		newLogo.src = "https://i.ibb.co/GHzBb1G/Ow-O-272x92dp.png";
		oldLogo.parentNode.replaceChild(newLogo, oldLogo);
	} catch (e) {
		console.log(`Error overwriting main Google logo: ${e}`);
	}
}

var replaceArry = [
	[/google/gi, 'OwO'],
	[/Google/gi, 'OwO'],
	[/Gmail/gi, 'OwOmail'],
	[/How Search works/gi, 'How OwO works'],
	[/I'm feeling \w+/gi, 'I\'m feeling OwO']
];
var numTerms = replaceArry.length;
var txtWalker = document.createTreeWalker(
	document.body,
	NodeFilter.SHOW_TEXT, {
		acceptNode: function (node) {
			if (node.nodeValue.trim())
				return NodeFilter.FILTER_ACCEPT;
			return NodeFilter.FILTER_SKIP;
		}
	},
	false
);
var txtNode = null;

while (txtNode = txtWalker.nextNode()) {
	var oldTxt = txtNode.nodeValue;

	for (var J = 0; J < numTerms; J++) {
		oldTxt = oldTxt.replace(replaceArry[J][0], replaceArry[J][1]);
	}
	txtNode.nodeValue = oldTxt;
}