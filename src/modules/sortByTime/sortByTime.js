// Sorts leaderboard data by finish time
function sortByTime(a, b) {
        const timeA = a.finish_time.replaceAll(":", "");
        const timeB = b.finish_time.replaceAll(":", "");
        return timeA - timeB;
    }

export { sortByTime };