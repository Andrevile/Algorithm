import sys
sys.setrecursionlimit(200000)
N = int(sys.stdin.readline())
node_graph = {}
for i in range(N-1):
    prev,post = map(int,sys.stdin.readline().split(" "))
    if prev not in  node_graph:
        node_graph[prev] = {}
    node_graph[prev][post] = False

    if post not in node_graph:
        node_graph[post] = {}
    node_graph[post][prev] = False



result = [0] * (N+1)
def travasal(parent):
    for child,val in node_graph[parent].items():
        if node_graph[parent][child] == False:
            node_graph[parent][child] = True
            node_graph[child][parent] = True
            result[child] = parent
            travasal(child)

travasal(1)

for i in range(2,len(result)):
    print(result[i])