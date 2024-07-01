
function createMap(entries) {
    return new Map(entries);
}

function getMapValue(map, key) {
    return map.get(key);
}

function createSet(values) {
    return new Set(values);
}

function addToSet(set, value) {
    set.add(value);
    return set;
}

module.exports = {
    createMap,
    getMapValue,
    createSet,
    addToSet,
};
