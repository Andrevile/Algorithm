def solution(N, number):
    answer = -1
    DP = []

    for i in range(1, 9):
        count_set = set()
        count_set.add(int(str(N) * i))
        for j in range(i - 1):
            for x in DP[j]:
                for y in DP[-j - 1]:
                    count_set.add(x + y)
                    count_set.add(x - y)
                    count_set.add(x * y)

                    if y != 0:
                        count_set.add(x // y)
        if number in count_set:
            answer = i
            break;
        DP.append(count_set)

    return answer