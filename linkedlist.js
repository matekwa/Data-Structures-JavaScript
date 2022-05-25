//Linked list has nodes, each node having an info and a link to the next node

var linkedList = function(){
	var length = 0;
	var head = null;

	var Node = function(element) {
		this.element = element;
		this.next = null;
	}

	this.size = function() {
		return length;
	};

	var head = function () {
		return head;
	};

	this.add= function(element){
		var node = new Node(element);
		if (this.head === null) {
			head = null;
		} else{
			var currentNode = head;
			while(currentNode.next){
				currentNode = currentNode.next;
			}
				currentNode.next = node;
		}
				length++;
	};

	this.remove = function(element){
		var currentNode = head;
		var previousNode;
		if (currentNode.element === element) {
			head = currentNode.next;
		} else{
			while(currentNode.element !== element){
				previousNode = currentNode;
				currentNode = currentNode.next;
			}
			previousNode.next = currentNode.next;
		}
		length--;
	};

	this.isEmpty = function(){
		return (length === 0);
	};

	this.indexOf = function (element) {
		var currentNode = head;
		var index = -1;

		while(currentNode){
			index++;
			if (currentNode.element === element) {
				return index;
			}
			currentNode = currentNode.next;
		}
		return -1;
	};

	this.elementAt = function (index) {
		var currentNode = head;
		var count = 0;
		while(count < index){
			count++;
			currentNode = currentNode.next;
		}
		return currentNode.element;
	};

	this.addAt = function (index, element) {
		var currentNode = head;
		var node = new Node(element);
		var currentIndex = 0;
		var previousNode;

		if (index > length) {
			return false;
		}
		if (index === 0) {
			node.next = currentNode;
			head = node;
		} else{
			while(currentIndex < index){
				currentIndex++;
				previousNode = currentNode;
				currentNode = currentNode.next;
			}
			node.next = currentNode;
			previousNode.next = node;
		}
		length++;
	};
	this.removeAt = function(index){
		var currentNode = head;
		var currentIndex = 0;
		var previousNode;
		if (index >= length || index < 0) {
			return null;
		}
		if (index === 0) {
			head = currentNode.next;
		} else{
			while(currentIndex < index){
				currentIndex++;
				previousNode = currentNode;
				currentNode = currentNode.next;
			}
			previousNode.next = currentNode.next;
		}
		length--;
		return currentNode.element;
	}


}

var conga = new linkedList();
conga.add("Ronald");
conga.add("Rabbit");
conga.add("Cow");
conga.add("Tesla");
conga.addAt(2,"Lambo");
console.log(conga.elementAt(2));
