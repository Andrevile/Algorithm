import sys

first_string=sys.stdin.readline().rstrip()
second_string=sys.stdin.readline().rstrip()
graph=[[0 for i in range(len(second_string)+1)] for k in range(len(first_string)+1)]

def LCS():
    for i in range(1,len(first_string)+1):
        for k in range(1,len(second_string)+1):
            if first_string[i-1]==second_string[k-1]:
                graph[i][k]=graph[i-1][k-1]+1
            else:
                graph[i][k]=max(graph[i-1][k],graph[i][k-1])


LCS()
print(graph[-1][-1])
