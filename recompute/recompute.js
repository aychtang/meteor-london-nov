// Examining the deps.js and session module from Meteor.
var currentComputation = null;
var nextId = 0;
// var toFlush = [];

// var requireFlush = function() {
// 	setTimeout(flush, 0);
// };

// var flush = function() {
// 	for (var i = 0; i < toFlush.length; i++) {
// 		toFlush[i].compute();
// 	}
// 	toFlush = [];
// };

var contains = function(array, obj) {
	for (var i = 0; i < array.length; i++) {
		if (array[i] === obj) return true;
	}
};

var Session = {
	keys: {},
	keyDeps: {}
};

Session.get = function(key) {

};

Session.ensureDep = function(key) {
	// Ensure dependency exists
	if (!this.keyDeps[key]) {
		this.keyDeps[key] = new Dependency();
	}
};

Session.set = function(key, value) {
};

var Computation = function(f) {
	this.id = nextId++;
	this.func = f;
};

Computation.prototype = {
	compute: function() {
		// sets current computation and runs function.
	},
	invalidate: function() {
		// Adds this to flush list. Calls requireflush and runs any callbacks required.
	}
};

// Tracks dependant functions and invalidates upon change.
var Dependency = function() {
	this.dependents = {};
};

Dependency.prototype = {
	depend: function() {
		// Registers the current computation as a dependant.
		// Adds callback to remove from dependants on invalidation.
	},
	changed: function() {
		// Invalidates all dependants.
	}
};

// autorun creates new computation and runs once.
autorun = function(f) {
	var c = new Computation(f);
	c.compute();
};

autorun(function() {
	doSomething(session.get('number'));
})
