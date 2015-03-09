# UI States Manager for Appcelerator Titanium

UIStatesManager is a component that enables you define states for your user interface components. It changes the properties from one state to another with smooth ease animation. All you need is to define state specific styles and UIStatesManager will do the trasition automatically. 


![enter image description here](https://raw.githubusercontent.com/CodlyLabs/ti.states/master/images/preview.gif)


## Quick Start

### Get it 
Add `lib/ti.states.js` to your  lib folder inside your project. 

### Use it
First you have to add state specific styles to your tss like this:

``` js
"#view": {
	backgroundColor: "red"
}

"#view:state1": {
	top: '80%',
	right: '10%',
	width: '20%',
	height: '13%'
}

"#view:state2": {
	top: '25%',
	right: '25%',
	width: '50%',
	height: '50%'
}
```

Then require and initalize ti.states in your controller
``` js
var stateManager = require('ti.states');
stateManager.init($, "state1"); // initalize with current controller, default state
```

Then you can easily change your UI to any of your states

``` js
/***
* state: the new state
* duration: animation duration time in milliseconds
* callback: to be called after animation complete
***/
stateManager.changeToState('state2', 500, function(){
	// animations is done
});
```
Code and documentation copyright 2015 Codly, Inc. Code released under the [MIT license](https://github.com/CodlyLabs/ti.states/blob/master/LICENSE).
