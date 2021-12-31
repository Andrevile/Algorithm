import sys
MAX = sys.maxsize
N = int(sys.stdin.readline())
M = int(sys.stdin.readline())
node = []
for i in range(M):
    prev,post,cost = map(int,sys.stdin.readline().split(" "))
    node.append([cost,prev,post])

node.sort()
parent = [ i for i in range(0,N+2)]


def find(x):
    if x == parent[x]:
        return x
    parent[x] = find(parent[x])
    return parent[x]

def union(x,y):

    x,y = find(x),find(y)
    parent[x] = y

answer = 0
for nod in node:
    cost,prev,post = nod
    if find(prev) == find(post):
        continue;
    else:
        answer += cost
        union(prev,post)

print(answer)

