//Templates and Gobal-Arrays
// ----------------------------------TEMPLATES---------------------------
var maintemplate = _.template('<div id="main_top" align="center"><br><h3>Unser Vorstand</h3></div>'+
							'<br><div align="center"><table class="mainTemplateTable" id="tabelle"></table></div>'+
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
									'<button type="button" class="btn btn-default" data-dismiss="modal">Zurück</button>'+
									'</div>'+
									'</div><!-- /.modal-content -->'+
									'</div><!-- /.modal-dialog -->'+
									'</div><!-- /.modal -->');	
									
var historyTemplate = _.template('<h1>Geschichte</h1><p>Eine vielzahl der Gründungsmitglieder waren schon in den 70er fasnächtlich aktiv.'+
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
										'<img src="./img/big/slide1.jpg">'+
										'<div class="carousel-caption">'+
										'LALALALLA '+
										'</div>'+
										'</div>'+
									'<div class="item">'+
										'<img src="./img/big/slide2.jpg">'+
										'<div class="carousel-caption">'+
										'...'+
										'</div>'+
										'</div>'+
								
									'<div class="item">'+
										'<img src="./img/big/slide1.jpg">'+
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
//----------------Vorstand------------------------------
memberArr[0] = new Object();
memberArr[0]["Vorname"] = "Sina";
memberArr[0]["Nachname"] = "Steck";
memberArr[0]["Spitzname"] ="Wusel";
memberArr[0]["Datum"] = "20.11.2011";
memberArr[0]["rolle"] ="1.Vorstand";
memberArr[0]["ID"] = "0";

memberArr[1] = new Object();
memberArr[1]["Vorname"] = "Sina";
memberArr[1]["Nachname"] = "Steck";
memberArr[1]["Spitzname"] ="Wusel";
memberArr[1]["Datum"] = "20.11.2011";
memberArr[1]["rolle"] ="1.Vorstand";
memberArr[1]["ID"] = "1";

memberArr[2] = new Object();
memberArr[2]["Vorname"] = "Sina";
memberArr[2]["Nachname"] = "Steck";
memberArr[2]["Spitzname"] ="Wusel";
memberArr[2]["Datum"] = "20.11.2011";
memberArr[2]["rolle"] ="1.Vorstand";
memberArr[2]["ID"] = "2";

memberArr[3] = new Object();
memberArr[3]["Vorname"] = "Sina";
memberArr[3]["Nachname"] = "Steck";
memberArr[3]["Spitzname"] ="Wusel";
memberArr[3]["Datum"] = "20.11.2011";
memberArr[3]["rolle"] ="1.Vorstand";
memberArr[3]["ID"] = "3";

memberArr[4] = new Object();
memberArr[4]["Vorname"] = "Sina";
memberArr[4]["Nachname"] = "Steck";
memberArr[4]["Spitzname"] ="Wusel";
memberArr[4]["Datum"] = "20.11.2011";
memberArr[4]["rolle"] ="1.Vorstand";
memberArr[4]["ID"] = "4";

memberArr[5] = new Object();
memberArr[5]["Vorname"] = "Sina";
memberArr[5]["Nachname"] = "Steck";
memberArr[5]["Spitzname"] ="Wusel";
memberArr[5]["Datum"] = "20.11.2011";
memberArr[5]["rolle"] ="1.Vorstand";
memberArr[5]["ID"] = "5";

//---------------------Mitglieder

memberArr[6] = new Object();
memberArr[6]["Vorname"] = "Daniel";
memberArr[6]["Nachname"] = "Trefzer";
memberArr[6]["Spitzname"] ="Wusel-Bär";
memberArr[6]["Datum"] = "21.11.2011";
memberArr[6]["rolle"] = "0";
memberArr[6]["ID"] = "6";

memberArr[7] = new Object();
memberArr[7]["Vorname"] = "Daniel";
memberArr[7]["Nachname"] = "Trefzer";
memberArr[7]["Spitzname"] ="Wusel-Bär";
memberArr[7]["Datum"] = "21.11.2011";
memberArr[7]["rolle"] = "0";
memberArr[7]["ID"] = "7";

memberArr[8] = new Object();
memberArr[8]["Vorname"] = "Daniel";
memberArr[8]["Nachname"] = "Trefzer";
memberArr[8]["Spitzname"] ="Wusel-Bär";
memberArr[8]["Datum"] = "21.11.2011";
memberArr[8]["rolle"] = "0";
memberArr[8]["ID"] = "8";

memberArr[9] = new Object();
memberArr[9]["Vorname"] = "Daniel";
memberArr[9]["Nachname"] = "Trefzer";
memberArr[9]["Spitzname"] ="Wusel-Bär";
memberArr[9]["Datum"] = "21.11.2011";
memberArr[9]["rolle"] = "0";
memberArr[9]["ID"] = "9";

memberArr[10] = new Object();
memberArr[10]["Vorname"] = "Daniel";
memberArr[10]["Nachname"] = "Trefzer";
memberArr[10]["Spitzname"] ="Wusel-Bär";
memberArr[10]["Datum"] = "21.11.2011";
memberArr[10]["rolle"] = "0";
memberArr[10]["ID"] = "10";

memberArr[11] = new Object();
memberArr[11]["Vorname"] = "Daniel";
memberArr[11]["Nachname"] = "Trefzer";
memberArr[11]["Spitzname"] ="Wusel-Bär";
memberArr[11]["Datum"] = "21.11.2011";
memberArr[11]["rolle"] = "0";
memberArr[11]["ID"] = "11";

memberArr[12] = new Object();
memberArr[12]["Vorname"] = "Daniel";
memberArr[12]["Nachname"] = "Trefzer";
memberArr[12]["Spitzname"] ="Wusel-Bär";
memberArr[12]["Datum"] = "21.11.2011";
memberArr[12]["rolle"] = "0";
memberArr[12]["ID"] = "12";

memberArr[13] = new Object();
memberArr[13]["Vorname"] = "Daniel";
memberArr[13]["Nachname"] = "Trefzer";
memberArr[13]["Spitzname"] ="Wusel-Bär";
memberArr[13]["Datum"] = "21.11.2011";
memberArr[13]["rolle"] = "0";
memberArr[13]["ID"] = "13";

memberArr[14] = new Object();
memberArr[14]["Vorname"] = "Daniel";
memberArr[14]["Nachname"] = "Trefzer";
memberArr[14]["Spitzname"] ="Wusel-Bär";
memberArr[14]["Datum"] = "21.11.2011";
memberArr[14]["rolle"] = "0";
memberArr[14]["ID"] = "14";

memberArr[15] = new Object();
memberArr[15]["Vorname"] = "Daniel";
memberArr[15]["Nachname"] = "Trefzer";
memberArr[15]["Spitzname"] ="Wusel-Bär";
memberArr[15]["Datum"] = "21.11.2011";
memberArr[15]["rolle"] = "0";
memberArr[15]["ID"] = "15";

memberArr[16] = new Object();
memberArr[16]["Vorname"] = "Daniel";
memberArr[16]["Nachname"] = "Trefzer";
memberArr[16]["Spitzname"] ="Wusel-Bär";
memberArr[16]["Datum"] = "21.11.2011";
memberArr[16]["rolle"] = "0";
memberArr[16]["ID"] = "16";

memberArr[17] = new Object();
memberArr[17]["Vorname"] = "Daniel";
memberArr[17]["Nachname"] = "Trefzer";
memberArr[17]["Spitzname"] ="Wusel-Bär";
memberArr[17]["Datum"] = "21.11.2011";
memberArr[17]["rolle"] = "0";
memberArr[17]["ID"] = "17";

memberArr[18] = new Object();
memberArr[18]["Vorname"] = "Daniel";
memberArr[18]["Nachname"] = "Trefzer";
memberArr[18]["Spitzname"] ="Wusel-Bär";
memberArr[18]["Datum"] = "21.11.2011";
memberArr[18]["rolle"] = "0";
memberArr[18]["ID"] = "18";

memberArr[19] = new Object();
memberArr[19]["Vorname"] = "Daniel";
memberArr[19]["Nachname"] = "Trefzer";
memberArr[19]["Spitzname"] ="Wusel-Bär";
memberArr[19]["Datum"] = "21.11.2011";
memberArr[19]["rolle"] = "0";
memberArr[19]["ID"] = "19";

memberArr[20] = new Object();
memberArr[20]["Vorname"] = "Daniel";
memberArr[20]["Nachname"] = "Trefzer";
memberArr[20]["Spitzname"] ="Wusel-Bär";
memberArr[20]["Datum"] = "21.11.2011";
memberArr[20]["rolle"] = "0";
memberArr[20]["ID"] = "20";

memberArr[21] = new Object();
memberArr[21]["Vorname"] = "Daniel";
memberArr[21]["Nachname"] = "Trefzer";
memberArr[21]["Spitzname"] ="Wusel-Bär";
memberArr[21]["Datum"] = "21.11.2011";
memberArr[21]["rolle"] = "0";
memberArr[21]["ID"] = "21";

memberArr[22] = new Object();
memberArr[22]["Vorname"] = "Daniel";
memberArr[22]["Nachname"] = "Trefzer";
memberArr[22]["Spitzname"] ="Wusel-Bär";
memberArr[22]["Datum"] = "21.11.2011";
memberArr[22]["rolle"] = "0";
memberArr[22]["ID"] = "22";

memberArr[23] = new Object();
memberArr[23]["Vorname"] = "Daniel";
memberArr[23]["Nachname"] = "Trefzer";
memberArr[23]["Spitzname"] ="Wusel-Bär";
memberArr[23]["Datum"] = "21.11.2011";
memberArr[23]["rolle"] = "0";
memberArr[23]["ID"] = "23";
