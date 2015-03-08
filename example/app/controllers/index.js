var stateManager = require('ti.states'),
	state = "state1";

stateManager.init($, state);

$.index.open();

console.log()

function onClick () {
	state == "state1"? state = "state2": state = "state1";
	stateManager.changeToState(state,500);
}	
