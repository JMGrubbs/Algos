from array import array


def func(arry1, arry2):
    med = 0
    fullArry=[]
    i = 0
    j = 0
    while len(fullArry) < len(arry1)+len(arry2):
        try:
            irr = arry1[i]
        except:
            irr = arry1[i-1]

        try:
            jrr = arry2[j]
        except:
            jrr = arry2[j-2]

        if irr < jrr:
            fullArry.append(irr)
            i+=1
        elif irr > jrr:
            fullArry.append(irr)
            j+=1
        elif irr == jrr:
            fullArry.append(irr)
            fullArry.append(jrr)
            i+=1
            j+=1
        print(irr,jrr)


    print(fullArry)
    med = sum(fullArry)/len(fullArry)
    return med




array1 = [1,2,3]
array2 = [4,5,6]
test = func(array1, array2)
print(test)


# Example 1:

# Input: nums1 = [1,3], nums2 = [2]
# Output: 2.00000
# Explanation: merged array = [1,2,3] and median is 2.
# Example 2:

# Input: nums1 = [1,2], nums2 = [3,4]
# Output: 2.50000
# Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 

# Constraints:

# nums1.length == m
# nums2.length == n
# 0 <= m <= 1000
# 0 <= n <= 1000
# 1 <= m + n <= 2000
# -106 <= nums1[i], nums2[i] <= 106