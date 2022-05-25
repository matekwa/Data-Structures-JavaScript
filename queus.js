//Pretty much like stacks but uses the rule first in first out

function Queue () {
	var collection = [];

	this.print = function(){
		console.log(collection);
	}

	this.enqueue = function (element) {
		collection.push(element);
	}
	this.deqeue = function(){
		return collection.shift();
	}
	this.front = function(){
		return collection[0];
	}
	this.size = function(){
		return collection.length;
	}
	this.isEmpty = function(){
		return (collection.length === 0)
	}
}


// var myQ = new Queue();
// myQ.enqueue(1);
// myQ.enqueue(2);
// myQ.enqueue(3);
// myQ.print();
// myQ.deqeue();
// myQ.print();
// console.log(myQ.front());


//Priority Queue(Pass an element and a priority)

function priorityQeue(){
	var collection = [];
	this.print = function(){
		console.log(collection)
	};
	this.enqueue = function(element){
		if (this.isEmpty()) {
			collection.push(element);
		} else{
			var added = false;
			for(var i = 0; i < collection.length ; i++){
				if (element[1] < collection[i][1]) {
					collection.splice(i,0,element);
					added = true;
					break;
				}
			}
			if (!added) {
				collection.push(element);
			}
		}
	};

	this.dequeue = function(){
		var value = collection.shift();
		return value[0];
	};
	this.front = function() {
		return collection[0]
	};
	this.size = function() {
		return colection.length;
	};
	this.isEmpty = function() {
		return (collection.length === 0);
	};
}


// var myQ = new priorityQeue();
// myQ.enqueue([1, 2]);
// myQ.enqueue([2, 3]);
// myQ.enqueue([3, 1]);
// console.log(myQ.isEmpty());
