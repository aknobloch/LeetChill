var acceptanceHeader = document.getElementsByClassName("reactable-th-acceptance reactable-header-sortable reactable-header-sort-desc")[0];
acceptanceHeader.style.display = "none";

var difficultyHeader = document.getElementsByClassName("reactable-th-difficulty reactable-header-sortable ")[0];
difficultyHeader.style.display = "none";

var problemTable = document.getElementsByClassName("reactable-data")[0];
var rows = problemTable.rows;

for(var i = 0; i < rows.length; i++)
{
	
	rows[i].cells[4].style.display = "none";
	rows[i].cells[5].style.display = "none";
}

