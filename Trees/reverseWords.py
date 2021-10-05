def reverseWords(s):
    res = ""
    n = len(s)
    i = n-1
    j = n-1
    while i >= 0:
        while (i >= 0 and s[i] == " "):
            i -= 1
        j = i
        while (i >= 0 and s[i] != " "):
            i -= 1
        print(i, j)
        if not res:
            res += s[i+1, j+1]
        else:
            res += ' ' + s[i+1, j+1]
    print(res)


reverseWords("sky is blue")
