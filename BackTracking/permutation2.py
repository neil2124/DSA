def permute(nums):
    result = []
    count = {}
    perm = []
    for n in nums:
        if n in count:
            count[n] += 1
        else:
            count[n] = 1

    def dfs():
        if len(perm) == len(nums):
            result.append(perm.copy())
            return
        for n in count:
            if count[n] > 0:
                perm.append(n)
                count[n] -= 1
                dfs()
                count[n] += 1
                perm.pop()
    dfs()
    return result


print(permute([1, 1, 2]))
