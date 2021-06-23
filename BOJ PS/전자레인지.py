T=int(input())
A_button = 0
B_button = 0
C_button = 0
def result(input):
    count=0
    global A_button
    global B_button
    global C_button
    if input%10!=0:
        return -1
    if input // 300 > 0:
        count += input // 300
        A_button += input // 300
        input = input % 300

    if input // 60 > 0:
        count += input // 60
        B_button += input // 60
        input = input % 60
    if input // 10 > 0:
        count += input // 10
        C_button = input // 10

    return 1

if result(T)==-1:
    print(result(T))
else:
    print(A_button, B_button, C_button)


