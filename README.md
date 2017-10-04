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
     onReady: function(route, page) { },
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
| templateDir | Directory where your pages are kept | './pages' |
| defaultView | Home page route | 'home' |
| appId | &lt;div&gt; element where you want your pages inserted | 'main-app' |
| onReady | what to do after page is loaded e.g. highlight clicked menu item as in the example | function(route,page){} |
| routes | routes definition in a form {route:"page.html", ...}. A route appears in a menu as: &lt;a href="#route"&gt;  ...| {} |

### Copyright
MIT license. 