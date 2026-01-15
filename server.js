const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// 정적 파일 서빙 (css, svg 등)
app.use(express.static(__dirname));

// 라우터
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'about.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'about.html'));
});

app.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});
