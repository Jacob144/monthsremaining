//Variables to change displayed output
	var h1Title = "Prepare for the Remnant Exodus";
	var startText = "Start Preparing" + '<br/>' + "Sukkot 2015";
	var endText = "Be Prepared By" + '<br/>' + "Sukkot 2022";
	var linkDescript = "Discover more about the Remnant Exodus, as well as why, how, and when to prepare at...<br/>";
	var linksrc = "https://remnantexodus.org";
	var linktext = "~ RemnantExodus.or ~"
	var linkColor = "wheat";
		//var barBgClr = "wheat";
		//var barFilledClr = "crimson";
	var startColor = "red";
	var endColor = "wheat";
	


//Global Variables
	var mnthrem = document.getElementsByClassName('monthsRemaining');
	var MRwritten = document.getElementsByClassName('MRwritten');
//add Styles
	// Get HTML head element 
        var head = document.getElementsByTagName('HEAD')[0];  
        // Create new link Element 
        var link = document.createElement('link'); 
        // set the attributes for link element  
        link.rel = 'stylesheet';  
        link.type = 'text/css'; 
        link.href = 'style.css';  
        // Append link element to HTML head 
        head.appendChild(link);

window.addEventListener('load', function (){
for (var i = mnthrem.length - 1; i >= 0; i--) {
	if (MRwritten == true){
		console.log("exsits")
	} else {
		//Create New Divs
		var preparetitle = document.createElement("h1");
		var precntBarBG = document.createElement("div");
		var percentageFilled = document.createElement("div");
			//start and end dates
			var startNend = document.createElement("div");
			var sukkotstart = document.createElement("h2");
			var sukkotend = document.createElement("h2");

			//link
			var linkHeading = document.createElement("h2");
			var MRLink = document.createElement("a");

		//Calculate Percentages
		var start = new Date ("October 7, 2015 19:00:00").getTime();
			var end = new Date ("Octover 9, 2022 19:00:00").getTime();
			var now = +new Date;
			var Percentage = (Math.round(( ( now - start ) / ( end - start ) ) * 100) + "%");

		//write styles/content
		preparetitle.innerHTML = h1Title;
		preparetitle.style.color="white";
		sukkotstart.innerHTML = startText;
		sukkotend.innerHTML = endText;


			//tempraly just writting class names
		precntBarBG.setAttribute('class', "precntBarBG");
		percentageFilled.setAttribute('class', "precntBarFilled")
		percentageFilled.style.width = Percentage;
			//precntBarBG.style.background = barBgClr;
			//percentageFilled.style.bakcgroundcolor = barFilledClr;

		startNend.setAttribute('class', "startNend");
		sukkotstart.setAttribute('class', "startNendFlex");
		sukkotstart.style.color = startColor;
		sukkotend.setAttribute('class', "startNendFlex sukkotend")
		sukkotend.style.color = endColor;
			//link
			linkHeading.innerHTML = linkDescript + "<br/>";
			linkHeading.setAttribute('class', "linkHeading");
			linkHeading.appendChild(MRLink);
			MRLink.setAttribute('href', linksrc);
			MRLink.innerHTML = linktext;
			MRLink.style.color = linkColor;

		//write divs
		precntBarBG.appendChild(percentageFilled);
		startNend.appendChild(sukkotstart);
		startNend.appendChild(sukkotend);

		mnthrem[i].appendChild(preparetitle);
		mnthrem[i].appendChild(precntBarBG);
		mnthrem[i].appendChild(startNend);
		mnthrem[i].appendChild(linkHeading);

		//ensure script only runs once by writing
		//class that script looks for before running script
		mnthrem[i].setAttribute('class', "MRwritten")
	}
}});