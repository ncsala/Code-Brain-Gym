// Recursive Solution
// Average => TIME = O(log(n)) | SPACE = O(log(n))
// Worst => TIME = O(n) | SPACE = O(n)
// -------------------------------------
// Iterative Solution
// Average => TIME = O(log(n)) | SPACE = O(1)
// Worst => TIME = O(n) | SPACE = O(1)

class BST {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}

	insert(value) {
		const side = value < this.value ? 'left' : 'right';

		if (this[side] === null) {
			this[side] = new BST(value);
		} else {
			this[side].insert(value);
		}
		return this;
	}

	remove(value, parent = null) {
		if (value < this.value) {
			if (this.left !== null) this.left.remove(value, this);
		} else if (value > this.value) {
			if (this.right !== null) this.right.remove(value, this);
		} else {
			if (this.left !== null && this.right !== null) {
				this.value = this.right.getMinValue();
				this.right.remove(this.value, this);
			} else if (parent === null) {
				if (this.left !== null || this.right !== null) {
					this.removeRootNode();
				} else {
					return null;
				}
			} else {
				this.removeChildNode(parent);
			}
		}
		return this;
	}

	removeRootNode() {
		if (this.left !== null && this.right !== null) {
			this.value = this.right.getMinValue();
			this.right.remove(this.value, this);
		} else if (this.left !== null) {
			this.replaceNodeData(this.left);
		} else if (this.right !== null) {
			this.replaceNodeData(this.right);
		}
	}

	removeChildNode(parent) {
		if (parent.left === this) {
			parent.left = this.left !== null ? this.left : this.right;
		} else if (parent.right === this) {
			parent.right = this.right !== null ? this.right : this.left;
		}
	}

	replaceNodeData(node) {
		this.value = node.value;
		this.left = node.left;
		this.right = node.right;
	}

	getMinValue() {
		return this.left === null ? this.value : this.left.getMinValue();
	}

	contains(value) {
		if (value === this.value) return true;
		if (value < this.value) {
			return this.left?.contains(value) || false;
		} else if (value > this.value) {
			return this.right?.contains(value) || false;
		}
	}
}

const root = new BST(10);
root.insert(8);
root.insert(11);
console.log(root);

module.exports = {
	BST,
};
