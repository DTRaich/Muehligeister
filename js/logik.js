//LOGICAL 
// --------------------------------------------function section---------------------
$.fn.whatsActive = function(currentID){
	//set whos active
	var mycurrent = "#"+currentID;
	console.log("current"+ currentID)
	console.log("active"+ myActiveNav)

	// check others active ? yes? --> remove active
	if(myActiveNav != null){
	
		var workingActiveNav = "#"+myActiveNav;
		$(workingActiveNav).removeClass("active");
		
		if(workingActiveNav.indexOf("drop") != -1){
			console.log("before slice"+workingActiveNav)
			var cutted = workingActiveNav.substring(6,50); 
			console.log("nachslice"+cutted);
			cutted = "#"+cutted;
			$(cutted).removeClass("open");	
		}		
		
	}
	// set global vaiable 
	$(mycurrent).addClass("active");
	myActiveNav = currentID;

}

// Tabelle mit allen Mitgliedern
$.fn.memberTable = function(){

	var myTable = document.createElement("table");
	myTable.setAttribute("class", "table");
	var	mytablebody = document.createElement("tbody");
	var k = 0;
	
    for(var j = 0; j < 1; j++) {
		//create Row
       var mycurrent_row = document.createElement("tr");
        
		for(var i=0;i<2;i++){
			
			var mycurrent_cell = document.createElement("td");
			
			var mycurrent_link = document.createElement("a");
			mycurrent_link.setAttribute("href", "#");
			mycurrent_link.setAttribute("class", memberArr[k]["ID"]);
			mycurrent_link.setAttribute("id", "memberDetail");	
			
			currenttext = document.createTextNode(memberArr[k]["Vorname"]+" "+memberArr[k]["Nachname"]);		
			var mycurrent_break = document.createElement("br"); 
			var mycurrent_img = document.createElement("img");			
			mycurrent_img.src="./img/small/ghost.png";
			//mycurrent_img.style.width = "80px";
			//mycurrent_img.style.height = "20px";
			mycurrent_img.style.border = "0";			
			mycurrent_img.style.cursor = "pointer";
			mycurrent_img.setAttribute("class", "img-thumbnail");
			
			mycurrent_link.appendChild(currenttext);
			mycurrent_link.appendChild(mycurrent_break);
			mycurrent_link.appendChild(mycurrent_img);				
			mycurrent_cell.appendChild(mycurrent_link);
			
			mycurrent_row.appendChild(mycurrent_cell);
			k++;
		} 
		
		//complete Row		
        mytablebody.appendChild(mycurrent_row);
    }
	//complete Table
    myTable.appendChild(mytablebody);
   	myTable.style.width="95%";
    return myTable;
	
}
