
#include <vector>
using namespace std;

class Solution {
    
public:

    int removeCoveredIntervals(vector<vector<int>>&intervals) {

        sort(intervals.begin(), intervals.end(), compare_ascendingStart_ifStartIsEqual_descendingEnd);

        int previousEnd = 0;
        int counter_intervalsNotCovered = 0;

        for (const auto& interval : intervals) {

            if (previousEnd < interval[1]) {
                counter_intervalsNotCovered++;
                previousEnd = interval[1];
            }
        }
        return counter_intervalsNotCovered;
    }

    static bool compare_ascendingStart_ifStartIsEqual_descendingEnd(const vector<int>& x, const vector<int>& y) {
        return x[0] == y[0] ? x[1] > y[1] : x[0] < y[0];
    }
};
