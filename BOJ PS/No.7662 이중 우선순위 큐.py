import heapq
import sys



T=int(sys.stdin.readline())
check=[False]*1000000

def result(max_queue,min_queue,ins,num,idx):
    if ins=="I":
        heapq.heappush(max_queue,[-num,idx])
        heapq.heappush(min_queue,[num,idx])
        check[idx]=True
    else:
        if num>0:
            while len(max_queue)!=0 and check[max_queue[0][1]]==False:
                heapq.heappop(max_queue)
            if len(max_queue)!=0:
                pop=heapq.heappop(max_queue)
                check[pop[1]]=False
        else:
            while len(min_queue)!=0 and check[min_queue[0][1]]==False:
                heapq.heappop(min_queue)
            if len(min_queue)!=0:
                pop=heapq.heappop(min_queue)
                check[pop[1]]=False







for i in range(T):
    k = int(sys.stdin.readline())
    max_queue=[]
    min_queue=[]
    for k in range(k):
        ins,num=sys.stdin.readline().rstrip().split(" ")
        result(max_queue,min_queue,ins,int(num),k)

    while len(min_queue)!=0 and check[min_queue[0][1]]==False:
        heapq.heappop(min_queue)
    while len(max_queue)!=0 and check[max_queue[0][1]]==False:
        heapq.heappop(max_queue)
    if len(max_queue)==0 and len(min_queue)==0:
        print("EMPTY")
    else:
        print(-max_queue[0][0],min_queue[0][0])

