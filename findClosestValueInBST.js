const { BST } = require('./BST.js');
// Recursive Solution
// Average: O(log(n) time | o(log(n) space))
// Worst: 0(n) time | O(n) space
function findClosestValueInBst(tree, target, closest = Infinity) {
	if (tree === null) {
		return closest;
	}

	if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
		closest = tree.value;
	}

	if (target < tree.value) {
		return findClosestValueInBst(tree.left, target, closest);
	} else if (target > tree.value) {
		return findClosestValueInBst(tree.right, target, closest);
	} else {
		return closest;
	}
}

// Iterative Solution
function findClosestValueInBstIterative(tree, target, closest = Infinity) {
	let currentNode = tree;
	while (currentNode !== null) {
		if (Math.abs(target - closest) > Math.abs(target - currentNode.value)) {
			closest = currentNode.value;
		}

		if (target < currentNode.value) {
			currentNode = currentNode.left;
		} else if (target > currentNode.value) {
			currentNode = currentNode.right;
		} else {
			break;
		}
	}
	return closest;
}

// Creación del árbol
const root = new BST(10);
root.insert(5);
root.insert(15);
root.insert(2);
root.insert(5);
root.insert(13);
root.insert(22);
root.insert(1);
root.insert(14);
console.log(root);
root.printTree();

const closestValue = findClosestValueInBstIterative(root, 22);
console.log('El valor más cercano a 22 en el árbol es:', closestValue);
