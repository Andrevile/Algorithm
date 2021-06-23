import sys

N,K=map(int,sys.stdin.readline().split())
name=list(map(int,sys.stdin.readline().split(" ")))

def result(N,K,name):
    count=0
    MAX_size=N
    plug=[]
    for i in range(0,K):
        if name[i] not in plug: #플러그에 해당 제품이 안꽂혀있음 name[i]
            if len(plug)<MAX_size: #플러그에 여유 자리가 남음
                plug.append(name[i])
            else: #플러그에 여유자리가 없어서 빼고 넣어야
                max=-1
                for key in plug:
                    if key not in name[i:]:
                        pop_element=key
                        break;
                    elif name[i:].index(key)>max:
                        max=name[i:].index(key)
                        pop_element=key
                plug.pop(plug.index(pop_element))
                plug.append(name[i])
                count+=1
    return count

print(result(N,K,name))