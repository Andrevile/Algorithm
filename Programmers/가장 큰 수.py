def solution(numbers):
    
    numbers = list(map(str,numbers))
    numbers = sorted(numbers,key=lambda x : x*4,reverse=True)
   
    answer = str(int("".join(numbers)))
    return answer