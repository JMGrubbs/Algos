



def isPrime(num):
    # To take input from the user
    #num = int(input("Enter a number: "))

    # define a flag variable
    flag = False

    # prime numbers are greater than 1
    if num > 1:
        # check for factors
        for i in range(2, num):
            if (num % i) == 0:
                # if factor is found, set flag to True
                flag = True
                # break out of loop
                break

        # check if flag is True
        if flag == False:
            return False;
        else:
            return True;

def getAllPrimes():
    array = range(1, 100);
    allPrimes = []
    for i in array:
        if isPrime(i) == False:
            allPrimes.append(i)
        else:
            pass
    print(allPrimes)

getAllPrimes()



