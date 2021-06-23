n=int(input())
distance=[[0,5,3,2],[5,0,1,5],[3,1,0,2],[2,5,2,0]]
visited=[False for i in range(0,n)]
def shortest_path(current_distance,visit,current_path):
    if len(current_path)==n:
        return current_distance+distance[current_path[0]][current_path[-1]]

    ret=10000000

    for i in range(0,n):
        if visited[i]==False:
            visited[i]=True
            if len(current_path)==0:
                here=i
            else:
                here=current_path[-1]
            current_path.append(i)

            cal=shortest_path(current_distance+distance[here][i],visit,current_path)
            ret=min([ret,cal])
            visited[i]=False
            del current_path[-1]
    return ret

print(shortest_path(0,visited,[]))

