
function updateObject(obj, key, value) {
    return { ...obj, [key]: value };
}

function findInArray(arr, predicate) {
    return arr.find(predicate);
}

function mapArray(arr, transform) {
    return arr.map(transform);
}

function filterArray(arr, predicate) {
    return arr.filter(predicate);
}

module.exports = {
    updateObject,
    findInArray,
    mapArray,
    filterArray,
};
