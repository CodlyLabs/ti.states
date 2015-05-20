
function Manager(){
	return {
		currentState: null,
		controller: null,
		styles: null,
		init: function (_controller, state) {
			this.controller = _controller;
			this.currentState = state;
			var path = "/alloy/styles/" + this.controller.__controllerPath;
			this.styles = require(path);
			this.changeToState(state, 0);
		},
		findProperties: function (comp, state) {
			// loop over props to animate
			var props = {};
			var keys = _.keys(comp);
			_.each(keys, function(key){
				if(key.indexOf(state) == 0){
					var nativeProp = key.substring(state.length+1);
					comp['reset_' + key] = comp[nativeProp];
					props[nativeProp] = comp[key];
				}
			});
			return props;
		},
		changeToState: function (state, duration, cb) {
			console.log('Changing to state =', state, 'with duration =', duration);
			this.currentState = state;
			for (var i = 0, comp, style, animation; i < this.styles.length; i++) {
				style = this.styles[i];
				if(style.key.indexOf(":" + state) > 0){
					var id = style.key.replace(":" + state, "").replace("#");
					comp = this.controller.getView(id);

					var props = style.style;
					// add duration
					props.duration = duration;

					animation = Ti.UI.createAnimation(props);
					if(i == 0) {
						animation.addEventListener('complete', cb);
					}
					comp.animate(animation);
				}
				
			};
		}
	}
};

module.exports = new Manager(); 
