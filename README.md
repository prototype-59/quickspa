# quickspa - jQuery plugin for quick Single Page Application building

jQuery plugin for quick building a Single Page Application

## Example and usage

### HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
   
<script src="js/jquery-3.2.1.min.js"></script>
<script src="js/quickspa.js"></script>

<script type="text/javascript">
$(document).ready(function() {
	var app = $.quickspa({
		templateDir  : './pages/',
		defaultView  : 'home',
		appId: 'main-app',
		routes:{ about: "about.html", home: "home.html"}
	});	
	app.run();


});
</script>
</head>

<body>
	<div><a href="#home">Home</a> | <a href="#about">About</a> </div>

	<div id="main-app"></div>
</body>
</html>

```

Plugin options:

| Option | Description | Default |
|---|---|---|
| templateDir | directory where your pages are kept | './pages' |
| defaultView | home page | 'home' |
| appId | div element where you want your pages inserted | 'main-app' |
| routes | route definition in a form {hash_link:"page_name", ...} hash_link appears as <a href="#hash_link"> ...| empty |

### Copyright
MIT license. 