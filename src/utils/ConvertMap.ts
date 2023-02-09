
/**
 * Two way map TypeScript implementation 
 */
export class ConvertMap<T, V> {
    private map: Map<T, V>;
    private reverseMap: Map<V, T>;

    constructor(mapConstructor: readonly (readonly [T, V])[] | null) {
        this.map = new Map<T, V>(mapConstructor);
        this.reverseMap = new Map<V, T>();
        this.map.forEach((value, key) => {
            this.reverseMap.set(value, key)
        })
    }

    get(key: T) {
        return this.map.get(key)
    }

    getReverse(key: V) {
        return this.reverseMap.get(key)
    }
}