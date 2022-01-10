# class Solution:
#     def twoSum(self, array, answer):
#         index = 0
#         for elm in array:
#             tempIndex = index +1
#             while tempIndex < len(array):
#                 if elm + array[tempIndex] == answer:
#                     return [elm, array[tempIndex]]
#                 tempIndex = tempIndex + 1
#             index = index + 1
# sol = Solution.twoSum(Solution, [11,7,2,15], 9)

# print(sol)


class Solution:
    def twoSum(self, nums, target):
        objMap = {}
        for el in nums:
            try:
                return [objMap[target - el], nums.index(el)]
            except:
                objMap[el] = nums.index(el)
            print(objMap)


sol = Solution.twoSum(Solution, [2,7,11,15], 9)

print(sol)

