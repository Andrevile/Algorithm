import sys


N,Q = map(int,sys.stdin.readline().split(" "))

num_list = list(map(int,sys.stdin.readline().split(" ")))

tree = [0] * (len(num_list)*4)

def init(node,start,end):
    if start == end:
        tree[node] = num_list[start]
        return tree[node]
    else:
        mid = (start + end)//2
        tree[node] = init(node*2, start, mid) + init(node*2+1, mid+1,end)
        return tree[node]

def update(node,start,end,idx,diff):
    if idx < start or idx > end:
        return

    tree[node] += diff

    if start != end:
        mid = (start + end) // 2
        update(node*2,start,mid,idx,diff)
        update(node*2+1,mid+1,end,idx,diff)

def query(node,start,end,left,right):
    if right < start or left > end:
        return 0
    elif left <= start and end <= right:
        return tree[node]

    mid = (start + end) // 2
    return query(node*2,start,mid,left,right) + query(node*2+1,mid+1,end,left,right)


init(1,0,N-1)
#print(tree)
for i in range(Q):
    x,y,a,b = map(int,sys.stdin.readline().split(" "))

    if y >= x:
        print(query(1,0,N-1,x-1,y-1))
    else:
        print(query(1,0,N-1,y-1,x-1))


    update(1,0,N-1,a-1,b-num_list[a-1])
    num_list[a-1] = b
