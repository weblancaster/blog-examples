//app js
function showNewsFromYahooAPI() {
	$.ajax({
        url: 'http://query.yahooapis.com/v1/public/yql?q=select%20title%20from%20rss%20where%20url%3D%22http%3A%2F%2Frss.news.yahoo.com%2Frss%2Ftopstories%22&format=json&callback=',
        dataType: 'json'
    }).done(function(data){
    	var
    		query = data.query.results,
        	source = $('#myTemplate').html(),
			compiledTemplate = Handlebars.compile(source),
			result = compiledTemplate(query);

		$('#content').html(result);
    });
}

$(function() {
    showNewsFromYahooAPI();
});