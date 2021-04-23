// delete-empty-objects.js

function deleteEmptyObjects (rows) {
    return rows ? rows.filter((row) => Object.keys(row) && !Object.keys(row).length): [];
}


