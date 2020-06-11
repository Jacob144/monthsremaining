//Variables to change displayed output
	var h1Title = "Prepare for the Remnant Exodus";
	var startText = "Start" + '<br/>' + "Sukkot 2015";
	var endText = "Be Prepared By" + '<br/>' + "Sukkot 2022";


//Global Variables
	var mnthrem = document.getElementsByClassName('monthsRemaining');

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
		//Create New Divs
	var preparetitle = document.createElement("h1");
	var precntBarBG = document.createElement("div");
	var percentageFilled = document.createElement("div");
		//start and end dates
		var startNend = document.createElement("div");
		var sukkotstart = document.createElement("h2");
		var sukkotend = document.createElement("h2");

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
	startNend.setAttribute('class', "startNend")
	sukkotstart.setAttribute('class', "startNendFlex");
	sukkotend.setAttribute('class', "startNendFlex")

	//write divs
	precntBarBG.appendChild(percentageFilled);
	startNend.appendChild(sukkotstart);
	startNend.appendChild(sukkotend);

	mnthrem[i].appendChild(preparetitle);
	mnthrem[i].appendChild(precntBarBG);
	mnthrem[i].appendChild(startNend);
}});




/*window.addEventListener('load', function (){
	//Create New Divs
	var preparetitle = document.createElement("h1");
	var precntBarBG = document.createElement("div");
	var percentageFilled = document.createElement("div");
		//start and end dates
		var startNend = document.createElement("div");
		var sukkotstart = document.createElement("h2");
		var sukkotend = document.createElement("h2");

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
	startNend.setAttribute('class', "startNend")
	sukkotstart.setAttribute('class', "startNendFlex");
	sukkotend.setAttribute('class', "startNendFlex")

	//write divs
	precntBarBG.appendChild(percentageFilled);
	startNend.appendChild(sukkotstart);
	startNend.appendChild(sukkotend);

	mnthrem.appendChild(preparetitle);
	mnthrem.appendChild(precntBarBG);
	mnthrem.appendChild(startNend);
	
})


/*


var start = new Date ("October 7, 2015 19:00:00").getTime();
var end = new Date ("Octover 9, 2022 19:00:00").getTime();
var now = +new Date;
var Percentage = (Math.round(( ( now - start ) / ( end - start ) ) * 100) + "%");








var percentageFilled = document.getElementsByClassName('precntBarFilled');

	var MRpercentage = (MRmonthDate/83.5*100);
	var MRpercentage = (100-MRpercentage + "%")

		var precntBarBG = document.createElement("div");
		var percentageFilled = document.createElement("div");
		var t = percentageFilled

		precntBarBG.appendChild(percentageFilled);
		var start = new Date ("October 7, 2015 19:00:00").getTime();
		var end = new Date ("Octover 9, 2022 19:00:00").getTime();
		var now = +new Date;
		var Percentage = (Math.round(( ( now - start ) / ( end - start ) ) * 100) + "%");



		mnthrem.appendChild(precntBarBG);
		percentageFilled.style.width = Percentage;
		
		console.log("script has run")










// The Following Variable defines the current monthDate
console.log("script is running")
var MRmonthDate = "20";

// The Following Code Displays the Months Remaining
var mnthrem = document.getElementById('monthsRemaining');
console.log (mnthrem);
var percentageFilled = document.getElementsByClassName('precntBarFilled');

var MRpercentage = (MRmonthDate/40*100);

function loadingbar() {

	var precntBarBG = document.createElement("div");
	var percentageFilled = document.createElement("div");
	var t = percentageFilled
	precntBarBG.appendChild(percentageFilled);
		precntBarBG.setAttribute('class', "precntBarBG")
		percentageFilled.setAttribute('class', "precntBarFilled");
		mnthrem.appendChild(precntBarBG);
}

//percentageFilled.setAttribute(width, MRpercentage);*/