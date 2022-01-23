from itertools import combinations
def solution(orders, course):
    answer = []
  
    for num in course: #코스 숫자
        comb = {}
        for i in range(len(orders)): #주문 목록
            if len(orders[i]) < num: #지금 주문이 조합수보다 작다면 넘기기
                continue
            temp = list(combinations(list(orders[i]),num))
            for key in temp: #현재 주문 조합 목록중에
                menu = list(key)
                menu.sort()
                menu = "".join(menu)
                if menu not in comb: #현재 주문 조합이 없으면 추가
                    comb[menu] = 1
                else:               #있으면 1 증가
                    comb[menu] += 1
          
        value_list = list(comb.values())
        max_value = 0
       
        if len(value_list) != 0:
            max_value = max(value_list)
        
        for key,val in comb.items(): #comb에서
            if val == max_value and val >= 2:
                answer.append(key)
                
    answer.sort()
        
            
    return answer