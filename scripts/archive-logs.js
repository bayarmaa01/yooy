// archive-logs.js
const fs = require('fs');
const path = require('path');

const logsDir = path.join(__dirname, 'logs');
const archiveDir = path.join(__dirname, 'archives');

if (!fs.existsSync(archiveDir)) {
  fs.mkdirSync(archiveDir);
}

fs.readdirSync(logsDir).forEach(file => {
  const oldPath = path.join(logsDir, file);
  const newPath = path.join(archiveDir, file);
  fs.renameSync(oldPath, newPath);
});

console.log('Logs archived successfully');