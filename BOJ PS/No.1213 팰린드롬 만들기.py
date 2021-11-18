import sys

name = list(sys.stdin.readline().rstrip())

alphabet_list = [0 for i in range(26)]

for i in range(len(name)):
    alphabet_idx = ord(name[i])-65
    alphabet_list[alphabet_idx] += 1
odd_count = 0

for i in range(len(alphabet_list)):
    if alphabet_list[i] % 2 == 1:
        odd_count += 1

if odd_count > 1:
    print("I'm Sorry Hansoo")
else:
    front_start = ""
    back_start = ""
    for i in range(len(alphabet_list)):
        if alphabet_list[i] > 0:
            while alphabet_list[i] > 1:
                front_start = front_start + chr(i+65)
                back_start = chr(i+65) + back_start
                alphabet_list[i] -= 2
    for i in range(len(alphabet_list)):
        if alphabet_list[i] == 1:
            front_start = front_start + chr(i+65)

    answer = front_start+back_start
    print(answer)


