import sys
from collections import deque

T=int(sys.stdin.readline())


def result(p,queue):
    global flag
    reverse_flag=0
    while len(p)!=0:
        instruction=deque.popleft(p)
        if instruction=="R":
            if reverse_flag==0:
                reverse_flag=1
            else:
                reverse_flag=0
        else:
            if len(queue)==0:
                print("error")
                flag=1
                break;
            else:
                if reverse_flag==0:
                    deque.popleft(queue)
                else:
                    deque.pop(queue)

    if reverse_flag==1:
        queue.reverse()

    return queue


for i in range(T):
    p=deque(list(sys.stdin.readline().rstrip()))
    n=int(sys.stdin.readline())
    if n!=0:
        input_list=sys.stdin.readline().rstrip().strip("[").strip("]").split(",")
        queue=deque(input_list)

    else:
        input_list=sys.stdin.readline().rstrip()
        queue=[]
    flag=0
    answer=result(p,queue)
    if flag!=1:
        if len(answer)==0:
            print("[]")
        else:
            print("["+','.join(answer)+"]")