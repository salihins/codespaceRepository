ROMAN_VALUES = (
    (1000, "M"),
    (900, "CM"),
    (500, "D"),
    (400, "CD"),
    (100, "C"),
    (90, "XC"),
    (50, "L"),
    (40, "XL"),
    (10, "X"),
    (9, "IX"),
    (5, "V"),
    (4, "IV"),
    (1, "I"),
)


def to_roman(num):
    if not isinstance(num, int) or isinstance(num, bool):
        raise TypeError("num must be an integer")
    if not 1 <= num <= 3999:
        raise ValueError("num must be in the range 1..3999")

    parts = []
    for value, symbol in ROMAN_VALUES:
        count, num = divmod(num, value)
        parts.append(symbol * count)
    return "".join(parts)
