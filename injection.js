var problemTable = document.getElementsByClassName("reactable-data")[0];
var rows = problemTable.rows;

for(var i = 0; i < rows.length; i++)
{
	rows[i].cells[5].innerHTML = "Show";
}
