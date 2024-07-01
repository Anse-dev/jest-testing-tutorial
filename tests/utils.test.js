const { updateObject, findInArray, mapArray, filterArray } = require('../src/utils');

describe('Utils Functions', () => {
    test('updateObject should update an object property', () => {
        const obj = { a: 1, b: 2 };
        const updatedObj = updateObject(obj, 'b', 3);
        expect(updatedObj).toEqual({ a: 1, b: 3 });
        expect(obj).toEqual({ a: 1, b: 2 });
    });

    test('findInArray should find an element in the array', () => {
        const arr = [1, 2, 3, 4];
        const found = findInArray(arr, num => num === 3);
        expect(found).toBe(3);
    });

    test('mapArray should transform all elements in the array', () => {
        const arr = [1, 2, 3];
        const mapped = mapArray(arr, num => num * 2);
        expect(mapped).toEqual([2, 4, 6]);
    });

    test('filterArray should filter out elements based on the predicate', () => {
        const arr = [1, 2, 3, 4];
        const filtered = filterArray(arr, num => num > 2);
        expect(filtered).toEqual([3, 4]);
    });
});
