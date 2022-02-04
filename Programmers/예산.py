def solution(d, budget):
    d.sort()
    answer = 0
    part_idx = 0
    while budget > 0 and part_idx < len(d):
        if budget >= d[part_idx] :
            answer += 1
            budget -= d[part_idx]
            part_idx += 1
        else:
            break;
    return answer