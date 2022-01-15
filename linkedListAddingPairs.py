
class Node:
    def __init__(self, data=None):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = Node()

    def append(self, elm):
        new_node = Node(elm)
        currentNode = self.head
        while currentNode.next!=None:
            currentNode = currentNode.next
        currentNode.next = new_node

    def index(self, i):
        cur_index = 0
        currentNode = self.head
        while currentNode.next != None:
            if currentNode.data == i:
                return cur_index - 1
            else:
                currentNode = currentNode.next
                cur_index = cur_index + 1
        print(TypeError(f"{i} Index out of rang"))

    def display(self):
        ret = []
        currentNode = self.head
        while currentNode.next!=None:
            currentNode = currentNode.next
            ret.append(currentNode.data)
        return ret

class Solution:
    def addTwoNumbers():
    # def addTwoNumbers(self, l1: node, l2: node):
        newNode = LinkedList()
        newNode.append('j')
        newNode.append('o')
        newNode.append('h')
        newNode.append('n')
        index = newNode.index('o')
        temp = newNode.display()
        print(temp, index)

Solution.addTwoNumbers()



# ans1 = addTwoNumbers({'l1':[2,4,3]}, {'l2':[5,6,4]})

# print('answers: ', ans1)
# print('Expected: ', [7,0,8])
# [2,4,3]
# [5,6,4]