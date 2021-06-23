import sys
N,M=map(int,sys.stdin.readline().split())
DNA=[]
for i in range(0,N):
    temp=str(sys.stdin.readline().rstrip())
    DNA.append(temp)

def result(N,M,DNA):
    word=[]
    distance=0
    for i in range(0,M): #열
        DNA_count={'A':0,'C':0,'G':0,'T':0}
        word_max=0
        for k in range(0,N): #행
            if DNA[k][i]=="A":
                DNA_count["A"] += 1
            elif DNA[k][i]=="T":
                DNA_count['T'] += 1
            elif DNA[k][i]=="G":
                DNA_count["G"] += 1
            else:
                DNA_count["C"] += 1
        MAX_DNA=max(DNA_count,key=DNA_count.get)
        word.append(MAX_DNA)
        distance=distance+sum(DNA_count.values())-DNA_count[MAX_DNA]
    return word,distance

word,distance=result(N,M,DNA)
print(''.join(word))
print(distance)
