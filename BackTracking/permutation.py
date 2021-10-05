def swap(nums, i, j):
    nums[i], nums[j] = nums[j], nums[i]
    return nums


def permute(nums):

    result = []

    def find(nums, left, right):
        if left == right:
            result.append(list(nums))
        else:
            for i in range(left, right+1):
                nums = swap(nums, left, i)
                find(nums, left+1, right)
                nums = swap(nums, left, i)
    find(nums, 0, len(nums)-1)
    return result


print(permute([1, 2, 3]))
