// Examining the deps.js and session module from Meteor.
var currentComputation = null;
var nextId = 0;
var toFlush = [];

var contains = function(array, obj) {
	for (var i = 0; i < array.length; i++) {
		if (array[i] === obj) return true;
	}
};

// autorun creates new computation and runs once.
var autorun = function(f) {
	var c = new Computation(f);
	c.compute();
};

// Keeps reference to a function.
var Computation = function(f) {
	this.id = nextId++;
	this.onInvalidateCallbacks = [];
	this.func = f;
};

// While running the function, ensure that the current computation is this.
// After finished running, remove reference to this computation.
Computation.prototype.compute = function() {

};

// Adds to flush list.
// Requires flush.
// Runs any callbacks required.
Computation.prototype.invalidate = function() {
};

// Tracks dependant functions and invalidates upon change.
var Dependency = function() {
	this.dependents = {};
};

// Tracks current computation.
// Adds current computation to list of dependants of this dependency.
// Removes the dependency on invalidation through calback.
Dependency.prototype.depend = function() {

};

// Invalidates all dependants.
Dependency.prototype.changed = function() {
	for (dep in this.dependents) {
		this.dependents[dep].invalidate();
	}
};

// Computes all required computations on next tick.
var requireFlush = function() {
	setTimeout(flush, 0);
};

var flush = function() {
	for (var i = 0; i < toFlush.length; i++) {
		toFlush[i].compute();
	}
	toFlush = [];
};


