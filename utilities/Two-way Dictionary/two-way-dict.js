// two-way-dict.js

function createTwoWayDict(dict) {
    return Object.assign(dict, ...Object.entries(dict).map(([key, value]) => ({ [value]: key })));
}


