const express = require("express");

const app = express();
const PORT = process.env.PORT || 9000;

// /hyunsong/* 경로를 /* 로 rewrite
// app.use('/hyunsong', express.static(__dirname));
app.use("/", express.static(__dirname));

// 루트 경로도 정적 파일 서빙
app.use(express.static(__dirname));

app.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});
