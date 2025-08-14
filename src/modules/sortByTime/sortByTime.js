

function sortByTime(a, b) {
        const timeA = parseInt(a.time) || 0;
        const timeB = parseInt(b.time) || 0;
        return timeA - timeB;
    }

export { sortByTime };