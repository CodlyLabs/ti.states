var Manager = require('ti.states'),
    stateManager = new Manager($),
    state = "state1";

$.index.open();

function onClick() {
	state = state === "state1" ? "state2" : "state1";
	stateManager.changeToState(state, 500);
}
