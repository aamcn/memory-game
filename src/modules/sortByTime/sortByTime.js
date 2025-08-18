// Sorts leaderboard data by finish time
function sortByTime(a, b) {
    if (typeof a.finish_time === "string" && typeof b.finish_time === "string") {
        const timeA = a.finish_time.replaceAll(":", "");
        const timeB = b.finish_time.replaceAll(":", "");
        return timeA - timeB;
    }
}

export { sortByTime };