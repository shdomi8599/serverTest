const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.listen(8080, function () {
    console.log('listening on 8080')
});

app.get('/pet/:id', function (req, res) {
    const p = req.params
    console.log(p)
    const q = req.query
    console.log(q)
    res.send('펫 용품을 쇼핑할 수 있는 페이지입니다.')
});

app.get('/beauty', function (req, res) {
    res.send('뷰티 용품을 쇼핑할 수 있는 페이지입니다.')
})

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
})

app.get('/color/:name', function (req, res) {
    const { name } = req.params
    if (name === 'red') {
        res.json({ 'color': '빨강' });
    } else if (name === 'blue') {
        res.json({ 'color': '파랑' });
    } else if (name === 'yellow') {
        res.json({ 'color': '노랑' });
    } else {
        res.send('알수없음');
    }
})


const ex0 = (req, res, next) => {
    console.log('1번');
    next();
};
const ex1 = (req, res, next) => {
    console.log('2번');
    next();
};
const ex2 = (req, res, next) => {
    console.log('3번');
    res.send('연습');
};

app.get('/exam', [ex0, ex1, ex2]);