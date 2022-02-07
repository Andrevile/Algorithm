from collections import deque
def solution(priorities, location):
    answer = 0
    document = []
    for i in range(len(priorities)):
        document.append(i) 
  
    queue = deque(priorities)
    doc_queue = deque(document)
    while queue:
        pop_prior = queue.popleft()
        pop_doc = doc_queue.popleft()
        
        if len(queue) > 0:
            if max(queue) > pop_prior:
                queue.append(pop_prior)
                doc_queue.append(pop_doc)
            else:
                answer += 1
                if pop_doc == location:
                    break;
        else:
            answer += 1

    return answer