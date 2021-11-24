import sys

N = int(sys.stdin.readline())

count = 0

for i in range(N):
    switch = 0
    word = sys.stdin.readline().rstrip()
    word_dict = {}
    word_dict[word[0]] = True
    for k in range(1,len(word)):
        if word[k] not in word_dict:
            word_dict[word[k-1]] = False
            word_dict[word[k]] = True
        else:
            if word_dict[word[k]] == False:
                switch = 1
                break;


    if switch == 0:

        count += 1

print(count)

