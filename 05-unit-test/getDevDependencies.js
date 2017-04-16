const fs = require('fs');

function readFile(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf-8', (error, data) => {
            if(error) {
                reject(error);
            } else {
                resolve(data);
            }
        });
    });
}

function getDevDependencies(path) {
    return readFile(path)
        .then(JSON.parse)
        .then(data => data.devDependencies);
}

module.exports = getDevDependencies;
