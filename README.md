# nepo
#### Nepo, is a phone number checker for Nepali developers which helps to detect the number belongs to nepal sim company.
### Ncell, Ntc, Sky, Utl, Smart etc
![Nepo](https://demo.dineshuprety.com.np/image/nepo.gif)
----

Demo
----
 + [Demo](https://demo.dineshuprety.com.np/examples/index.html)

[![npm version](https://badge.fury.io/js/nepo.svg)](https://www.npmjs.com/package/nepo)

Requirements
-----
  + [jQuery](http://jquery.com/)


Installation
-----

### [NPM](https://www.npmjs.com/package/nepo)
```bash
npm install nepo
```

### [Yarn](https://yarn.pm/nepo)
```bash
yarn add nepo
```

### [CDN - jsDelivr](https://www.jsdelivr.com/package/npm/nepo)
```html
<!-- CSS -->
<link href="https://cdn.jsdelivr.net/npm/nepo/dist/css/nepo.min.css" rel="stylesheet" type="text/css" />

<!-- JavaScript -->
<script src="https://cdn.jsdelivr.net/npm/nepo/dist/js/nepo.min.js" type="text/javascript"></script>
```    

### [CDN - UNPKG](https://unpkg.com/browse/nepo/)
```html
<!-- CSS -->
<link href="https://unpkg.com/nepo/dist/css/nepo.min.css" rel="stylesheet" type="text/css" />

<!-- JavaScript -->
<script src="https://unpkg.com/nepo/dist/js/nepo.min.js" type="text/javascript"></script>
```

Usage
-----

Include CSS
```html
<link href="https://cdn.jsdelivr.net/npm/nepo/dist/css/nepo.min.css" rel="stylesheet" type="text/css" />
```

HTML
```html
<input type="text" id="element" placeholder="Enter your number:" />
```

Include jQuery
```html
<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
```

Include Plugin JS
```html
<script src="https://cdn.jsdelivr.net/npm/nepo/dist/js/nepo.min.js" type="text/javascript"></script>
```
Initialize the Plugin
```js
$('#element').nepo();
```
Initialize the Plugin with options
```js
//you can define own css for sim company logo
$('#element').nepo({
        // Default css class for image
        imageClass: 'nepo-image',
});
```

License
----
MIT

Contribute
----
If you like the project please support with your contribution.

Donate on esewa 9807393225

Thank you and Happy Coding :)



Created with :heart: [FortranCoder](https://dineshuprety.com.np)
