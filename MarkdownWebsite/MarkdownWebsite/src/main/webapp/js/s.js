var converter = new Showdown.converter();

$(document).ready(function(){
	$('textarea.markdown').each(function() {
		var html=$(this).val();
		html=html.replace(/\\/g,"\\\\");
		html=html.replace(/\_/g,"\\\_");
		html=converter.makeHtml(html);
		$(this).after(html);
		$(this).remove();
	});
});

// If you have any problems, please contact sifywmeta@gmail.com
