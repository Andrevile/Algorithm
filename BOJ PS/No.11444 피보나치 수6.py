import sys


n = int(sys.stdin.readline())

def matrix_multiply(first_matrix,second_matrix):
    result = [[0,0],[0,0]]

    result[0][0] = (first_matrix[0][0]*second_matrix[0][0] + first_matrix[0][1]*second_matrix[1][0])%1000000007
    result[0][1] = (first_matrix[0][0]*second_matrix[0][1] + first_matrix[0][1]*second_matrix[1][1])%1000000007
    result[1][0] = (first_matrix[1][0]*second_matrix[0][0] + first_matrix[1][1]*second_matrix[1][0])%1000000007
    result[1][1] = (first_matrix[1][0]*second_matrix[0][1] + first_matrix[1][1]*second_matrix[1][1])%1000000007

    return result

def result(matrix,n):
    if n == 1:
        return matrix
    else:
        temp = result(matrix,n//2)

        if n%2 == 0:
            return matrix_multiply(temp,temp)
        else:
            return matrix_multiply(matrix_multiply(temp,temp),matrix)




print(result([[1,1],[1,0]],n)[1][0])
