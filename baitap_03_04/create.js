const { writeFileSync } = require('fs');

for (let i = 0; i < 100000; i++) {
    writeFileSync('./baitap_03_04/content/bigFile.txt', `baocute`,
        { flag: 'a' }
    );
}