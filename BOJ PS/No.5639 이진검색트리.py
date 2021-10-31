import sys
sys.setrecursionlimit(20000)
node=[]
while True:
    try:
        node.append(int(sys.stdin.readline()))
    except:
        break;


def result(start,finish):
    if start>finish:
        return
    divide=finish+1
    for i in range(start+1,divide):
        if node[i]>node[start]:
            divide=i
            break;
        
    result(start+1,divide-1)
    if start!=divide:
        result(divide,finish)
    print(node[start])


result(0,len(node)-1)


