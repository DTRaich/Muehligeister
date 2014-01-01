//EVENTS AND CLICKS
$(function(){
	 //n case of refresh or open up again get DB value
	$('#main').html(slideShowTemplate());
	//$('#main').html(maintemplate());
})



//--------------------------------CLICK AND KEYDOWN EVENTS-----------------------------		
$(document).ready(function(){
	//----------------------Navigation------------------- 
	$('.carousel').carousel({
  interval: 4000,
  wrap: true
})
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
		node.parentNode.insertBefore($.fn.memberTable(),node);		
		
		event.preventDefault();
		event.stopImmediatePropagation();	
		
	});
	
	
	$(document).on('click', '#nav_start', function(event) {
		
		$('#main').html(slideShowTemplate());		
		$.fn.whatsActive("nav_start");
		
		event.preventDefault();
		event.stopImmediatePropagation();	
		
	});
	
	
	$(document).on('click', '#nav_member_wanabe', function(event) {
				
		$('#main').html(memberWanabeTemplate());		
		$.fn.whatsActive("nav_member");	
		
		event.preventDefault();
		event.stopImmediatePropagation();	
		
	});

	
	$(document).on('click', '#nav_dates', function(event) {
		
		$('#main').html(datesTemplate());		
		$.fn.whatsActive("nav_dates");
		
		event.preventDefault();
		event.stopImmediatePropagation();	
		
	});
	
		$(document).on('click', '#nav_impressum', function(event) {
		
		$('#main').html(impressumTemplate());		
		$.fn.whatsActive("nav_impressum");
		
		event.preventDefault();
		event.stopImmediatePropagation();	
		
	});
	
	
	$(document).on('click', '#nav_histo', function(event) {
		
		$('#main').html(historyTemplate());		
		$.fn.whatsActive("nav_histo");
		
		event.preventDefault();
		event.stopImmediatePropagation();	
		
	});	

	
	//----------------NAVIGATION DROPS-----------------------------
	$(document).on('click', '#drop_nav_member', function(event) {
		$.fn.whatsActive("drop_nav_member");
		
		event.preventDefault();
		event.stopImmediatePropagation();	
		
	});
	
	$(document).on('click', '#drop_nav_picture', function(event) {
		$.fn.whatsActive("drop_nav_picture");
		
		event.preventDefault();
		event.stopImmediatePropagation();	
		
	});
	
	//---------------------- Action in the container-----------
	$(document).on('click', '#memberDetail', function(event) {		
	
		var memberID = $(this).context.className;
		var vName = memberArr[memberID]["Vorname"];
		var nName = memberArr[memberID]["Nachname"];
		var sName = memberArr[memberID]["Spitzname"];
		var datum = memberArr[memberID]["Datum"];		
		
		$('#main_low').html(memberDetailTemplate({Vorname:vName,Spitzname:sName,Nachname:nName,Datum:datum}));	
		
		
		$('#myModal').modal('show');	
		event.preventDefault();
		event.stopImmediatePropagation();	
		
	});	
	
	$(document).on('click', '#btn_active', function(event) {
		
		
		$('#main_low').html(activeMemberTemplate());		
		$('#activeMemberModal').modal('show');
		
		event.preventDefault();
		event.stopImmediatePropagation();	
		
	});
	
	$(document).on('click', '#btn_passive', function(event) {
		
		console.log('hallo');
		$('#main_low').html(passiveMemberTemplate());		
		$('#passiveMemberModal').modal('show');
		
		event.preventDefault();
		event.stopImmediatePropagation();	
		
	});





});
