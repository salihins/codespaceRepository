import pytest

from q2_solution import to_roman


@pytest.mark.parametrize(
    ("num", "expected"),
    [
        (1, "I"),
        (3, "III"),
        (4, "IV"),
        (9, "IX"),
        (14, "XIV"),
        (40, "XL"),
        (58, "LVIII"),
        (90, "XC"),
        (400, "CD"),
        (944, "CMXLIV"),
        (1994, "MCMXCIV"),
        (3749, "MMMDCCXLIX"),
        (3999, "MMMCMXCIX"),
    ],
)
def test_converts_integer_to_roman_numerals(num, expected):
    assert to_roman(num) == expected