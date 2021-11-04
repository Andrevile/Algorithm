import sys

word=sys.stdin.readline()

def result(word):
    wordlist=word.split()


    return len(wordlist)

print(result(word))