
# def lengthOfLongestSubstring(s):
#     print(s)
#     retLength = 0
#     retArray = []
#     tempArr = []
#     i = 0
#     while i < len(s):
#         for j in s[i:len(s)]:
#             if tempArr.__contains__(j):
#                 if len(retArray) < len(tempArr):
#                     retArray = tempArr
#                 tempArr = []
#                 print(retArray)
#                 break
#             else:
#                 tempArr.append(j)
#                 print(j)
#         i = i + 1
#         if len(s) == 1:
#             retArray = s

#     retLength = len(retArray)
#     return retLength

def lengthOfLongestSubstring(s):
    chars = [0] * 128
    left = right = 0

    res = 0
    while right < len(s):
        r = s[right]
        chars[ord(r)] += 1
        print(chars[ord(r)])
        while chars[ord(r)] > 1:
            print('l', chars[ord(l)])

            l = s[left]
            chars[ord(l)] -= 1
            left += 1
        print(res, right, left)
        res = max(res, right - left + 1)
        print(res)
        right += 1
    print('')
    return res


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

print('Output: ', answer1,answer2,answer3,answer4, answer5)
print('Expected: ',1,2,3,3,5)