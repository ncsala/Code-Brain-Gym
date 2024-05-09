# O (n^2) time | O(n) space
def right_smaller_than(array):
    result = []
    
    for i in range(len(array)):
        count_smaller = 0
        
        for j in range(i + 1, len(array)):
            if array[i] > array[j]:
                count_smaller += 1
        
        result.append(count_smaller)
    
    return result

print(right_smaller_than([8,5,11,-1,3,4,2]))


# 
def right_smaller_than2(array):
  if len(array) == 0:
    return []
  
    lastIndex = len(array) - 1
    bst = special_BST(array[lastIdx], lastIdx, 0)
    



class special_BST():
  def __init__(self, value, idx, numSmallerAtInsertTime):
    pass
    
    
    
    