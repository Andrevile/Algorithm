N,K=map(int,input().split(" "))
#value=[5,10,50,100,500,1000,5000,10000,50000]
#value=[1,5,10,50,100,500,1000,5000,10000,50000]
value=[]
for i in range(0,N):
    value.append(int(input()))

count=0
for key in reversed(value):
    if K<=0:
       break
    count += K // key
    K=K-key*(K//key)

print(count)