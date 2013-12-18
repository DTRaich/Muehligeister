//LOGICAL 
// --------------------------------------------function section---------------------
$.fn.whatsActive = function(currentID){
	//set whos active
	var mycurrent = "#"+currentID;
	
	// check others active ? yes? --> remove active
	if(myActiveNav != null){
	
		var workingActiveNav = "#"+myActiveNav;
		$(workingActiveNav).removeClass("active");
		
		if(workingActiveNav.indexOf("drop") != -1){
			var cutted = workingActiveNav.substring(6,50); 
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
	
	// 4 reihen
    for(var j = 0; j < 4; j++) {
		//create Row
       var mycurrent_row = document.createElement("tr");
	   
        // 6 pro reihe
		for(var i=0;i<6;i++){
			
			var mycurrent_cell = document.createElement("td");
			mycurrent_cell.setAttribute("align","center");
			var mycurrent_link = document.createElement("a");
			mycurrent_link.setAttribute("href", "#");
			mycurrent_link.setAttribute("class", memberArr[k]["ID"]);
			mycurrent_link.setAttribute("id", "memberDetail");	
			
			currenttext = document.createTextNode(memberArr[k]["Vorname"]+" "+memberArr[k]["Nachname"]);		
			var mycurrent_break = document.createElement("br");
			
			var mycurrent_img = document.createElement("img");			
			mycurrent_img.src="./img/small/Muehli.jpg";			
			mycurrent_img.style.border = "0";			
			mycurrent_img.style.cursor = "pointer";
			mycurrent_img.setAttribute("class", "img-thumbnail");
			var mycurrent_break_additional = document.createElement("br");
			var myAdditional_currenttext = document.createTextNode(memberArr[k]["rolle"]);		

			if(memberArr[k]["rolle"] !== "0"){
			
				mycurrent_link.appendChild(currenttext);
				mycurrent_link.appendChild(mycurrent_break);
				mycurrent_link.appendChild(myAdditional_currenttext);
				mycurrent_link.appendChild(mycurrent_break_additional);
				mycurrent_link.appendChild(mycurrent_img);				
				mycurrent_cell.appendChild(mycurrent_link);
				
			}else{

				mycurrent_link.appendChild(currenttext);
				mycurrent_link.appendChild(mycurrent_break);
				mycurrent_link.appendChild(mycurrent_img);				
				mycurrent_cell.appendChild(mycurrent_link);
			
			}
			
			
			mycurrent_row.appendChild(mycurrent_cell);
			
			k++;
			console.log(k)
		} 
		
		//complete Row		
        mytablebody.appendChild(mycurrent_row);
    }
	//complete Table
    myTable.appendChild(mytablebody);
   	myTable.style.width="85%";
    return myTable;
	
}
