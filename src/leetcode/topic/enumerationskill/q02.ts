function minimumCardPickup(cards: number[]): number {
    let ans = Infinity;
    const map = new Map();
    for (let i = 0; i < cards.length; i++) {
        if (map.has(cards[i])) {
            ans = Math.min(ans, i - map.get(cards[i]) + 1);
        }
        map.set(cards[i], i);
    }
    return ans < Infinity ? ans : -1;
}