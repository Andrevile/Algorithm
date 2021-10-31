import sys
T=int(sys.stdin.readline().rstrip())
case=[]
for i in range(T):
    case.append(int(sys.stdin.readline().rstrip()))


def result(T,case):
    for i in range(T):
        zero_count = [1, 0]
        one_count = [0, 1]
        if case[i]!=0 or case[i]!=1:
            for k in range(2,case[i]+1):
                zero_count.append(zero_count[k-2]+zero_count[k-1])
                one_count.append(one_count[k-2]+one_count[k-1])
        print(zero_count[case[i]],one_count[case[i]])

result(T,case)