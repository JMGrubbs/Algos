

def minSubArrayLen(target: int, nums):
    total = 0
    count = 0
    curtotal = 0
    curcount = 0
    holder = 0 
    i=0
    while i < len(nums):
        curtotal+=nums[i]
        if curtotal > target:
            curtotal = 0
            curcount = 0
            i = holder+1
            holder = i
        if curtotal == target:
            if count == 0:
                count = curcount
            if curcount <= count:
                total = curtotal
                count = curcount
        
        curcount+=1
        print(nums[i])
        print(count, curcount)
        print(total, curtotal)
        print('')

        i+=1
    return count


# print(minSubArrayLen(7,[2,3,1,2,4,3]))
print(minSubArrayLen(11,[1,2,3,4,5]))