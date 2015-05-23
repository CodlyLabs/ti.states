/**
 * Run animations easily, just with tss files
 *
 * @auther Mohamed Shaban <mohamed.shaban@codly.io>
 *
 * @param {object}	controller		set of properties from tss file
 */
module.exports = function(controller) {

	var currentState = null,
	    path = "/alloy/styles/" + controller.__controllerPath,
	    styles = require(path);

	/**
	 * Run animation function
	 *
	 * @param string	state		set of properties from tss file
	 * @param integer	duration	anomation duration
	 * @param function	cb			callback function after anomation completed
	 */
	this.changeToState = function(state, duration, cb) {
		console.log('Changing to state =', state, 'with duration =', duration);
		currentState = state;
		var i = 0,
		    comp,
		    style,
		    animation,
		    id = '',
		    props = {},
		    cbAssigned = false;
		for (i; i < styles.length; i += 1) {
			style = styles[i];
			if (style.key.indexOf(":" + state) > 0) {
				id = style.key.replace(":" + state, "").replace("#");

				comp = controller.getView(id);

				// set style and duration
				props = {};
				_.extend(props, style.style, {
					duration : duration
				});

				animation = Ti.UI.createAnimation(props);

				// Make sure this is 1st time to assign callback
				if (!cbAssigned && cb) {
					cbAssigned = true;
					animation.addEventListener('complete', cb);
				}
				try {
					comp.animate(animation);
				} catch (e) {
					Ti.API.warn("Can't catch #" + id + " to animate");
				}
			}

		}
	};

	/**
	 * Get last called state
	 */
	this.getLastState = function() {
		return this.currentState;
	};
};
