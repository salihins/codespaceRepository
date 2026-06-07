values = {
    1: "I",
    5: "V",
    10: "X",
    50: "L",
    100: "C",
    500: "D",
    1000: "M"
}
def to_roman(num):
    divisor = 10
    result = ""
    while True:
        number = num%divisor
        actual = int(number/(divisor/10))
        if actual == 4:
            result = values[divisor/10] + values[5 * (divisor/10)] + result
        elif actual == 9:
            result = values[divisor/10] + values[divisor] + result
        elif actual<4:
            for i in range(actual):
                result = values[divisor/10] + result
        elif actual>=5 and actual<9:
            mod = actual%5 
            for i in range(mod):
                result = values[divisor/10] + result
            result = values[5* (divisor/10)] + result
                
        divisor *= 10
        if number == num:
            break
    return result
