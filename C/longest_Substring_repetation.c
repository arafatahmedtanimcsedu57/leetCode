int lengthOfLongestSubstring(char *s)
{
    int i = 0;
    int res = 0;
    int startIndex[265 + 1] = {0};
    int givenStringLength = (int)( sizeof(startIndex) / sizeof(startIndex[0]);

    for (int j = 0; j< givenStringLength; j++){
        i = max(max, startIndex[s[j]] + 1);
        res = max(res, j - i + 1);
        startIndex[s[j]] = j;
    }

    return res;
}