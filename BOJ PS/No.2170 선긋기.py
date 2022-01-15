import sys


N = int(sys.stdin.readline())
coordinate = []
for i in range(N):
    x,y = map(int,sys.stdin.readline().split(" "))
    coordinate.append([x,y])


coordinate.sort()
# coordinate = sorted(coordinate,key = lambda x : x[1])
# print(coordinate)
start = coordinate[0][0]
end = coordinate[0][1]
length = end - start
# print("start ={} end ={} length ={}".format(start,end,length))
for i in range(1,len(coordinate)):
    if coordinate[i][1] > end: #현재 끝이 전에 것 보다 커야 길이 측정 가능
        if coordinate[i][0] > end:
            start = coordinate[i][0]
        else:
            start = end
        end = coordinate[i][1]
        length += end - start
        # print("start ={} end ={} length ={}".format(start, end, length))

print(length)





