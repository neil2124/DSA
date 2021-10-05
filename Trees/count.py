def find3number(A, n):
    # code
    count = 0
    if n >= 3:
        for i in range(0, n):
            for j in range(1, n):
                for k in range(2, n):
                    if A[i] < A[j] < A[k]:
                        print(count)
                        count += 1
    return count


print(find3number([1, 2, 1, 1, 3], 5))
