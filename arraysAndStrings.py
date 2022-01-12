
def lengthOfLongestSubstring(s):
    print(s)
    retLength = 0
    retArray = []
    tempArr = []
    i = 0
    while i < len(s):
        for j in s[i:len(s)]:
            if tempArr.__contains__(j):
                if len(retArray) < len(tempArr):
                    retArray = tempArr
                tempArr = []
                print(retArray)
                break
            else:
                tempArr.append(j)
                print(j)
        i = i + 1
        if len(s) == 1:
            retArray = s

    retLength = len(retArray)
    return retLength

# def lengthOfLongestSubstring(s):
#     chars = [0] * 128
#     left = right = 0

#     res = 0
#     while right < len(s):
#         r = s[right]
#         chars[ord(r)] += 1
#         print(chars[ord(r)])
#         while chars[ord(r)] > 1:
#             print('l', chars[ord(l)])

#             l = s[left]
#             chars[ord(l)] -= 1
#             left += 1
#         print(res, right, left)
#         res = max(res, right - left + 1)
#         print(res)
#         right += 1
#     print('')
#     return res

def lengthOfLongestSubstring(s):
    print(s)
    retArry = []
    tempArry = []
    i = 0
    j = 1
    if len(s) > 1:
        while i < len(s):
            while j < len(s):
                if s[j-1] == s[j]:
                        i = j
                        tempArry = s[i]
                        j = j + 1
                elif tempArry.__contains__(s[j]):
                    i = i + 1
                    tempArry = s[i:j]
                else:
                    j = j + 1
                    tempArry = s[i:j]
                if len(retArry) < len(tempArry):
                        retArry = tempArry
            break
        print(retArry)
        return len(retArry)
    return len(s)


answer1 = lengthOfLongestSubstring(" ")
print('')
answer2 = lengthOfLongestSubstring("au")
print('')
answer3 = lengthOfLongestSubstring("pwwkew")
print('')
answer4 = lengthOfLongestSubstring("dvdf")
print('')
answer5 = lengthOfLongestSubstring("anviaj")
print('')
answer6 = lengthOfLongestSubstring("ckilbkd")
print('')
answer7 = lengthOfLongestSubstring("aabaab!bb")
print('')
answer8 = lengthOfLongestSubstring("bbbbbbbb")
print('')

print('Output: ', answer1,answer2,answer3,answer4, answer5, answer6, answer7, answer8)
print('Expected: ',1,2,3,3,5,5,3,1)