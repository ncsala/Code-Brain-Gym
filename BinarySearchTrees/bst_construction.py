class BST:
  def __init__(self, value):
    self.root = value
    self.right = None
    self.left = None
  
  def __repr__(self):
    return f"BST(root={self.root}, left={self.left}, right={self.right})"
  
  def insert(self, value):
    if value > self.root:
      if self.right is None:
        self.right = BST(value)
      else:
        self.right.insert(value)
    elif value < self.root:
      if self.left is None:
        self.left = BST(value)
      else:
        self.left.insert(value)
        

bst = BST(2)
bst.insert(15)
bst.insert(5)
bst.insert(12)
bst.insert(3)

print(bst)