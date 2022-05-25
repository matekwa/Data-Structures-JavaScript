
//Set are like arrays but do not contain duplicate items and are not in any order.
function mySet() {
	var collection = [];

	//checks if an element exists
	this.has = function(element){
		return (collection.indexOf(element) !== -1);
	}

	//returns values of a collection
	this.values = function(){
		return collection;
	}

	//adds an element to a set
	this.add = function(element) {
		if (!this.has(element)) {
			collection.push(element);
			return true;
		}
		return false;
	}


	//removes an element from stack
	this.remove = function(element){
		if (this.has(element)) {
			var index = collection.indexOf(element);
			collection.splice(index, 1);
			return true;
		}

		return false;
	}

	//this method will return the size of the array

	this.size = function(){
		return collection.length;
	}

	//returns the union of the set with other

	this.union = function(otherSet){
		var unionSet = new mySet();
		var firstSet = this.values();
		var secondSet = otherSet.values();
		firstSet.forEach(function(val){
			unionSet.add(val);
		});

		secondSet.forEach(function(e){
			unionSet.add(e);
		});

		return unionSet;
	}

	//returns intersection of two sets

	this.intersection = function(otherSet) {
		var intersectionset = new mySet();
		var firstSet = this.values();
		firstSet.forEach(function(e){
			if (otherSet.has(e)) {
				intersectionset.add(e);
			};
		});

		return intersectionset;
	}

	//returns the difference of two sets as a new set

	this.difference = function (otherSet) {
		var differenceSet = new mySet();
		var firstSet = this.values();

		firstSet.forEach(function(value){
			if (!otherSet.has(value)) {
				differenceSet.add(value);
			};
		});

		return differenceSet;
	}

	//tests if a set is a subset of another set
	this.subset = function(otherSet){
		var firstSet = this.values();
		return firstSet.every(function(e){
			return otherSet.has(e);
		});
	}
}
	var setA = new mySet();
	var setB = new mySet();

	setA.add("a");
	setB.add("b");
	setB.add("c");
	setB.add("a");
	setB.add("e");

	console.log(setB.intersection(setA).values());