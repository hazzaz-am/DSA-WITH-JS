class Node {
	constructor(value) {
		this.value = value;
		this.leftChild = null;
		this.rightChild = null;
	}
}

class BinarySearch {
	constructor() {
		this.root = null;
	}

	addChild(value) {
		const newChild = new Node(value);

		if (!this.root) {
			this.root = newChild;
		} else {
			let currentNode = this.root;
			let added = false;

			while (!added && currentNode) {
				if (currentNode.value === newChild.value) {
					console.log("Duplicate Value Not Allowed");
					return "Duplicate Value Not Allowed";
				}

				if (currentNode.value > newChild.value) {
					if (!currentNode.leftChild) {
						currentNode.leftChild = newChild;
						added = true;
					} else {
						currentNode = currentNode.leftChild;
					}
				} else if (currentNode.value < newChild.value) {
					if (!currentNode.rightChild) {
						currentNode.rightChild = newChild;
						added = true;
					} else {
						currentNode = currentNode.rightChild;
					}
				}
			}
		}
	}
}

const tree = new BinarySearch();
tree.addChild(20);
tree.addChild(10);
tree.addChild(30);
tree.addChild(5);
tree.addChild(15);
tree.addChild(40);
tree.addChild(25);
console.log(tree);
