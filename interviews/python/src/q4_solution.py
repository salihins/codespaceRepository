def can_be_strictly_increasing(nums):
    if is_strictly_increasing(nums):
        return True

    for i in range(len(nums)):
        if is_strictly_increasing(nums[:i] + nums[i + 1:]):
            return True

    return False

def is_strictly_increasing(arr):
    return all(arr[i] < arr[i + 1] for i in range(len(arr) - 1))