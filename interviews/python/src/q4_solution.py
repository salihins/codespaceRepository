def can_be_strictly_increasing(nums):
    removed = 0

    for index in range(1, len(nums)):
        if nums[index] > nums[index - 1]:
            continue

        removed += 1
        if removed > 1:
            return False

        left_ok = index == 1 or nums[index] > nums[index - 2]
        right_ok = index + 1 == len(nums) or nums[index + 1] > nums[index - 1]
        if not left_ok and not right_ok:
            return False

    return True
