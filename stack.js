var stack = function(){
	this.storage = {};
	this.count = 0;

	this.push = function(value){
		this.storage[this.count] = value;
		this.count++;
	}


	//delets last element and returns the deleted element
	this.pop = function(){
		if (this.count === 0) {
			return undefined;
		}

		this.count--;
		var result = this.storage[this.count];
		delete this.storage[this.count];
		return result;
	}

	this.size = function(){
		return this.count;
	}


	//returns last elemet
	this.peek = function(){
		var result = this.storage[this.count-1];
		return result;
	}
}



//Examples
var myStack = new stack();

myStack.push("Hello");
myStack.push("Haa");
console.log(myStack.pop());
console.log(myStack.size());