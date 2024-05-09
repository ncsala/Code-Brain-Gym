def rightSmallerThan(array):
    result = []
    
    for i in range(len(array)):
        count_smaller = 0
        
        for j in range(i + 1, len(array)):
            if array[i] > array[j]:
                count_smaller += 1
        
        result.append(count_smaller)
    
    return result

print(rightSmallerThan([8,5,11,-1,3,4,2]))