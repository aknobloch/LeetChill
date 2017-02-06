// constant to track hide/show toggle
var isHidden = false;

function setVisibility()
{
	// defines what to set the current state as
	var state = "hidden";
	
	if(isHidden)
	{
		state = "visible";
	}
	
	var infoList = document.getElementsByClassName("question-info text-info")[0];
	var items = infoList.getElementsByTagName("li");

	// hide the first three list items (accepted, submitted and difficulty)
	for(var i = 0; i < 3; i++)
	{
		var listItem = items[i];
		listItem.style.visibility = state;
	}
	
	// toggle for next time
	isHidden = ! isHidden;
}

function addButton()
{
	// create button
	var btn = document.createElement("BUTTON");
	var btnTxt = document.createTextNode("Toggle LeetChill");
	btn.appendChild(btnTxt);

	// pretify it
	btn.className = "btn btn-success btn-md btn-action";

	// add functionality
	btn.onclick = function() 
	{
		setVisibility();
	};

	// add btn to appropriate location
	var infoList = document.getElementsByClassName("question-info text-info")[0];
	infoList.appendChild(btn);
	btn.style.marginLeft = (infoList.offsetWidth / 2) - (btn.offsetWidth / 2) + "px";
	btn.style.marginTop = "10px";
}


addButton();
setVisibility();