if (typeof SP !== 'undefined') {
	var ctx = new SP.ClientContext.get_current();
	var site = ctx.get_site();
	ctx.load(site, 'Url');
	ctx.executeQueryAsync(Function.createDelegate(this, function (sender, args) {
			var url = site.get_url();
			window.location = url + '/_layouts/closeConnection.aspx?loginasanotheruser=true';
		}), Function.createDelegate(this, function (sender, args) {
			alert('Error: ' + args.get_message());
		}));
} else {
	alert('Error: This is not a SharePoint 2010 or 2013 website\nFor more information please visit: https://epandu.wordpress.com/');
	window.location.assign("https://epandu.wordpress.com");
}
