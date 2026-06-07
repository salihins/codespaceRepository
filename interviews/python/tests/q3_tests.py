from q3_solution import longest_increasing_contiguous_segment


def test_returns_full_array_when_already_increasing():
    assert longest_increasing_contiguous_segment([1, 2, 3, 4]) == (4, 0, 3)


def test_finds_longest_streak_in_middle():
    assert longest_increasing_contiguous_segment([3, 4, 2, 5, 6, 7]) == (3, 3, 5)


def test_prefers_first_streak_when_lengths_tie():
    assert longest_increasing_contiguous_segment([1, 2, 0, 1]) == (2, 0, 1)


def test_single_value_breaks_streak_on_equal_numbers():
    assert longest_increasing_contiguous_segment([5, 5, 5]) == (1, 0, 0)


def test_handles_negative_numbers():
    assert longest_increasing_contiguous_segment([-5, -4, -3, -10, -9]) == (3, 0, 2)


def test_handles_single_element_input():
    assert longest_increasing_contiguous_segment([42]) == (1, 0, 0)
