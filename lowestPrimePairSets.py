def getPrime(num):
    if num > 1:
        for i in range(2, int(num/2)+1):
            if (num % i) == 0:
                return None
        else:
            # print(num, "is a prime number")
            return num
    else:
        pass

def comparePrimes(prime, pArray):
    retBool = [True, False]
    index = 0
    for p in pArray:
        p1 = getPrime(int(f"{p}{prime}"))
        p2 = getPrime(int(f"{prime}{p}"))
        print(p1, p2)
        
        if p1 == None:
            return [None, pArray]
        elif p2 == None:
            pArray.remove(p)
            return [None, pArray]
        
        
        index = index+1

    if len(pArray)<1:
        return [prime, pArray]
    
def lowestPrimePairSets():
    primeArray = []
    sumArray = []
    num = 2
    while len(primeArray) < 100:
        prime = getPrime(num)
        if prime != None:
            primeArray.append(prime)
        num = num+1

    # print(primeArray)
    for prime in primeArray:
        adRet = comparePrimes(prime, sumArray)
        sumArray = adRet[1]
        print(sumArray)
        # if adRet != None:
        #     sumArray.append(adRet)
        # if len(sumArray)==7:
        #     print(sumArray)
        #     finalSum = 0
        #     for el in sumArray:
        #         finalSum = finalSum + el
        #     return finalSum
    return 'Broken'


print(lowestPrimePairSets())
