def solution(lines):
    log_list = []
    for log in lines:
        temp = log.split(" ")
        log_list.append(cal_total(temp[1], float(temp[2][:-1])))
    one_second = 0.999
    MAX = 0
    for i in range(len(log_list)):
        temp = [0, 0]
        start_duration = [log_list[i][0], round(log_list[i][0] + one_second, 3)]
        end_duration = [log_list[i][1], round(log_list[i][1] + one_second, 3)]
        for k in range(len(log_list)):
            if log_list[k][1] < start_duration[0] or start_duration[1] < log_list[k][0]:
                temp[0] += 0
            else:
                temp[0] += 1
            if log_list[k][1] < end_duration[0] or end_duration[1] < log_list[k][0]:
                temp[1] += 0
            else:
                temp[1] += 1
        if MAX < max(temp):
            MAX = max(temp)

    answer = MAX
    return answer


def cal_total(time, duration):
    time = time.split(":")
    end = 3600 * int(time[0]) + 60 * int(time[1]) + float(time[2])

    start = end - (duration - 0.001)
    return [start, end]