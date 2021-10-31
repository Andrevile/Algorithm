import sys

N,M=map(int,sys.stdin.readline().split())
site_password={}

for i in range(N):
    site,password=sys.stdin.readline().rstrip().split(" ")
    site_password[site]=password

for i in range(M):
    find_site=sys.stdin.readline().rstrip()
    print(site_password[find_site])