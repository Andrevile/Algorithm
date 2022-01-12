import heapq


def solution(scoville, K):
    answer = 0
    heapq.heapify(scoville)
    count = 0

    while len(scoville) >= 2 and scoville[0] < K:
        count += 1
        lower_spicy = heapq.heappop(scoville)
        higer_spicy = heapq.heappop(scoville)
        new_food = new_scoville(higer_spicy, lower_spicy)
        heapq.heappush(scoville, new_food)
    if len(scoville) <= 1 and scoville[0] < K:
        return -1
    else:
        return count


def new_scoville(higer_spicy, lower_spicy):
    return higer_spicy * 2 + lower_spicy