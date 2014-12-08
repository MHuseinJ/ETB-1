 $(function() {
	var availableTags = [
						"DRE",
						"Dasar Rangkaian Elektrik",
						"Elektrik"
						];
	$( "#tags" ).autocomplete({
		source: availableTags
	});

});

function hasilCari(){
	$(".main").html('<table class="table table-condensed"><thead><tr onClick="hasilCari();"><th>Nomor</th><th>Judul</th><th>Penerbit</th><th>Penjual</th><th>Harga</th><th>unduh</th></tr></thead><tbody><tr onClick="location.href = \'http://www.itb.ac.id\'"><td>1</td><td>John</td><td>Carter</td><td>DRE 2</td><td>40000</td><td><a href="bookdre.html">unduh</a></td></tr><tr><td>2</td><td>Peter</td><td>Parker</td><td>DRE</td><td>40000</td><td><a href="bookdre.html">unduh</a></td></tr><tr><td>3</td><td>John</td><td>Rambo</td><td>DRE 3</td><td>40000</td><td><a href="bookdre.html">unduh</a></td></tr></tbody></table>');
}
	

