ONES = (
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
)

TEENS = (
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
)

TENS = (
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
)

SCALES = ("", "thousand", "million")


def _chunk_to_words(number):
    words = []
    hundreds, remainder = divmod(number, 100)
    tens, ones = divmod(remainder, 10)

    if hundreds:
        words.extend((ONES[hundreds], "hundred"))
    if 10 <= remainder < 20:
        words.append(TEENS[remainder - 10])
    else:
        if tens:
            words.append(TENS[tens])
        if ones:
            words.append(ONES[ones])
    return " ".join(words)


def count(price):
    if not isinstance(price, str):
        raise ValueError("price must be a string")

    groups = price.split()
    if not groups or any(not group.isdigit() for group in groups):
        raise ValueError("price must contain only digit groups")
    if (
        len(groups) > len(SCALES)
        or len(groups[0]) > 3
        or any(len(group) != 3 for group in groups[1:])
    ):
        raise ValueError("price must use space-separated 3-digit groups")

    number = int("".join(groups))
    if number == 0:
        return ONES[0]

    words = []
    for scale, group in zip(SCALES, reversed(groups)):
        chunk_words = _chunk_to_words(int(group))
        if chunk_words:
            words.append(f"{chunk_words} {scale}".strip())
    return " ".join(reversed(words))
