const express = require('express');
const path = require('path');
const app = express();
const PORT = 3002;

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get('/programs', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'programs.html'));
});

app.get('/scholarship', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'scholarship.html'));
});

app.get('/news', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'news.html'));
});

app.get('/news-detail', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'news-detail.html'));
});

app.get('/resources', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'resources.html'));
});

app.get('/community', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'community.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.listen(PORT, () => {
    console.log(`현송교육문화재단 서버 실행 중: http://localhost:${PORT}`);
});
