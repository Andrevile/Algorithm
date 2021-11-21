import sys
N = int(sys.stdin.readline()) # 1<= N <= 2000


A_list = list(map(int,sys.stdin.readline().split(" ")))

A_list.sort()
number_count = {}
for i in range(len(A_list)):
    if A_list[i] not in number_count:
        number_count[A_list[i]] = 1
    else:
        number_count[A_list[i]] = number_count[A_list[i]] + 1

count = 0
good_number = {}
set_list = list(set(A_list))

if N <=2 :
    print(0)
else:
    for i in range(len(set_list)):
        for k in range(len(set_list)):
            if set_list[i] + set_list[k] in number_count:
                if set_list[i] + set_list[k] not in good_number:
                    if set_list[i] + set_list[k] == 0:
                        if (set_list[i] == 0 and set_list[k] == 0) and number_count[set_list[i]] < 3:
                            continue;
                        good_number[set_list[i] + set_list[k]] = [set_list[i], set_list[k]]
                    else:
                        if set_list[i] == 0:
                            if number_count[set_list[k]] < 2:
                                continue;
                        if set_list[k] == 0:
                            if number_count[set_list[i]] < 2:
                                continue;
                        if set_list[i] == set_list[k]:
                            if number_count[set_list[i]] < 3:
                               continue;
                        good_number[set_list[i] + set_list[k]] = [set_list[i], set_list[k]]
            else:
                continue;



    for key,val in number_count.items():
        if key in good_number:
            count += val
    print(count)


