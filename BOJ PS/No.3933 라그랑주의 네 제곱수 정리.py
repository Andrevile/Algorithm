import sys
import math
import time
start=time.time()
#
# while True:
#     input_number = int(sys.stdin.readline())
#     maximum=int(math.sqrt(input_number))
#     print(input_number,maximum)
#     if input_number==0:
#         break;
#
#

def result(input_number,minimum,maximum,sum,depth):
   # print("depth={} minimum={} maximum={} ".format(depth,minimum,maximum),end="")
    count = 0
    sum += pow(minimum, 2)
    if sum==input_number and depth<=4:
   #     print()
    #    print('check')
        return 1
    #print("sum={}".format(sum))
    # if input_number-(sum+pow(minimum,2))>pow(maximum,2):
    #     minimum+=1
    for i in range(minimum,maximum+1):
        if depth+1<=4 and sum<input_number:
            temp=result(input_number,i,int(math.sqrt(input_number-sum-pow(i,2))),sum,depth+1)
    #        print("temp={}".format(temp))
            count+=temp

            # if temp==1:
            #     break;

    return count

#input_number=int(sys.stdin.readline())
n=int(sys.stdin.readline())
for i in range(1,n+1):
    input_number=i
    maximum=int(math.sqrt(input_number))
    count=0
    for i in range(1,maximum+1):
        #print(i)
        count+=result(input_number,i,int(math.sqrt(input_number-pow(i,2))),0,1)
       # print("count={}".format(count))



    print(count)
print(time.time()-start)