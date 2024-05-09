class BST:
  def __init__(self, value):
    self.root = value
    self.right = None
    self.left = None
  
  def __repr__(self):
    return f"BST(root={self.root}, left={self.left}, right={self.right})"

bst1 = BST(2)

print(bst1)