const { BST } = require('./BSTConstruction');

// Recursive Solution
// Average => TIME = O(log(n)) | SPACE = O(log(n))
// Worst => TIME = O(n) | SPACE = O(n)
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
const root = new BST(10)
  .insert(5)
  .insert(15)
  .insert(2)
  .insert(5)
  .insert(13)
  .insert(22)
  .insert(1)
  .insert(14);

console.log(root);

const closestValue = findClosestValueInBstIterative(root, 22);
console.log('El valor más cercano a 22 en el árbol es:', closestValue);
