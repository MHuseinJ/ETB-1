 $(function() {
	var availableTags = [
						"Fundamentals of Electric Circuits",
						"DRE",
						"Dasar Rangkaian Elektrik",
						"Elektrik"
						];
	$( "#tags" ).autocomplete({
		source: availableTags
	});

});

function hasilCari(){
	$(".main").html(' <div class="panel panel-default book2"><div class="panel-body"><div class="col-xs-3"><a href="bookfisika.html" class="thumbnail"><img src="img/dre.png" alt="..."></a></div><div class="col-xs-9"><a href="bookfisika.html"><h3><b>Fundamentals of Electric Circuits</b></h3></a><p class="lead"><small>Pengarang : Alexander Sadiku</small></p><p class="lead"><small>Penerbit : Wesley International International Edition</small></p><p class="lead"><small>Jumlah halaman : 649 halaman</small></p><div class="harga"><h3 class="text-success">Rp 74,999</h3><a href="shoppingcart.html"><h4 class="text-primary"><span class="glyphicon glyphicon-shopping-cart"></span><b> Add to cart</b></h4></a></div></div></div></div><!-- End of Panel -->');
}
	

