count = 0


def solution(numbers, target):
    global count
    DFS(numbers, 0, 0, target)
    return count


def DFS(numbers, start_idx, summation, target):
    global count

    if start_idx == len(numbers):
        if summation == target:
            count += 1
        return

    DFS(numbers, start_idx + 1, summation - numbers[start_idx], target)
    DFS(numbers, start_idx + 1, summation + numbers[start_idx], target)