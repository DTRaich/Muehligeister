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
								'Herausgeber: Mühli-Geischter aus Binzen '+
								
								
								
								
								'</div>');								