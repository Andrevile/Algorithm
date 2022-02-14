def solution(n, times):
    answer = 0
    start = 1
    end = max(times) * n
    
    while start < end:
        mid = (start + end) // 2
        people = 0
    
        for t in times:
            people += mid // t
      
        if people < n:
            start = mid + 1
        else:
            end = mid
    answer = end
    return answer