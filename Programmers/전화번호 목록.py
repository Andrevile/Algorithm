def solution(phone_book):
    answer = True
    prefix_set = {}
    for i in range(len(phone_book)):
        prefix_set[phone_book[i]] = True
    for i in range(len(phone_book)):
        temp = ""
        for char in phone_book[i]:
            temp += char
            if str(temp) in prefix_set and temp != phone_book[i]:
                return False
    return answer