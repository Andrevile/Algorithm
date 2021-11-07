import sys

N = int(sys.stdin.readline())
node_list = list(map(int,sys.stdin.readline().split(" ")))
erase = int(sys.stdin.readline())


def DFS(erase):
    node_list[erase] = -2

    for i in range(len(node_list)):
        if erase == node_list[i]:
            DFS(i)

count = 0
DFS(erase)
for i in range(len(node_list)):
    if node_list[i] != -2 and i not in node_list:
        count += 1

print(count)