
const { createMap, getMapValue, createSet, addToSet } = require('../src/data');

describe('Data Structures', () => {
    test('createMap should create a map from entries', () => {
        const entries = [['a', 1], ['b', 2]];
        const map = createMap(entries);
        expect(map.get('a')).toBe(1);
        expect(map.get('b')).toBe(2);
    });

    test('getMapValue should get the value from the map', () => {
        const map = new Map([['a', 1], ['b', 2]]);
        const value = getMapValue(map, 'a');
        expect(value).toBe(1);
    });

    test('createSet should create a set from values', () => {
        const values = [1, 2, 3, 3];
        const set = createSet(values);
        expect(set.size).toBe(3);
        expect(set.has(1)).toBe(true);
        expect(set.has(4)).toBe(false);
    });

    test('addToSet should add a value to the set', () => {
        const set = new Set([1, 2, 3]);
        addToSet(set, 4);
        expect(set.size).toBe(4);
        expect(set.has(4)).toBe(true);
    });
});
