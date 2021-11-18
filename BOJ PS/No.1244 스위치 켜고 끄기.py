import sys

switch_num = int(sys.stdin.readline())

switch_list = list(map(int,sys.stdin.readline().split(" ")))

student_num = int(sys.stdin.readline())

def turn_off(gender,given_num):
    if gender == 1: #남학생
        for i in range(len(switch_list)):
            if (i+1) % given_num == 0:
                if switch_list[i] == 0:
                    switch_list[i] = 1
                else:
                    switch_list[i] = 0
    elif gender == 2: #여학생
        given_num = given_num-1
        toward_front = given_num-1
        toward_back = given_num+1
        while toward_front >= 0 and toward_back < switch_num:
            if switch_list[toward_front] == switch_list[toward_back]:
                toward_front -= 1
                toward_back += 1
            else:
                break;
        for i in range(toward_front+1,toward_back):
            if switch_list[i] == 0:
                switch_list[i] = 1
            else:
                switch_list[i] = 0





for i in range(student_num):
    gender, given_num = map(int,sys.stdin.readline().split(" "))
    turn_off(gender,given_num)

count = 0
for i in range(len(switch_list)):
    print(switch_list[i],end=" ")
    count += 1
    if count == 20:
        print()
        count = 0