import sys

input_text=sys.stdin.readline().rstrip()
stack=[]
result=[]

for i in range(len(input_text)):
    if input_text[i].isalpha():
        result.append(input_text[i])
    else:
        if input_text[i]=="*" or input_text[i]=="/":
            while stack and (stack[-1]=="*" or stack[-1]=="/"):
                temp=stack.pop()
                result.append(temp)
            stack.append(input_text[i])
        elif input_text[i]=='-' or input_text[i]=="+":
            while stack and stack[-1]!="(":
                temp=stack.pop()
                result.append(temp)
            stack.append(input_text[i])
        elif input_text[i]=="(":
            stack.append(input_text[i])
        else:
            while stack and stack[-1]!="(":
                temp=stack.pop()
                result.append(temp)
            stack.pop()

while stack:
    result.append(stack.pop())

print("".join(result))
