//Templates and Gobal-Arrays
// ----------------------------------TEMPLATES---------------------------

var datesTemplate =_.template('<div class="panel panel-default" >'+
								'<div class="panel-heading panel-title" style="text-align:center">Fastnachts Termine</div><br>'+
								'<table class="table table-striped table-hover table-bordered" style="width:60%; margin-left:21%;">'+
								'<tr>'+
									'<th>Datum</th>'+
									'<th>Ort</th>'+
									'<th>Veranstaltung</th>'+
								'</tr>'+
								'<tbody>'+
								'<tr>'+
									'<td>11.01.2014</td>'+
									'<td>Istein</td>'+
									'<td>Jubil�um Ischteiner Gugge</td>'+
								'</tr>'+
								'<tr>'+
									'<td>18.01.2014</td>'+
									'<td>Haltingen</td>'+
									'<td>Guggeball</td>'+
								'</tr>'+
								'<tr>'+
									'<td>25.01.2014</td>'+
									'<td>Bollschweil</td>'+
									'<td>Nachtumzug</td>'+
								'</tr>'+
								'<tr>'+
									'<td>07.02.2014</td>'+
									'<td>Neuenburg</td>'+
									'<td>Narrentreffen</td>'+
								'</tr>'+
								'<tr>'+
									'<td>08.02.2014</td>'+
									'<td>G�rwil</td>'+
									'<td>Nachtumzug</td>'+
								'</tr>'+
								'<tr>'+
									'<td>15.02.2014</td>'+
									'<td>Binzen</td>'+
									'<td>Zunftabend</td>'+
								'</tr>'+
								'<tr>'+
									'<td>22.02.2014</td>'+
									'<td>Wollbach</td>'+
									'<td>Narrentreffen</td>'+
								'</tr>'+
								'<tr>'+
									'<td>23.02.2014</td>'+
									'<td>Binzen</td>'+
									'<td>Umzug</td>'+
								'</tr>'+
								'<tr>'+
									'<td>01.03.2014</td>'+
									'<td>L�rrach</td>'+
									'<td>Guggeexplosion</td>'+
								'</tr>'+
								'<tr>'+
									'<td>01.03.2014</td>'+
									'<td>Marzell</td>'+
									'<td>Nachtumzug</td>'+
								'</tr>'+
								'<tr>'+
									'<td>02.03.2014</td>'+
									'<td>Kandern</td>'+
									'<td>Umzug</td>'+
								'</tr>'+
								'<tr>'+
									'<td>03.03.2014</td>'+
									'<td>Grie�en</td>'+
									'<td>Umzug</td>'+
								'</tr>'+
								'<tr>'+
									'<td>08.03.2014</td>'+
									'<td>Neuenweg</td>'+
									'<td>Freinacht</td>'+
								'</tr>'+
								'<tr>'+
									'<td>09.03.2014</td>'+
									'<td>Neuenweg</td>'+
									'<td>Umzug</td>'+
								'</tr>'+
								'</table><br><br><br>'+
								'</div>');
								
var impressumTemplate = _.template('<div class="panel panel-default" >'+
								'<div class="panel-heading panel-title" style="text-align:center">Impressum</div><br>'+
								'<p>Herausgeber: <br><br> M�hli-Geischter aus Binzen </p>'+
								'<p> 1. Vorstand <br> Armin Kall <br> Am Sonnenrain 23 <br> 79415 Rheinweiler</p><br>'+
								'<p>Verantwortlich f�r den Inhalt: <br> Sina Steck & Dennis Krebs'+ 
								'<br>mit tatgr�ftiger Unterst�tzung aller M�hli-Geischter </p><br>'+
								'<p> Unsere Postanschrift : <br> Susi Lamprecht <br> Talstr.9 <br> D-79597 Schallbach </p><br>'+
								'<p> E-mail Adresse : <br> '+
								'<a href="mailto:muehligeischter-binzen@gmx.de">muehligeischter-binzen@gmx.de</a></p><br><br>'+
								'<img src="./img/small/Plakette.jpg" width="100" heigth="150"><br><br><br>'+
								'<p> Obwohl die Informationen auf diesem Server jedermann zur Verf�gung stehen, <br>'+
								'd�rfen die Inhalte und die Bilder nicht andersweitig verwendet werden.</p>'+
								'<p>Sie d�rfen nicht: <br> Diese Informationen auf Ihren eigenen Server "spiegeln". <br> '+
								'Texte oder Graphiken ohne schriftliche Zustimmung der M�hli-Geischter vertreten durch den 1.Vorstand vertreiben.<br>'+
								'Texte oder Graphiken auf diesem Server modifizieren oder wiederverwenden.<br>'+
								'Sie d�rfen Ausdrucke von Kopien dieser Informationen f�r Ihren pers�nlichen Bedarf anfertigen.<br>'+
								'Diesen Server als Referenz in Ihren eigenen Dokumenten und Webseiten auff�hren. </p>'+
								'<p>Das Landgericht Hamburg hat mit Urteil vom 12.05.1998 entschieden,<br>'+
								'dass man durch die Anbringung bzw. Ausbringung von Links die Inhalte der gelinkten Seite ggf. mit zu verantworten hat.<br>'+
								'Dies kann - so das Landgericht Hamburg - nur dadurch verhindert werden,<br>'+
								'dass man sich ausdr�cklich von den Inhalten der gelinkten Seite, bzw. des gesamten Web�s distanziert.<br>'+
								'Deshalb distanzieren wir uns hiermit ausdr�cklich von allen Inhalten aller gelinkten Webseiten <br>'+
								'auf unserer gesamten Website inkl. aller Unterseiten und deren Unterlinks oder andere Weiterleitungsmechanismen.<br>'+
								'Diese Erkl�rung gilt f�r alle auf unserer Homepage ausgebrachten Links und f�r alle Inhalte der Seiten,<br>'+
								'zu denen Links, Banner oder sonstige Verkn�pfungen f�hren. Lesen Sie bitte dazu auch den Hinweis Haftung genau durch. </p><br>'+
								'<p> Haftung: </p>'+
								'<p> 1. Inhalt des Onlineangebotes'+ 
								'Der Autor �bernimmt keinerlei Gew�hr f�r die Aktualit�t, Korrektheit,<br>'+
								'Vollst�ndigkeit oder Qualit�t der bereitgestellten Informationen. <br>'+
								'Haftungsanspr�che gegen den Autor, die sich auf Sch�den materieller oder ideeller Art beziehen,<br>'+
								'welche durch die Nutzung oder Nichtnutzung der dargebotenen Informationen bzw. <br> '+
								'durch die Nutzung fehlerhafter und unvollst�ndiger Informationen verursacht wurden sind grunds�tzlich ausgeschlossen,<br>'+
								'sofern seitens des Autors kein nachweislich vors�tzliches oder grob fahrl�ssiges Verschulden vorliegt. <br>'+
								'Alle Angebote sind freibleibend und unverbindlich. Der Autor beh�lt es sich ausdr�cklich vor, <br>'+
								'Teile der Seiten oder das gesamte Angebot ohne gesonderte Ank�ndigung zu ver�ndern, <br>'+
								'zu erg�nzen, zu l�schen oder die Ver�ffentlichung zeitweise oder endg�ltig einzustellen.</p><br>'+
								'<p>2. Verweise und Links </p>'+
								'<p> Bei direkten oder indirekten Verweisen auf fremde Internetseiten ("Links"), <br>'+
								'die au�erhalb des Verantwortungsbereiches des Autors liegen, haftet dieser nur dann, <br>'+
								'wenn er von den Inhalten Kenntnis hat und es ihm technisch m�glich und zumutbar w�re, <br>'+
								'die Nutzung im Falle rechtswidriger Inhalte zu verhindern. Der Autor erkl�rt hiermit ausdr�cklich,<br>'+
								'dass zum Zeitpunkt der Linksetzung die entsprechenden verlinkten Seiten frei von illegalen Inhalten waren.<br>'+
								'Der Autor erkl�rt weiterhin, dass er keinerlei Einfluss auf die aktuelle und zuk�nftige Gestaltung und auf die Inhalte der gelinkten/verkn�pften Seiten hat.<br>'+
								'Deshalb distanziert er sich hiermit ausdr�cklich von allen Inhalten aller gelinkten /verkn�pften Seiten, die nach der Linksetzung ver�ndert wurden.<br>'+
								'Diese Feststellung gilt f�r alle innerhalb des eigenen Internetangebotes gesetzten Links und Verweise<br>'+
								'sowie f�r Fremdeintr�ge in vom Autor eingerichteten G�steb�chern, Diskussionsforen und Mailinglisten.<br>'+
								'F�r illegale, fehlerhafte oder unvollst�ndige Inhalte und insbesondere f�r Sch�den,<br>'+
								'die aus der Nutzung oder Nichtnutzung solcherart dargebotener Informationen entstehen,<br>'+
								'haftet allein der Anbieter der Seite, auf welche verwiesen wurde, nicht derjenige,<br>'+
								'der �ber Links auf die jeweilige Ver�ffentlichung lediglich verweist. </p><br>'+
								'<p>3. Rechtswirksamkeit dieses Haftungsausschlusses </p>'+
								'<p>Dieser Haftungsausschluss ist als Teil des Internetangebotes zu betrachten, von dem aus auf diese Seite verwiesen wurde.<br>'+
								'Sofern Teile oder einzelne Formulierungen dieses Textes der geltenden Rechtslage nicht, <br>'+
								'nicht mehr oder nicht vollst�ndig entsprechen sollten, bleiben die �brigen Teile des Dokumentes in ihrem Inhalt und ihrer G�ltigkeit davon unber�hrt. </p><br>'+
								'<p>Programmierung und Sitemanagement: </p>'+
								'<p>Sina Steck</p>'+
								'</div>');





















								