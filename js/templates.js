//Templates and Gobal-Arrays
// ----------------------------------TEMPLATES---------------------------
var maintemplate = _.template('<br><table class="mainTemplateTable" id="tabelle"></table>'+
							'<div id="main_top">dsdfsadsadsdsadsdsdsds</div>'+
							'<div id="main_middle"></div>'+	
							'<div id="main_low"></div>');
							
var memberDetailTemplate = _.template('<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
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
									'<button type="button" class="btn btn-default" data-dismiss="modal">Zur�ck</button>'+
									'</div>'+
									'</div><!-- /.modal-content -->'+
									'</div><!-- /.modal-dialog -->'+
									'</div><!-- /.modal -->');	
									
var historyTemplate = _.template('<h1>Geschichte</h1><p>Eine vielzahl der Gr�ndungsmitglieder waren schon in den 70er fasn�chtlich aktiv.'+
							'Damals hatte Friedrich "Spezi" Linder die A-Jugendlichen des TUS Binzen gefragt, ob sie nicht lust h�tten als Gruppe am Binzener Umzug mitzumachen.</p>'+
							
							'<p>Da bei der "Oberen M�hle" noch ein Anh�nger des TUS stand, werden die "Scheich vo Binze" gegr�ndet. Unter diesem Namen wurde mehrere Jahre die Fasnacht gefeiert.'+
							'Als dann Anfang der 80er die Aufnahme in die Narrenzunft anstand, musste aus Gr�nden des Brauchtums ein neuer Cliquenname her, der zum Ort Binzen passt.'+
							'Da der erste Wagen jahrelang, an der bereits dem Erdboden gleichgemachten "Oberen M�hle" stand, war der Cliquenname: "M�hli-Geischter" schnell gefunden!' +
							'Inzwischen war die Gruppe um Freund und Freundinnen erweitert worden!</p>'+
							
							'<p>Die M�hli-Geischter Clique ist im Sommer 1984 gegr�ndet worden und ist bis heute ein fester Bestandteil der Binzener Fasnacht.'+
							'Von den damals 15 Gr�ndungsmitgliedern (Klaus Asal, Klaus Bertelmann, Beatrice Breitenfellner, Gerd Hund, Ernst H�tter, Elke V�gtlin,'+
							'Bernd Netzlaff, Armin Kall, Brigitte Krebs, Ingo Krebs, Marie Krebs, Jochen Strutz, Angela Schmidt, Susi Lamprecht und J�rgen Zisterer) sind noch 12 aktiv.'+
							'Mittlerweile sind die M�hli-Geischter auf 28 aktive Fasn�chtler angewachsen (Stand Januar 2009)</p>'+
							
							'<p>Der Schwung und die neue Frische den die M�hli-Geischter von Anfang an zeigten, wurde ein Jahr sp�ter mit der Aufnahme in die Narrenzunft'+
							'"Binzener Thonnerknaben" belohnt.In der Anfangszeit nahmen wir mit einem Wagen an den Umz�gen teil. Auf dem Bild ist der erste Wagen abgebildet:'+
							'BIIIILD </p>'+
							
							'<p>Dieser Wagen wurde von uns zum letztenmal in der Sasion 1986 benutzt und auf die neue Saison 1987 umgebaut. Auf dem folgenden Bild seht Ihr den'+
							'damals neuen Wagen.'+
							'BIIIILD </p>'+

							'<p>1991 haben wir dann unseren Wagen entsorgen m�ssen. Das tat schon ein bisschen weh und manch einer von uns trauert heute noch. Seither nehmen wir an den Umz�gen als Fu�gruppe teil.'+
							'BIIIILD </p>'+
							
							'<p>Unser H�s hat sich im Laufe der Jahre auch ver�ndert. Von der anfangs selbstgefertigten Gipsmaske bis hin zu unserer jetzigen handgeschnitzten Holzmaske.'+
							'Folgende Bilder dokumentieren den Wechsel:'+
							'BIIIILD </p>'+
							
							'<p>1995 hatten wir unser erstes Jubil�um "11 Jahre M�hligeischter". Dieser Anlass wurde in Binzen in der Halle ordentlich gefeiert. Als Motto hatten wir uns die S�dsee ausgesucht,'+
							'unter anderem waren auch Limbo-T�nzer zu Gast. Das Ganze war ein tolles Spektakel und wir glauben, dass sich alle gerne daran erinnern.'+
							'BIIIILD </p>'+
							
							'<p>2006 war dann das n�chste gro�e Ereigniss f�r die M�hli-Geischter, denn wir wurden 22 Jahre alt. Dies wurde diesmal aber ein bisschen kleiner gefeiert, als das 11j�hrige. Aber trotzdem war es ein gro�er Erfolg:'+
							'BIIIILD </p>'+

							'<p>Zum 31.12.2008 haben wir unsere Zusammenarbeit mit der Narrenzunft, den "Thonnerknaben", beendet. Seit dem 29.01.2009 sind wir nun ein selbst�ndig eingetragener Verein. Selbstverst�ndlich setzen wir die'+
							'Pflege und den Schutz des heimatlichen Fasnachtsbrauchtum fort. Das Vergn�gen wird jedoch nicht zu kurz kommen... </p>'+
							
							
							'<p>Am Dorffest in Binzen sind wir mit der "Tropicana Bar" vertreten. Dieser beliebte Treffpunkt ist euch sicherlich bekannt und bestimmt keine Neuigkeit.'+
							'Falls doch besucht uns einfach beim n�chsten Dorffest in Binzen.Der Weg lohnt sich.</p>'+

							'<p>Ihr seht bei uns geht immer was. Auf der Seite "Aktuelles" k�nnt ihr euch �ber unsere Aktivit�ten informieren.</p>'+
							'<p>Viel Vergn�gen</p>');	

var slideShowTemplate =_.template('<div id="carousel-example-generic" class="carousel slide" data-ride="carousel">'+
								'<!-- Indicators -->'+
								'<ol class="carousel-indicators">'+
								'<li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>'+
								'<li data-target="#carousel-example-generic" data-slide-to="1"></li>'+
								'<li data-target="#carousel-example-generic" data-slide-to="2"></li>'+
								'</ol>'+
								'<!-- Wrapper for slides -->'+
								'<div class="carousel-inner">'+
									'<div class="item active">'+
										'<img src="./img/big/slide1.jpg" alt="First Slide">'+
										'<div class="carousel-caption">'+
										'...'+
										'</div>'+
										'</div>'+
										'...'+
								'</div>'+
								'<div class="carousel-inner">'+
									'<div class="item">'+
										'<img src="./img/big/slide2.jpg" alt="Second Slide">'+
										'<div class="carousel-caption">'+
										'...'+
										'</div>'+
										'</div>'+
										'...'+
								'</div>'+
								'<div class="carousel-inner">'+
									'<div class="item">'+
										'<img src="./img/big/slide1.jpg" alt="Third Slide">'+
										'<div class="carousel-caption">'+
										'...'+
										'</div>'+
										'</div>'+
										'...'+
								'</div>'+
								'<!-- Controls -->'+
								'<a class="left carousel-control" href="#carousel-example-generic" data-slide="prev">'+
								'<span class="glyphicon glyphicon-chevron-left"></span>'+
								'</a>'+
								'<a class="right carousel-control" href="#carousel-example-generic" data-slide="next">'+
								'<span class="glyphicon glyphicon-chevron-right"></span>'+
								'</a>'+
								'</div>');
									
									
							
//-----------------------------------GLOBAL ARRAYS----------------------
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
memberArr[1]["Spitzname"] ="Wusel-B�r";
memberArr[1]["Datum"] = "21.11.2011";
memberArr[1]["ID"] = "1";

