
import java.util.Arrays;

public class Solution {

    public int removeCoveredIntervals(int[][] intervals) {

        Arrays.sort(intervals, (x, y) -> compare_ascendingStart_ifStartIsEqual_descendingEnd(x, y));

        int previousEnd = 0;
        int counter_intervalsNotCovered = 0;

        for (int[] interval : intervals) {
            if (previousEnd < interval[1]) {
                counter_intervalsNotCovered++;
                previousEnd = interval[1];
            }
        }
        return counter_intervalsNotCovered;
    }

    public int compare_ascendingStart_ifStartIsEqual_descendingEnd(int[] x, int[] y) {
        return x[0] == y[0] ? y[1] - x[1] : x[0] - y[0];
    }
}
