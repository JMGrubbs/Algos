

def evenFibonacciNumbers(array, target):
    array2 = array
    sumArray = []
    index = 2
    num = 0
    while array[index - 1] + array[index - 2] < target:
        num = 0
        num = array[index - 1] + array[index - 2]
        array2.append(num)
        index = index + 1
    for el in array2:
        if el/2 == round(el/2):
            sumArray.append(int(el))
    finalSum = 0
    for el in sumArray:
        finalSum = finalSum + el
    print(finalSum)
    return 'thing'

print(evenFibonacciNumbers([1,2], 4000000))
