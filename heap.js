
var minHeap = function () {
	var heap = [null];
	this.add = function(num){
		heap.push(num);
		if (heap.length > 2) {
			let lastIndex = heap.length - 1;
			while(heap[lastIndex] > heap[Math.floor(lastIndex/2)]){
				if (lastIndex >= 1) {
					[heap[lastIndex], heap[Math.floor(lastIndex/2)]] = [heap[Math.floor(lastIndex/2)], heap[lastIndex]];
					if (Math.floor(lastIndex/2) > 1) {
						lastIndex = Math.floor(lastIndex/2);
					} else{
						break;
					}
				}
			}
		}
	};

	this.remove = function(){
		let smallest = heap[1];
		if (heap.length > 2) {
			heap[1] = heap[heap.length - 1];
			heap.splice(heap.length - 1);
			if (heap.length === 3) {
				if (heap[1] > heap[2]) {
					[heap[1], heap[2]] = [heap[2], heap[1]];
				};
				return smallest;
			};
			let i = 1;
			let left = 2 * i;
			let right = 2 * i + 1;
			while(heap[1] > heap[left] || heap[1] > heap[right]){
				if (heap[left] > heap[right]) {
					[heap[1], heap[left]] = [heap[left], heap[1]];
					i = 2 * i;
				} else{
					[heap[1], heap[right]] = [heap[right], heap[1]];
					i = 2 * i + 1;
				};
				left = 2 * i;
				right = 2 * i + 1;
				if (heap[left] == undefined || heap[right] == undefined) {
					break;
				};
			};
		} else if (heap.length === 2) {
			heap.splice(1,1);
		} else{
			return null;
		}
		return smallest;
	};

	this.sort = function(){
		let result = new Array();
		while(heap.length > 1){
			result.push(heap.remove());
		};
		return result;
	};

	const mHeap = new minHeap();
	mHeap.add(2);
	mHeap.add(4);
	mHeap.add(10);
	mHeap.add(1);
	mHeap.add(12);
	mHeap.add(15);
	console.log(mHeap.sort());
}