import sys

wildcard=["he?p","*p*","*bb*"]
file=[["help","heap","helpp"],["help","papa","hello"],["babbbc"]]

cache=[[]]

def result(wild,index,file):
    if wild[index]=="?":

    elif wild[index]=="*":


result(wildcard[0],0,file[0])
