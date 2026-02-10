import re
import math

numbers = [
    "", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
    "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen",
    "seventeen", "eighteen", "nineteen"
]

multipliesOfTen = [
    "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"
]

def trim_number(price: str) -> int:
    cleared_price = re.sub(r'[,\s.\s_]', '', price.strip())
    
    if len(cleared_price) == 0:
        raise ValueError("Price cannot be empty")
    
    if re.search(r'[^0-9]', cleared_price):
        raise ValueError("Price includes invalid characters")
    
    if int(cleared_price) < 0:
        raise ValueError("Price cannot be negative")
        
    return int(cleared_price)

def resolve_three_digits(given_number: int) -> str:
    return_string = ""
    mod_ten = given_number % 100
    hundreds = given_number // 100
    
    ones = mod_ten % 10
    tens = mod_ten // 10
    
    if hundreds != 0:
        return_string += f"{numbers[hundreds]} hundred"
        if mod_ten != 0:
            return_string += " "
            
    if given_number % 100 == 0 and hundreds != 0:
        return return_string

    if tens > 1:
        return_string += f"{multipliesOfTen[tens-2]}"
        if ones != 0:
            return_string += f" {numbers[ones]}"
    elif mod_ten > 0:
        return_string += f"{numbers[mod_ten]}"
        
    return return_string

def convert_to_string(price: int) -> str:
    if price == 0:
        return "zero"
        
    return_string = ""
    
    thousands = price % 1000000
    million_count = (price - thousands) // 1000000
    
    hundred_count = thousands % 1000
    thousand_count = (thousands - hundred_count) // 1000
    
    if million_count != 0:
        return_string += f"{resolve_three_digits(million_count)} million"
        
    if thousand_count != 0:
        if return_string != "":
            return_string += " "
        return_string += f"{resolve_three_digits(thousand_count)} thousand"
        
    if hundred_count != 0:
        if return_string != "":
            return_string += " "
        return_string += f"{resolve_three_digits(hundred_count)}"
        
    return return_string.strip()

def count(price: str) -> str:
    string_to_number = trim_number(price)
    return convert_to_string(string_to_number)
