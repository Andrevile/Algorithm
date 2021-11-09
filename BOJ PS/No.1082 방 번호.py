import sys

# 스타트링크가 입주한 사무실은 방 번호를 직접 정할 수 있다.
# 방 번호를 정하려면 1층 문방구에서 파는 숫자를 구매해야 한다. 숫자를 구매하기 위해 준비한 금액은 M원이고, M원을 모두 사용해야 한다.
#
# 문방구에서 파는 숫자는 0부터 N-1까지이고, 각 숫자 i의 가격은 Pi이다.
# 문방구에서는 같은 숫자를 여러 개 구매할 수 있고, 문방구는 매우 많은 재고를 보유하고 있기 때문에, 항상 원하는 만큼 숫자를 구매할 수 있다.
# 방 번호가 0이 아니라면 0으로 시작할 수 없다.
#
# 예를 들어, N = 3, M = 21, P0 = 6, P1 = 7, P2 = 8이라면, 만들 수 있는 가장 큰 방 번호는 210이다.
# M원을 모두 사용해서 만들 수 있는 가장 큰 방 번호를 구해보자.
#
# 첫째 줄에 M원을 사용해서 만들 수 있는 가장 큰 방 번호를 출력한다. 적어도 하나의 숫자를 살 수 있는 입력만 주어진다.

# case 1
# 3
# 6 7 8
# 21

# case 2
# 3
# 5 23 24
# 30

# case 3
# 4
# 1 5 3 2
# 1

# case 4
# 10
# 1 1 1 1 1 1 1 1 1 1
# 50
N = int(sys.stdin.readline())
P_list = list(map(int,sys.stdin.readline().split(" ")))
M = int(sys.stdin.readline())

MinCost = min(P_list)
Max_digit = M // MinCost
pick = [P_list.index(MinCost) for i in range(Max_digit)]
if N == 1:
    print(0)
    sys.exit()

def buy_token(remain_cost,current_digit):
    for i in range(current_digit, -1, -1):
        if pick[i] != N-1:
            for j in range(N-1, pick[i], -1):
                cost_diff = P_list[j] - P_list[pick[i]]
                if cost_diff <= remain_cost:
                    pick[i] = j
                    buy_token(remain_cost-cost_diff,current_digit-1)
                    return;

    if pick.count(0) == len(pick):
        if not pick:
            print(0)
            sys.exit()
        pick.pop()
        buy_token(remain_cost+P_list[0],current_digit-1)


buy_token(M-MinCost*Max_digit,Max_digit-1)


result = 0
for i in range(len(pick)):
    result += pick[i] * (10**i)

print(result)

