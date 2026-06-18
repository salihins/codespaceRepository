def longest_increasing_contiguous_segment(readings):
    best_start = current_start = 0
    best_length = current_length = 1

    for index in range(1, len(readings)):
        if readings[index] == readings[index - 1] + 1:
            current_length += 1
        else:
            current_start = index
            current_length = 1

        if current_length > best_length:
            best_start = current_start
            best_length = current_length

    return best_length, best_start, best_start + best_length - 1
