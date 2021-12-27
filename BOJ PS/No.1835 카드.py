import sys
from collections import deque

N = int(sys.stdin.readline())


card = [i for i in range(0,N)]
sequence = [0] * N

queue = deque(card)

count = 1
while len(queue):
    for i in range(count):
        pop = queue.popleft()
        queue.append(pop)

    pop = queue.popleft()
    sequence[pop] = str(count)

    count += 1

print(" ".join(sequence))
