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
