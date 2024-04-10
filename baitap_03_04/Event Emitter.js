const EventEmitter = require('events');
const { readFile, writeFile } = require('fs');

// Tạo một đối tượng EventEmitter mới
const eventEmitter = new EventEmitter();

// Đăng ký một bộ lắng nghe cho sự kiện "readFileFirst"
eventEmitter.on('readFileFirst', () => {
  readFile('./baitap_03_04/content/first.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    // Kích hoạt sự kiện "readFileSecond" và truyền kết quả của tệp tin "first.txt"
    eventEmitter.emit('readFileSecond', result);
  });
});

// Đăng ký một bộ lắng nghe cho sự kiện "readFileSecond"
eventEmitter.on('readFileSecond', (firstData) => {
  readFile('./baitap_03_04/content/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    // Kích hoạt sự kiện "writeResultFile" và truyền kết quả của cả hai tệp tin
    eventEmitter.emit('writeResultFile', firstData, result);
  });
});

// Đăng ký một bộ lắng nghe cho sự kiện "writeResultFile"
eventEmitter.on('writeResultFile', (firstData, secondData) => {
  writeFile(
    './baitap_03_04/content/result-async.txt',
    `Here is the result: ${firstData}, ${secondData}`,
    (err) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log('Done with this task');
    }
  );
});

// Bắt đầu bằng cách kích hoạt sự kiện "readFileFirst"
eventEmitter.emit('readFileFirst');

console.log('Starting next task');
