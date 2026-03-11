import fs from 'fs';
import https from 'https';

const url = 'https://media1.tenor.com/m/Z6uWofY94KkAAAAd/subaru-natsuki-subaru.gif';
const path = 'c:/Projects/ThyneCSD.github.io/public/subaru.gif';

https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
  if (res.statusCode !== 200) {
    console.error(`Failed to download: ${res.statusCode}`);
    return;
  }
  const file = fs.createWriteStream(path);
  res.pipe(file);
  file.on('finish', () => {
    file.close();
    console.log('Download complete.');
  });
}).on('error', (err) => {
  console.error('Error:', err.message);
});
