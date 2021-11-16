import sys

word = sys.stdin.readline().rstrip()

word = word.upper()


word_dict = {}

for i in range(len(word)):
    if word[i] not in word_dict:
        word_dict[word[i]] = 1
    else:
        word_dict[word[i]] += 1


answer = []
for key,val in word_dict.items():
    answer.append([val,key])

answer.sort(reverse = True)

if len(answer) > 1:
    if answer[0][0] == answer[1][0]:
        print("?")
    else:
        print(answer[0][1])
else:
    print(answer[0][1])
