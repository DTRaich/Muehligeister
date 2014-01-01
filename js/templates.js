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
									
var historyTemplate = _.template('<div class="panel panel-default" >'+
							'<div class="panel-heading panel-title" style="text-align:center">Geschichte</div><br>'+
							'<p>Eine vielzahl der Gründungsmitglieder waren schon in den 70er fasnächtlich aktiv.'+
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
							'<p>Viel Vergnügen</p>'+
							'<br><br><br>'+
							'</div>');	

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
									
var memberWanabeTemplate =_.template('<div class="panel panel-default" >'+
									'<div class="panel-heading panel-title" style="text-align:center">Mitglied werden?</div>'+
									'<div id="main_middle"></div>'+	
									'<div id="main_low"></div><div align="center">'+
									'<br><br><br><br><br><br><br><br><br><br><br>'+
									'<button type="button" id="btn_active" class="btn btn-xlarge">Aktiv</button>'+
									'<button type="button" id="btn_passive" class="btn btn-xlarge">Passiv</button>'+
									'</div>'+
									'<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>'+
									'</div>');		


var activeMemberTemplate = _.template('<div class="modal fade" id="activeMemberModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
									'<div class="modal-dialog">'+
									'<div class="modal-content">'+
									'<div class="modal-header">'+
									'<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>'+
									'<h4 class="modal-title" id="myModalLabel">Aktives Mitglied werden</h4>'+
									'</div>'+
									'<div class="modal-body">'+
									'<p>Du willst bei uns Aktiv mitmachen?</p>'+
									'<p>Du bist mindestens 18 Jahre alt (16 Jahre mit Einverständniserklärung der Eltern + Aufsichtsperson in der Clique)'+
									'Du hast Lust mit uns an Umzüge mitzulaufen aber auch bei unseren Arbeitseinsätze mitzuarbeiten... dann bist Du hier genau richtig!'+
									'Schreib uns doch einfach eine E-Mail.</p>'+
									'<br>'+
									'<a href="mailto:muehligeischter-binzen@gmx.de">muehligeischter-binzen@gmx.de</a>'+
									'<br><br><br>'+
									'<p>Wir laden Dich dann zur unseren nächsten Sitzung ein.</p>'+
									'</div>'+
									'<div class="modal-footer">'+
									'<button type="button" class="btn btn-default" data-dismiss="modal">Zurück</button>'+
									'</div>'+
									'</div><!-- /.modal-content -->'+
									'</div><!-- /.modal-dialog -->'+
									'</div><!-- /.modal -->');		



var passiveMemberTemplate = _.template('<div class="modal fade" id="passiveMemberModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
									'<div class="modal-dialog">'+
									'<div class="modal-content">'+
									'<div class="modal-header">'+
									'<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>'+
									'<h4 class="modal-title" id="myModalLabel">Passives Mitglied werden</h4>'+
									'</div>'+
									'<div class="modal-body">'+
									'<p>Du willst bei uns Passiv-Mitglied werden?</p>'+
									'<p>Dann füll einfach den Passiv-Mitgliedsantrag aus (siehe unten) und schick es an</p>'+
									'<br>'+
									'<a href="mailto:muehligeischter-binzen@gmx.de">muehligeischter-binzen@gmx.de</a>'+
									'<br><br><br>'+
									'<p> oder an </p>'+
									'<br>'+
									'<p>Mühli-Geischter 1984 Binzen e.V. <br> Armin Kall <br> Am Sonnenrain 23 <br> 79415 Rheinweiler <br></p>'+
									'<p> oder </p>'+
									'<p>Mühli-Geischter 1984 Binzen e.V. <br> Ingo Krebs <br> Mühligaß 7 <br> 79576 Weil/Ötlingen</p><br>'+
									'<a href="Passiv.pdf" target="_blank">Passiv-Mitgliedsantrag</a>'+
									'</div>'+
									'<div class="modal-footer">'+
									'<button type="button" class="btn btn-default" data-dismiss="modal">Zurück</button>'+
									'</div>'+
									'</div><!-- /.modal-content -->'+
									'</div><!-- /.modal-dialog -->'+
									'</div><!-- /.modal -->');										
							
//-----------------------------------GLOBAL ARRAYS----------------------
var myActiveNav = null;
var memberArr = new Array(); 
//----------------Vorstand------------------------------
memberArr[0] = new Object();
memberArr[0]["Vorname"] = "Armin";
memberArr[0]["Nachname"] = "Kall";
memberArr[0]["Spitzname"] ="Waggel";
memberArr[0]["Datum"] = "07.04.1984";
memberArr[0]["rolle"] ="1.Vorstand";
memberArr[0]["ID"] = "0";

memberArr[1] = new Object();
memberArr[1]["Vorname"] = "Ingo";
memberArr[1]["Nachname"] = "Krebs";
memberArr[1]["Spitzname"] ="";
memberArr[1]["Datum"] = "07.04.1984";
memberArr[1]["rolle"] ="2.Vorstand";
memberArr[1]["ID"] = "1";

memberArr[2] = new Object();
memberArr[2]["Vorname"] = "Beatrice";
memberArr[2]["Nachname"] = "Kall";
memberArr[2]["Spitzname"] ="Bea";
memberArr[2]["Datum"] = "11.12.1986";
memberArr[2]["rolle"] ="1.Kassierer";
memberArr[2]["ID"] = "2";

memberArr[3] = new Object();
memberArr[3]["Vorname"] = "Ulrike";
memberArr[3]["Nachname"] = "Kasten";
memberArr[3]["Spitzname"] ="Uli";
memberArr[3]["Datum"] = "11.12.1986";
memberArr[3]["rolle"] ="2.Kassierer";
memberArr[3]["ID"] = "3";

memberArr[4] = new Object();
memberArr[4]["Vorname"] = "Brigitte";
memberArr[4]["Nachname"] = "Krebs";
memberArr[4]["Spitzname"] ="";
memberArr[4]["Datum"] = "07.04.1984";
memberArr[4]["rolle"] ="Festorganisation";
memberArr[4]["ID"] = "4";

memberArr[5] = new Object();
memberArr[5]["Vorname"] = "Claudia";
memberArr[5]["Nachname"] = "Linder";
memberArr[5]["Spitzname"] ="Claudi";
memberArr[5]["Datum"] = "23.03.1988";
memberArr[5]["rolle"] ="Festorganisation";
memberArr[5]["ID"] = "5";

//---------------------Mitglieder

memberArr[6] = new Object();
memberArr[6]["Vorname"] = "Klaus";
memberArr[6]["Nachname"] = "Asal";
memberArr[6]["Spitzname"] ="Asi";
memberArr[6]["Datum"] = "07.04.1984";
memberArr[6]["rolle"] = "0";
memberArr[6]["ID"] = "6";

memberArr[7] = new Object();
memberArr[7]["Vorname"] = "Klaus";
memberArr[7]["Nachname"] = "Bertelmann";
memberArr[7]["Spitzname"] ="Hobi";
memberArr[7]["Datum"] = "07.04.1984";
memberArr[7]["rolle"] = "0";
memberArr[7]["ID"] = "7";

memberArr[8] = new Object();
memberArr[8]["Vorname"] = "Beatrice";
memberArr[8]["Nachname"] = "Breitenfellner";
memberArr[8]["Spitzname"] ="Bea-Büseli";
memberArr[8]["Datum"] = "07.04.1984";
memberArr[8]["rolle"] = "0";
memberArr[8]["ID"] = "8";

memberArr[9] = new Object();
memberArr[9]["Vorname"] = "Luciano";
memberArr[9]["Nachname"] = "Breglia";
memberArr[9]["Spitzname"] ="Luci";
memberArr[9]["Datum"] = "";
memberArr[9]["rolle"] = "0";
memberArr[9]["ID"] = "9";

memberArr[10] = new Object();
memberArr[10]["Vorname"] = "Nicole";
memberArr[10]["Nachname"] = "Brutsche";
memberArr[10]["Spitzname"] ="";
memberArr[10]["Datum"] = "28.12.2004";
memberArr[10]["rolle"] = "0";
memberArr[10]["ID"] = "10";

memberArr[11] = new Object();
memberArr[11]["Vorname"] = "Peter";
memberArr[11]["Nachname"] = "Eichler";
memberArr[11]["Spitzname"] ="";
memberArr[11]["Datum"] = "12.03.2004";
memberArr[11]["rolle"] = "0";
memberArr[11]["ID"] = "11";

memberArr[12] = new Object();
memberArr[12]["Vorname"] = "Selina";
memberArr[12]["Nachname"] = "Girletti";
memberArr[12]["Spitzname"] ="";
memberArr[12]["Datum"] = "26.02.2010";
memberArr[12]["rolle"] = "0";
memberArr[12]["ID"] = "12";

memberArr[13] = new Object();
memberArr[13]["Vorname"] = "Andrea";
memberArr[13]["Nachname"] = "Grässlin";
memberArr[13]["Spitzname"] ="";
memberArr[13]["Datum"] = "24.03.2005";
memberArr[13]["rolle"] = "0";
memberArr[13]["ID"] = "13";

memberArr[14] = new Object();
memberArr[14]["Vorname"] = "Klaus";
memberArr[14]["Nachname"] = "Grässlin";
memberArr[14]["Spitzname"] ="Grässle";
memberArr[14]["Datum"] = "26.02.2010";
memberArr[14]["rolle"] = "0";
memberArr[14]["ID"] = "14";

memberArr[15] = new Object();
memberArr[15]["Vorname"] = "Julian";
memberArr[15]["Nachname"] = "Kall";
memberArr[15]["Spitzname"] ="";
memberArr[15]["Datum"] = "01.09.2006";
memberArr[15]["rolle"] = "0";
memberArr[15]["ID"] = "15";

memberArr[16] = new Object();
memberArr[16]["Vorname"] = "Tobias";
memberArr[16]["Nachname"] = "Kalusok";
memberArr[16]["Spitzname"] ="";
memberArr[16]["Datum"] = "18.02.2011";
memberArr[16]["rolle"] = "0";
memberArr[16]["ID"] = "16";

memberArr[17] = new Object();
memberArr[17]["Vorname"] = "Anika";
memberArr[17]["Nachname"] = "Kasten";
memberArr[17]["Spitzname"] ="";
memberArr[17]["Datum"] = "29.04.2009";
memberArr[17]["rolle"] = "0";
memberArr[17]["ID"] = "17";

memberArr[18] = new Object();
memberArr[18]["Vorname"] = "Julia";
memberArr[18]["Nachname"] = "Krebs";
memberArr[18]["Spitzname"] ="";
memberArr[18]["Datum"] = "";
memberArr[18]["rolle"] = "0";
memberArr[18]["ID"] = "18";

memberArr[19] = new Object();
memberArr[19]["Vorname"] = "Marie";
memberArr[19]["Nachname"] = "Krebs";
memberArr[19]["Spitzname"] ="";
memberArr[19]["Datum"] = "";
memberArr[19]["rolle"] = "0";
memberArr[19]["ID"] = "19";

memberArr[20] = new Object();
memberArr[20]["Vorname"] = "Sabrina";
memberArr[20]["Nachname"] = "Krebs";
memberArr[20]["Spitzname"] ="";
memberArr[20]["Datum"] = "03.07.2005";
memberArr[20]["rolle"] = "0";
memberArr[20]["ID"] = "20";

memberArr[21] = new Object();
memberArr[21]["Vorname"] = "Dennis";
memberArr[21]["Nachname"] = "Krebs - Schriftführer";
memberArr[21]["Spitzname"] ="";
memberArr[21]["Datum"] = "05.02.2007";
memberArr[21]["rolle"] = "0";
memberArr[21]["ID"] = "21";

memberArr[22] = new Object();
memberArr[22]["Vorname"] = "Stefan";
memberArr[22]["Nachname"] = "Lamprecht";
memberArr[22]["Spitzname"] ="Lampi";
memberArr[22]["Datum"] = "05.11.1999";
memberArr[22]["rolle"] = "0";
memberArr[22]["ID"] = "22";

memberArr[23] = new Object();
memberArr[23]["Vorname"] = "Susanne";
memberArr[23]["Nachname"] = "Lamprecht";
memberArr[23]["Spitzname"] ="Susi";
memberArr[23]["Datum"] = "07.04.1984";
memberArr[23]["rolle"] = "0";
memberArr[23]["ID"] = "23";

memberArr[24] = new Object();
memberArr[24]["Vorname"] = "Joachim";
memberArr[24]["Nachname"] = "Leonhardt";
memberArr[24]["Spitzname"] ="Achim";
memberArr[24]["Datum"] = "20.04.2001";
memberArr[24]["rolle"] = "0";
memberArr[24]["ID"] = "24";

memberArr[25] = new Object();
memberArr[25]["Vorname"] = "Sina";
memberArr[25]["Nachname"] = "Steck";
memberArr[25]["Spitzname"] ="";
memberArr[25]["Datum"] = "21.11.2012";
memberArr[25]["rolle"] = "0";
memberArr[25]["ID"] = "25";

memberArr[26] = new Object();
memberArr[26]["Vorname"] = "Sarah";
memberArr[26]["Nachname"] = "Schaffhauser";
memberArr[26]["Spitzname"] ="";
memberArr[26]["Datum"] = "08.05.1998";
memberArr[26]["rolle"] = "0";
memberArr[26]["ID"] = "26";

memberArr[27] = new Object();
memberArr[27]["Vorname"] = "Max";
memberArr[27]["Nachname"] = "Schlager";
memberArr[27]["Spitzname"] ="Mäxle";
memberArr[27]["Datum"] = "";
memberArr[27]["rolle"] = "0";
memberArr[27]["ID"] = "27";

memberArr[28] = new Object();
memberArr[28]["Vorname"] = "Jürgen";
memberArr[28]["Nachname"] = "Zisterer";
memberArr[28]["Spitzname"] ="Zisti";
memberArr[28]["Datum"] = "07.04.1984";
memberArr[28]["rolle"] = "0";
memberArr[28]["ID"] = "28";
