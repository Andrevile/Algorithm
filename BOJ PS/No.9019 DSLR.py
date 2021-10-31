import sys
from collections import deque

T=int(sys.stdin.readline())

def D(prev):

    prev=prev*2
    if prev<10000:
        return prev
    else:
        return prev%10000

def S(prev):
    prev=prev-1
    if prev==-1:
        prev=9999
    return prev

def rotate(prev,direction): #direction==1 L direction==2 R
    if direction==1:
        if prev<1000:
            final_value=prev*10
        else:
            div=prev//1000
            mod=prev%1000
            final_value=mod*10+div
    else:
        div=prev//10
        mod=prev%10
        final_value=div+mod*1000


    return int(final_value)




def BFS(prev,post):
    instruction=deque([[prev,""]])
    visited=[False]*10000
    visited[prev]=""
    iter=0
    while True:#while True:
        #print(instruction)

        pop=instruction.popleft()
        #print(iter)
        if pop[0]==post:
            break;
        #D,S,L,R=D(pop[0]),S(pop[0]),rotate(pop[0],1),rotate(pop[0],2)
        if visited[D(pop[0])]==False:
            visited[D(pop[0])]=visited[pop[0]]+"D"
            instruction.append([D(pop[0]),"D"])
        if visited[S(pop[0])]==False:
            visited[S(pop[0])]=visited[pop[0]]+"S"
            instruction.append([S(pop[0]),"S"])
        if visited[rotate(pop[0],1)]==False and pop[1]!="R":
            visited[rotate(pop[0],1)]=visited[pop[0]]+"L"
            instruction.append([rotate(pop[0],1),"L"])
        if visited[rotate(pop[0],2)]==False and pop[1]!="L":
            visited[rotate(pop[0],2)]=visited[pop[0]]+"R"
            instruction.append([rotate(pop[0],2),"R"])
        #print(pop)
        iter+=1
    #print(visited)
    #print(instruction)
    return visited[post]



for i in range(T):
    prev,post=map(int,sys.stdin.readline().rstrip().split(" "))
    #if prev==0:
    #    prev=9999
    print(BFS(prev,post))
