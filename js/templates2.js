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
									'<td>Jubiläum Ischteiner Gugge</td>'+
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
									'<td>Görwil</td>'+
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
									'<td>Lörrach</td>'+
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
									'<td>Grießen</td>'+
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
								'<p>Herausgeber: <br><br> Mühli-Geischter aus Binzen </p>'+
								'<p> 1. Vorstand <br> Armin Kall <br> Am Sonnenrain 23 <br> 79415 Rheinweiler</p><br>'+
								'<p>Verantwortlich für den Inhalt: <br> Sina Steck & Dennis Krebs'+ 
								'<br>mit tatgräftiger Unterstützung aller Mühli-Geischter </p><br>'+
								'<p> Unsere Postanschrift : <br> Susi Lamprecht <br> Talstr.9 <br> D-79597 Schallbach </p><br>'+
								'<p> E-mail Adresse : <br> '+
								'<a href="mailto:muehligeischter-binzen@gmx.de">muehligeischter-binzen@gmx.de</a></p><br><br>'+
								'<img src="./img/small/Plakette.jpg" width="100" heigth="150"><br><br><br>'+
								'<p> Obwohl die Informationen auf diesem Server jedermann zur Verfügung stehen, <br>'+
								'dürfen die Inhalte und die Bilder nicht andersweitig verwendet werden.</p>'+
								'<p>Sie dürfen nicht: <br> Diese Informationen auf Ihren eigenen Server "spiegeln". <br> '+
								'Texte oder Graphiken ohne schriftliche Zustimmung der Mühli-Geischter vertreten durch den 1.Vorstand vertreiben.<br>'+
								'Texte oder Graphiken auf diesem Server modifizieren oder wiederverwenden.<br>'+
								'Sie dürfen Ausdrucke von Kopien dieser Informationen für Ihren persönlichen Bedarf anfertigen.<br>'+
								'Diesen Server als Referenz in Ihren eigenen Dokumenten und Webseiten aufführen. </p>'+
								'<p>Das Landgericht Hamburg hat mit Urteil vom 12.05.1998 entschieden,<br>'+
								'dass man durch die Anbringung bzw. Ausbringung von Links die Inhalte der gelinkten Seite ggf. mit zu verantworten hat.<br>'+
								'Dies kann - so das Landgericht Hamburg - nur dadurch verhindert werden,<br>'+
								'dass man sich ausdrücklich von den Inhalten der gelinkten Seite, bzw. des gesamten Web´s distanziert.<br>'+
								'Deshalb distanzieren wir uns hiermit ausdrücklich von allen Inhalten aller gelinkten Webseiten <br>'+
								'auf unserer gesamten Website inkl. aller Unterseiten und deren Unterlinks oder andere Weiterleitungsmechanismen.<br>'+
								'Diese Erklärung gilt für alle auf unserer Homepage ausgebrachten Links und für alle Inhalte der Seiten,<br>'+
								'zu denen Links, Banner oder sonstige Verknüpfungen führen. Lesen Sie bitte dazu auch den Hinweis Haftung genau durch. </p><br>'+
								'<p> Haftung: </p>'+
								'<p> 1. Inhalt des Onlineangebotes'+ 
								'Der Autor übernimmt keinerlei Gewähr für die Aktualität, Korrektheit,<br>'+
								'Vollständigkeit oder Qualität der bereitgestellten Informationen. <br>'+
								'Haftungsansprüche gegen den Autor, die sich auf Schäden materieller oder ideeller Art beziehen,<br>'+
								'welche durch die Nutzung oder Nichtnutzung der dargebotenen Informationen bzw. <br> '+
								'durch die Nutzung fehlerhafter und unvollständiger Informationen verursacht wurden sind grundsätzlich ausgeschlossen,<br>'+
								'sofern seitens des Autors kein nachweislich vorsätzliches oder grob fahrlässiges Verschulden vorliegt. <br>'+
								'Alle Angebote sind freibleibend und unverbindlich. Der Autor behält es sich ausdrücklich vor, <br>'+
								'Teile der Seiten oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern, <br>'+
								'zu ergänzen, zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.</p><br>'+
								'<p>2. Verweise und Links </p>'+
								'<p> Bei direkten oder indirekten Verweisen auf fremde Internetseiten ("Links"), <br>'+
								'die außerhalb des Verantwortungsbereiches des Autors liegen, haftet dieser nur dann, <br>'+
								'wenn er von den Inhalten Kenntnis hat und es ihm technisch möglich und zumutbar wäre, <br>'+
								'die Nutzung im Falle rechtswidriger Inhalte zu verhindern. Der Autor erklärt hiermit ausdrücklich,<br>'+
								'dass zum Zeitpunkt der Linksetzung die entsprechenden verlinkten Seiten frei von illegalen Inhalten waren.<br>'+
								'Der Autor erklärt weiterhin, dass er keinerlei Einfluss auf die aktuelle und zukünftige Gestaltung und auf die Inhalte der gelinkten/verknüpften Seiten hat.<br>'+
								'Deshalb distanziert er sich hiermit ausdrücklich von allen Inhalten aller gelinkten /verknüpften Seiten, die nach der Linksetzung verändert wurden.<br>'+
								'Diese Feststellung gilt für alle innerhalb des eigenen Internetangebotes gesetzten Links und Verweise<br>'+
								'sowie für Fremdeinträge in vom Autor eingerichteten Gästebüchern, Diskussionsforen und Mailinglisten.<br>'+
								'Für illegale, fehlerhafte oder unvollständige Inhalte und insbesondere für Schäden,<br>'+
								'die aus der Nutzung oder Nichtnutzung solcherart dargebotener Informationen entstehen,<br>'+
								'haftet allein der Anbieter der Seite, auf welche verwiesen wurde, nicht derjenige,<br>'+
								'der über Links auf die jeweilige Veröffentlichung lediglich verweist. </p><br>'+
								'<p>3. Rechtswirksamkeit dieses Haftungsausschlusses </p>'+
								'<p>Dieser Haftungsausschluss ist als Teil des Internetangebotes zu betrachten, von dem aus auf diese Seite verwiesen wurde.<br>'+
								'Sofern Teile oder einzelne Formulierungen dieses Textes der geltenden Rechtslage nicht, <br>'+
								'nicht mehr oder nicht vollständig entsprechen sollten, bleiben die übrigen Teile des Dokumentes in ihrem Inhalt und ihrer Gültigkeit davon unberührt. </p><br>'+
								'<p>Programmierung und Sitemanagement: </p>'+
								'<p>Sina Steck</p>'+
								'</div>');





















								