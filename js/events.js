//EVENTS AND CLICKS
//--------------------------------CLICK AND KEYDOWN EVENTS-----------------------------		
$(document).ready(function(){
	
	//Opens up othe "clique" webpages part between www and .de has to be written in the respective class name look for examples
	$(document).on('click', '#nav_other', function(event) {
	
		//getting className
		var partURl = $(this).context.className;
		
		// if normal url do this
		if(partURl.indexOf('(') === -1)
		{
			var url = "http://www."+partURl+".de";
		}else{
		
		// if . tl link do this
			partURl = partURl.substring(1,2);
			var url = "http://www."+partURl+".de.tl";
		}
		window.open(url);	
		
		event.preventDefault();
		event.stopImmediatePropagation();	
	});
	
	// Opens the Memberlist
	$(document).on('click', '#nav_member_member', function(event) {
				
		$('#main').html(maintemplate());		
		$.fn.whatsActive("nav_member");	
		
		var node = document.getElementById("tabelle");	
		node.parentNode.insertBefore($.fn.memberTable());
		
			

		
		
		event.preventDefault();
		event.stopImmediatePropagation();	
		
	});
	
	$(document).on('click', '#nav_drop_member', function(event) {
		$.fn.whatsActive("nav_drop_member");
		
		event.preventDefault();
		event.stopImmediatePropagation();	
		
	});
	
	$(document).on('click', '#nav_dates', function(event) {
		
		$('#main').html(maintemplate());		
		$.fn.whatsActive("nav_dates");
		
		event.preventDefault();
		event.stopImmediatePropagation();	
		
	});
	
	
	$(document).on('click', '#nav_histo', function(event) {
		
		$('#main').html(historyTemplate());		
		$.fn.whatsActive("nav_histo");
		
		event.preventDefault();
		event.stopImmediatePropagation();	
		
	});
	
	
	$(document).on('click', '#memberDetail', function(event) {		
	
		var memberID = $(this).context.className;
		var vName = memberArr[memberID]["Vorname"];
		var nName = memberArr[memberID]["Nachname"];
		var sName = memberArr[memberID]["Spitzname"];
		var datum = memberArr[memberID]["Datum"];
		
		//$('#login').html(welcomeTemplate({id:ID}));
		
		console.log(memberID);
		
		$('#main_low').html(memberDetailTemplate({Vorname:vName,Spitzname:sName,Nachname:nName,Datum:datum}));	
		
		
		$('#myModal').modal('show');	
		event.preventDefault();
		event.stopImmediatePropagation();	
		
	});	



});
