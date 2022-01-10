

def sumOfMultiples(array, target):
    retArray = []
    for el in array:
        index = 1
        while index * el < target:
            if retArray.__contains__(index * el):
                print('Number already in array')
            else:
                retArray.append(index * el)
            index = index + 1
    finalSum = 0
    for el in retArray:
        finalSum = finalSum + el
    return finalSum



print(sumOfMultiples([3,5], 1000))
