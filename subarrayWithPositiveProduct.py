

# def getMaxLen(array):
#     print(array)
#     try:
#         array = array[0]
#     except:
#         pass
#     l,r = 0,1
#     ret = []
#     holder = [array[l]]
#     m = 0
#     if len(array) > 1:
#         m = array[l]*array[r]
#     else:
#         m=array[0]
#         print(m)
#     if array[0] == 0:
#         l+=1
#         r+=1
#         holder[0] = array[l]
#     elif m < 0 and len(array) == 2:
#         return 1
#     elif len(array) == 2 and m>0:
#             return 2
    
#     # if len(holder)>len(ret):
#     while r < len(array):
#         if len(ret) < len(holder):
#             if m > 0:
#                 ret = holder
#                 holder = []
#             m = 1
#         if array[r] == 0:
#             l+=1
#             r = l+1
#             holder= []
#             holder.append(array[r-1])
#             print(holder)
#         elif array[l] == 0:
#             l+=1
#             r = l+1
#             holder= []
#             holder.append(array[r-1])
#             print(holder)
#         elif r+1 == len(array) and array[r]<0 and m > 0:
#             print('breakHolder',holder, ret)
#             if len(ret) < len(holder):
#                 ret = holder
#             r+1
#             break
#         else:
#             m = m * array[r]
#             holder.append(array[r])
#             r+=1
    
#     print('Holder: ', holder, ret, len(ret))
#     if len(ret) < len(holder) and m > 0:
#         ret = holder
#     if ret == []: ret.append(0)
#     if ret[0] == 0: return 0
#     return len(ret)

def getMaxLen(array):
    ret = 0
    sub = []
    s = []
    for count, value in enumerate(array):
        print(count, value)
        print(sub, s)
        if value == 0:
            sub.append(s)
            s = []
        s.append(value)
    return ret


ans = getMaxLen([1,-2,-3,4])
print('')
ans2 = getMaxLen([0,-2,-3,4])
print('')
ans3 = getMaxLen([-1,2,3,0,4,-1])
print('')
ans4 = getMaxLen([0,1,-2,-3,-4])
print('')
ans5 = getMaxLen([-1, 2])
print('')
ans6 = getMaxLen([0,0,0,0,0,0,0,0,0])
print('')
ans7 = getMaxLen([-1])
print('')
ans8 = getMaxLen([[-16,0,-5,2,2,-13,11,8]])
print('')
print('Retruned: ',ans, ans2, ans3, ans4, ans5, ans6, ans7, ans8)
print('Expected: ',4, 3, 2, 3,1, 0,0, 6)

