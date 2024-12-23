const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

// Menyajikan file statis dari folder 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Path untuk menyimpan jumlah pengunjung
const visitorCountFile = path.join(__dirname, 'visitor-count.txt');

// API untuk menghitung jumlah pengunjung
app.get('/api/visitor-count', (req, res) => {
  fs.readFile(visitorCountFile, 'utf8', (err, data) => {
    if (err) {
      // Jika file tidak ada, buat dengan nilai 1
      fs.writeFile(visitorCountFile, '1', (err) => {
        if (err) throw err;
        res.json({ visitorCount: 1 });
      });
    } else {
      let visitorCount = parseInt(data);
      visitorCount++;
      fs.writeFile(visitorCountFile, visitorCount.toString(), (err) => {
        if (err) throw err;
        res.json({ visitorCount });
      });
    }
  });
});

// Menyajikan file index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Menentukan port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
