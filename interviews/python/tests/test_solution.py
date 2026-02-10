import pytest
from solution import count

def test_handles_zero():
    assert count("0") == "zero"

def test_handles_basic_numbers():
    assert count("7") == "seven"
    assert count("11") == "eleven"
    assert count("19") == "nineteen"
    assert count("20") == "twenty"
    assert count("21") == "twenty one"
    assert count("90") == "ninety"
    assert count("99") == "ninety nine"

def test_handles_hundreds():
    assert count("100") == "one hundred"
    assert count("101") == "one hundred one"
    assert count("115") == "one hundred fifteen"
    assert count("200") == "two hundred"
    assert count("342") == "three hundred forty two"

def test_handles_thousands():
    assert count("1000") == "one thousand"
    assert count("1001") == "one thousand one"
    assert count("1015") == "one thousand fifteen"
    assert count("1100") == "one thousand one hundred"
    assert count("2000") == "two thousand"
    assert count("2005") == "two thousand five"
    assert count("2345") == "two thousand three hundred forty five"

def test_handles_millions():
    assert count("1000000") == "one million"
    assert count("1000005") == "one million five"
    assert count("1001000") == "one million one thousand"
    assert count("1234567") == "one million two hundred thirty four thousand five hundred sixty seven"
    assert count("2000000") == "two million"
    assert count("3000000") == "three million"

def test_handles_large_numbers():
    assert count("999999999") == "nine hundred ninety nine million nine hundred ninety nine thousand nine hundred ninety nine"

def test_handles_formatting_logic():
    assert count("   3000000   ") == "three million"
    assert count("3,000") == "three thousand"
    assert count("3,000,000") == "three million"
    assert count("3 000 000") == "three million"
    assert count("3_000_000") == "three million"
    assert count("1_000_005") == "one million five"

def test_throws_on_invalid_input():
    with pytest.raises(ValueError):
        count("")
    with pytest.raises(ValueError):
        count("   ")
    with pytest.raises(ValueError):
        count("-5")
    with pytest.raises(ValueError):
        count("abc")
