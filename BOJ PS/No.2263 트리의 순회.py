import sys
sys.setrecursionlimit(200000)
N = int(sys.stdin.readline())
inorder = list(map(int,sys.stdin.readline().split(" ")))
postorder = list(map(int,sys.stdin.readline().split(" ")))


count = [0]*(N+1)

for i in range(N):
    count[inorder[i]]=i


def result(instart,infinish,poststart,postfinish):
    if instart > infinish or poststart > postfinish:
        return

    print(postorder[postfinish], end=" ")
    left = count[postorder[postfinish]] - instart
    right = infinish - count[postorder[postfinish]]


    result(instart,instart+left-1,poststart,poststart+left-1)
    result(infinish-right+1,infinish,postfinish-right,postfinish-1)



result(0,len(inorder)-1,0,len(postorder)-1)
