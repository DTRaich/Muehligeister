//TITLE OF JS
// ----------------------------------TEMPLATES---------------------------
var maintemplate=_.template('<br><table class="mainTemplateTable" id="tabelle"></table>'+
							'<div id="main_top">dsdfsadsadsdsadsdsdsds</div>'+
							'<div id="main_middle"></div>'+	
							'<div id="main_low"></div>');
							
var memberDetailTemplate=_.template('<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
									'<div class="modal-dialog">'+
									'<div class="modal-content">'+
									'<div class="modal-header">'+
									'<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>'+
									'<h4 class="modal-title" id="myModalLabel"><%- Vorname %> "<%- Spitzname %>" <%- Nachname %></h4>'+
									'</div>'+
									'<div class="modal-body">'+
									'<img src ="./img/small/<%- Vorname %><%- Nachname %>.png"> Eintrittsdatum : <%- Datum %>'+
									'</div>'+
									'<div class="modal-footer">'+
									'<button type="button" class="btn btn-default" data-dismiss="modal">Zurück</button>'+
									'</div>'+
									'</div><!-- /.modal-content -->'+
									'</div><!-- /.modal-dialog -->'+
									'</div><!-- /.modal -->');	
									
var historyTemplate=_.template('<h1>Geschichte</h1><p>Eine vielzahl der Gründungsmitglieder waren schon in den 70er fasnächtlich aktiv.'+
							'Damals hatte Friedrich "Spezi" Linder die A-Jugendlichen des TUS Binzen gefragt, ob sie nicht lust hätten als Gruppe am Binzener Umzug mitzumachen.</p>'+
							
							'<p>Da bei der "Oberen Mühle" noch ein Anhänger des TUS stand, werden die "Scheich vo Binze" gegründet. Unter diesem Namen wurde mehrere Jahre die Fasnacht gefeiert.'+
							'Als dann Anfang der 80er die Aufnahme in die Narrenzunft anstand, musste aus Gründen des Brauchtums ein neuer Cliquenname her, der zum Ort Binzen passt.'+
							'Da der erste Wagen jahrelang, an der bereits dem Erdboden gleichgemachten "Oberen Mühle" stand, war der Cliquenname: "Mühli-Geischter" schnell gefunden!' +
							'Inzwischen war die Gruppe um Freund und Freundinnen erweitert worden!</p>'+
							
							'<p>Die Mühli-Geischter Clique ist im Sommer 1984 gegründet worden und ist bis heute ein fester Bestandteil der Binzener Fasnacht.'+
							'Von den damals 15 Gründungsmitgliedern (Klaus Asal, Klaus Bertelmann, Beatrice Breitenfellner, Gerd Hund, Ernst Hütter, Elke Vögtlin,'+
							'Bernd Netzlaff, Armin Kall, Brigitte Krebs, Ingo Krebs, Marie Krebs, Jochen Strutz, Angela Schmidt, Susi Lamprecht und Jürgen Zisterer) sind noch 12 aktiv.'+
							'Mittlerweile sind die Mühli-Geischter auf 28 aktive Fasnächtler angewachsen (Stand Januar 2009)</p>'+
							
							'<p>Der Schwung und die neue Frische den die Mühli-Geischter von Anfang an zeigten, wurde ein Jahr später mit der Aufnahme in die Narrenzunft'+
							'"Binzener Thonnerknaben" belohnt.In der Anfangszeit nahmen wir mit einem Wagen an den Umzügen teil. Auf dem Bild ist der erste Wagen abgebildet:'+
							'BIIIILD </p>'+
							
							'<p>Dieser Wagen wurde von uns zum letztenmal in der Sasion 1986 benutzt und auf die neue Saison 1987 umgebaut. Auf dem folgenden Bild seht Ihr den'+
							'damals neuen Wagen.'+
							'BIIIILD </p>'+

							'<p>1991 haben wir dann unseren Wagen entsorgen müssen. Das tat schon ein bisschen weh und manch einer von uns trauert heute noch. Seither nehmen wir an den Umzügen als Fußgruppe teil.'+
							'BIIIILD </p>'+
							
							'<p>Unser Häs hat sich im Laufe der Jahre auch verändert. Von der anfangs selbstgefertigten Gipsmaske bis hin zu unserer jetzigen handgeschnitzten Holzmaske.'+
							'Folgende Bilder dokumentieren den Wechsel:'+
							'BIIIILD </p>'+
							
							'<p>1995 hatten wir unser erstes Jubiläum "11 Jahre Mühligeischter". Dieser Anlass wurde in Binzen in der Halle ordentlich gefeiert. Als Motto hatten wir uns die Südsee ausgesucht,'+
							'unter anderem waren auch Limbo-Tänzer zu Gast. Das Ganze war ein tolles Spektakel und wir glauben, dass sich alle gerne daran erinnern.'+
							'BIIIILD </p>'+
							
							'<p>2006 war dann das nächste große Ereigniss für die Mühli-Geischter, denn wir wurden 22 Jahre alt. Dies wurde diesmal aber ein bisschen kleiner gefeiert, als das 11jährige. Aber trotzdem war es ein großer Erfolg:'+
							'BIIIILD </p>'+

							'<p>Zum 31.12.2008 haben wir unsere Zusammenarbeit mit der Narrenzunft, den "Thonnerknaben", beendet. Seit dem 29.01.2009 sind wir nun ein selbständig eingetragener Verein. Selbstverständlich setzen wir die'+
							'Pflege und den Schutz des heimatlichen Fasnachtsbrauchtum fort. Das Vergnügen wird jedoch nicht zu kurz kommen... </p>'+
							
							
							'<p>Am Dorffest in Binzen sind wir mit der "Tropicana Bar" vertreten. Dieser beliebte Treffpunkt ist euch sicherlich bekannt und bestimmt keine Neuigkeit.'+
							'Falls doch besucht uns einfach beim nächsten Dorffest in Binzen.Der Weg lohnt sich.</p>'+

							'<p>Ihr seht bei uns geht immer was. Auf der Seite "Aktuelles" könnt ihr euch über unsere Aktivitäten informieren.</p>'+
							'<p>Viel Vergnügen</p>');									
									
									
							
//-----------------------------------GLOBAL VARIABLES----------------------
var myActiveNav = null;
var memberArr = new Array(); 
memberArr[0] = new Object();
memberArr[0]["Vorname"] = "Sina";
memberArr[0]["Nachname"] = "Steck";
memberArr[0]["Spitzname"] ="Wusel";
memberArr[0]["Datum"] = "20.11.2011";
memberArr[0]["ID"] = "0";

memberArr[1] = new Object();
memberArr[1]["Vorname"] = "Daniel";
memberArr[1]["Nachname"] = "Trefzer";
memberArr[1]["Spitzname"] ="Wusel-Bär";
memberArr[1]["Datum"] = "21.11.2011";
memberArr[1]["ID"] = "1";


//-----------------------INTERN METHODS------------------


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

// --------------------------------------------function section---------------------
$.fn.whatsActive = function(currentID){
	//set whos active
	var mycurrent = "#"+currentID;
	
	
	// check others active ? yes? --> remove active
	if(myActiveNav != null){
	
		myActiveNav = "#"+myActiveNav;
		$(myActiveNav).removeClass("active");		
		
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
