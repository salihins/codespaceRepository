from q4_solution import can_be_strictly_increasing


def test_returns_true_when_already_strictly_increasing():
    assert can_be_strictly_increasing([1, 2, 3, 4]) is True


def test_returns_true_when_one_removal_fixes_sequence():
    assert can_be_strictly_increasing([1, 2, 10, 5, 7]) is True
    assert can_be_strictly_increasing([1, 2, 3, 2, 4]) is True
    assert can_be_strictly_increasing([10, 1, 2, 3]) is True


def test_returns_false_when_more_than_one_problem_exists():
    assert can_be_strictly_increasing([2, 3, 1, 2]) is False
    assert can_be_strictly_increasing([1, 1, 1]) is False
    assert can_be_strictly_increasing([3, 2, 1]) is False


def test_detects_duplicate_values_as_not_strict():
    assert can_be_strictly_increasing([1, 2, 2, 3]) is True
    assert can_be_strictly_increasing([1, 2, 2, 2]) is False


def test_handles_shortest_valid_length_inputs():
    assert can_be_strictly_increasing([1, 2]) is True
    assert can_be_strictly_increasing([2, 1]) is True
