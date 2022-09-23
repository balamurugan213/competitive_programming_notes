class NewNode:

    def __init__(self, value: int):
        self.value = value
        self.next = None


class MyStack:

    def __init__(self):
        self.topVal = None
        self.bottom = None
        self.length = 0

    def push(self, x: int) -> None:
        newNode = NewNode(x)
        if(self.length == 0):
            self.button = newNode
            self.topVal = newNode
        else:
            pointer = self.topVal
            self.topVal = newNode
            self.topVal.next = pointer
        self.length += 1

    def pop(self) -> int:
        if(self.topVal == None):
            return -1
        if(self.topVal == self.bottom):
            self.button = None
        pointer = self.topVal
        self.topVal = self.topVal.next
        self.length -= 1
        return pointer.value

    def top(self) -> int:
        return self.topVal.value

    def empty(self) -> bool:
        return(self.length == 0)


# Your MyStack object will be instantiated and called as such:
obj = MyStack()
obj.push(3)
param_2 = obj.pop()
param_3 = obj.top()
param_4 = obj.empty()
print(param_2, param_3, param_4)
