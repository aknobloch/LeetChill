var infoList = document.getElementsByClassName("question-info text-info")[0];
var items = infoList.getElementsByTagName("li");

// hide the first three list items (accepted, submitted and difficulty)
for(var i = 0; i < 3; i++)
{
	var listItem = items[i];
	listItem.style.visibility = "hidden";
}