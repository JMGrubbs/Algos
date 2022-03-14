def trappingWater(arr):
    hightArry = [0]
    tempWater = 0
    allWater = 0
    i = 0
    j = 1
    start = i
    while i < len(arr):
        while j < len(arr):
            if arr[start]> arr[j]:
                tempWater = tempWater + (arr[i]-arr[j])
                if arr[hightArry[len(hightArry)-1]] < arr[j]:
                    hightArry.append(j)
            elif arr[start] <= arr[j]:
                allWater = allWater + tempWater
                tempWater = 0
                i = j
                start = j
            if j == len(arr) - 1 and arr[j] <= arr[hightArry[len(hightArry)-1]]:
                j = start+1
                arr[start] -= 1
                tempWater = 0
            else:
                j+= 1
        break
    return allWater

# def trappingWater(arr):
#     if not arr: return 0

#     r = len(arr)-1
#     l = 0
#     maxLeft = arr[l]
#     maxRight = arr[r]

#     res = 0

#     while l < r:
#         if maxLeft < maxRight:
#             l+=1
#             maxLeft = max(arr[l], maxLeft)
#             res += maxLeft - arr[l]
#         else:
#             r-=1
#             maxRight = max(arr[r], maxRight)
#             res+= maxRight-arr[r]
#     return res



answer = trappingWater([0,1,0,2,1,0,1,3,2,1,2,1])
answer2 = trappingWater([4,2,3])
answer3 = trappingWater([0,7,1,4,6])

print('')
print('Expected: ', 6, 1, 7)
print('Returned: ', answer, answer2, answer3)