import sys


def check_result(word):
    word_list = list(word)
    word_list_reverse = list(reversed(word_list))
    for i in range(len(word_list)):
        if word_list[i] != word_list_reverse[i]:
            return False
    return True


while True:
    word = sys.stdin.readline().rstrip()
    if word == '0':
        sys.exit()
    if check_result(word) == True:
        print("yes")
    else:
        print("no")