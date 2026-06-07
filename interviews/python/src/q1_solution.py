def count(price):
    price= int(price.replace(" ", ""))
    result = ""
    million = int(price/1000000)
    thousand = int((price%1000000)/1000)
    firstthree = price%1000
    if million != 0:
        result += readthreedigit(million) + "million "
    if thousand != 0:
        result += readthreedigit(thousand)+ "thousand "
    if firstthree != 0:
        result += readthreedigit(firstthree)
    if price == 0:
        result += "zero "
    return result.strip().replace("  ", " ")

secondone= {
    1: "eleven",
    2: "twelve",
    3: "thirteen",
    4: "fourteen",
    5: "fifteen",
    6: "sixteen",
    7: "seventeen",
    8: "eighteen",
    9: "nineteen"
}
secondigit= {
    2: "twenty",
    3: "thirty",
    4: "forty",
    5: "fifty",
    6: "sixty",
    7: "seventy",
    8: "eighty",
    9: "ninety"
}
numbers= {
    0: "",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine"
}

def readthreedigit(price):
    first = price%10
    second = int((price%100)/10)
    third = int(price/100)
    out = ""
    if third != 0:
        out += numbers[third] + " hundred "
    if second == 1:
        out += secondone[first] + " "
    elif second == 0:
        out += numbers[first]+ " "
    else:
        out += secondigit[second] + " " + numbers[first] + " "
    return out