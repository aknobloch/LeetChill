function setVisibility()
{
	var state = "hidden";
	
	if(isHidden)
	{
		state = "visible";
	}
	
	// hide the table headers for acceptance rate and difficulty level
	var acceptanceHeader = document.getElementsByClassName("reactable-th-acceptance reactable-header-sortable")[0];
	acceptanceHeader.style.visibility = state;

	var difficultyHeader = document.getElementsByClassName("reactable-th-difficulty reactable-header-sortable")[0];
	difficultyHeader.style.visibility = state;
	
	// get the actual table
	var problemTable = document.getElementsByClassName("reactable-data")[0];
	var rows = problemTable.rows;
	
	// iterate through, hiding all 
	for(var i = 0; i < rows.length; i++)
	{
		// this is the acceptance rate
		rows[i].cells[4].style.visibility = state;
		// this is the difficulty
		rows[i].cells[5].style.visibility = state;
	}
	
	// flip for next click
	isHidden = ! isHidden;
}


var isHidden = false;

setVisibility();

// create button
var btn = document.createElement("BUTTON");
var btnTxt = document.createTextNode("Toggle LeetChill");
btn.appendChild(btnTxt);

// pretify it
btn.className = "btn btn-success btn-md btn-action";
btn.style.marginLeft = "10px";

// add functionality
btn.onclick = function() 
{
	setVisibility();
};

// add btn to appropriate location
var buttonParentLocation = document.getElementsByClassName("btn btn-success btn-md btn-action")[0].parentElement;
buttonParentLocation.appendChild(btn);




