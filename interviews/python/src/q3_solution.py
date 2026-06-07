def longest_increasing_contiguous_segment(readings):
    best = 1
    current = 1
    bestend = 0
    index = 1
    previous = readings[0]
    for number in readings[1:]:
        if number > previous:
            current += 1
        else:
            current = 1
        if current > best:
            best = current
            bestend = index
        previous = number
        index += 1
    result = (best, bestend-best+1, bestend)
    return result
