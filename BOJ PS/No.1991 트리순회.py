import sys

N=int(sys.stdin.readline())
tree={}
for i in range(N):
    temp=sys.stdin.readline().rstrip().split(" ")
    tree[temp[0]]=[temp[1],temp[2]]


def preorder(current_node,child):
    print(current_node,end="")
    if child[0]!='.':
        preorder(child[0],tree[child[0]])
    if child[1]!='.':
        preorder(child[1],tree[child[1]])

def inorder(current_node,child):
    if child[0]!='.':
        inorder(child[0],tree[child[0]])
    print(current_node, end="")
    if child[1]!='.':
        inorder(child[1],tree[child[1]])

def postorder(current_node,child):
    if child[0]!='.':
        postorder(child[0],tree[child[0]])
    if child[1]!='.':
        postorder(child[1],tree[child[1]])
    print(current_node,end="")


preorder('A',tree['A'])
print()
inorder('A',tree['A'])
print()
postorder('A',tree['A'])