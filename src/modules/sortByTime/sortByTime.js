// Sorts leaderboard data by finish time
function sortByTime(a, b) {
        const timeA = parseInt(a.finish_time) || 0;
        const timeB = parseInt(b.finish_time) || 0;
        return timeA - timeB;
    }

export { sortByTime };