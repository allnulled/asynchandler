# asynchandler

Callback adapter to use in a Promise. 

## Why

To adapt `callbacks paradigm` to `promises paradigm` in a nutshel.

## Installation

`$ npm i -s asynchandler`

## Usage

This example demonstrates how to use `asynchandler` with the node `fs` native module to read and write files using the asynchronous API:

```js
const asynchandler = require("asynchandler");

const example = async function() {
	await new Promise((ok, fail) => {
		fs.writeFile("file.txt", "Contents of the file", "utf8", asynchandler(ok, fail));
	});
	await new Promise(function(ok, fail) {
		fs.readFile("file.txt", "utf8", asynchandler(ok, fail));
	});
};

example();
```

## Source code

The source code of this module is very simple:

```js
module.exports = function(ok, fail) {
	return function(error, data) {
		if (error) {
			fail(error);
			return;
		}
		ok(data);
		return;
	}
};
```

## License

This project is released under `WTFPL` or `What The Fuck Public License`. Do what you want.



