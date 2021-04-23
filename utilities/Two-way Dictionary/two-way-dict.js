// two-way-dict.js

function createTwoWayDict(dict) {
    return Object.assign(dict, ...Object.entries(dict).map(([key, value]) => ({ [value]: key })));
}


a = {'key1': 'value1', 'key2': 'value2', 'key3': 'value3'};
a = createTwoWayDict(a);

a['key1']

a['value1']

// Output
// {'key1': 'value1', 'key2': 'value2', 'key3': 'value3', 'value1': 'key1', 'value2': 'key2', 'value3': 'key3'};
// 'value1'
// 'key1'
