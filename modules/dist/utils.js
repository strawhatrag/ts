export function add(x, y) {
    return x + y;
}
export function sample(arr) {
    if (arr.length === 0) {
        return undefined;
    }
    return arr.pop();
}
