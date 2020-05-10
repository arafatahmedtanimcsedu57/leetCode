class Solution
{
public:
    int lengthOfLongestSubstring(string s)
    {
        int i = 0;
        int res = 0;
        vector<int> startIndex(255 + 1, -1);
        int givenStringLength = s.size();

        for (int j = 0; j < givenStringLength; j++)
        {
            if (startIndex[s[j]] + 1 > i)
                i = startIndex[s[j]] + 1;
            if ((j - i + 1) > res)
                res = j - i + 1;
            startIndex[s[j]] = j;
        }

        return res;
    }
};