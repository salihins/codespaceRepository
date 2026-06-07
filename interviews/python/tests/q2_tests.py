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


@pytest.mark.parametrize("num", [0, -1, 4000])
def test_rejects_values_outside_standard_roman_range(num):
    with pytest.raises(ValueError):
        to_roman(num)


@pytest.mark.parametrize("value", [3.14, "10", None])
def test_rejects_non_integer_inputs(value):
    with pytest.raises((TypeError, ValueError)):
        to_roman(value)
