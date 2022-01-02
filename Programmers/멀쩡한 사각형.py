
def solution(w, h):
    all_square = w * h
    GCD = GCD_f(w, h)
    pattern = (w + h - GCD)

    answer = all_square - pattern
    return answer


def GCD_f(x, y):
    while x != 0:
        y = y % x
        x, y = y, x

    return y