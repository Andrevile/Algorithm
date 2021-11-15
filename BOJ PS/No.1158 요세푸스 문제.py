import sys
N,K = map(int,sys.stdin.readline().split(" "))


people = [ i for i in range(1,N+1)]


pop_index = K-1
answer = []
while True:
    eliminated = people.pop(pop_index)
    answer.append(eliminated)
    if len(people) == 0:
        break;
    pop_index = (pop_index + K -1) % len(people)


print("<",end="")
for i in range(len(answer)):
    if i != len(answer)-1:
        print("{},".format(answer[i]),end=" ")
    else:
        print("{}".format(answer[i]), end="")
print(">")