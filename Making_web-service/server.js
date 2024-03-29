const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

const MongoClient = require('mongodb').MongoClient;
var db;

app.set('view engine', 'ejs');

MongoClient.connect('mongodb+srv://jeongmok:qwer1234@cluster0.v5rclej.mongodb.net/?retryWrites=true&w=majority', { useUnifiedTopology: true }, function (에러, client) {
    if (에러) return console.log(에러);
    db = client.db('todoapp');

    app.listen(8080, function () {
        console.log('listening on 8080');
    });
});

app.get('/', function (요청, 응답) {
    응답.sendFile(__dirname + '/index.html');
});

app.get('/write', function (요청, 응답) {
    응답.sendFile(__dirname + '/write.html');
});

app.post('/add', function (요청, 응답) {
    응답.send('전송완료');
    db.collection('counter').findOne({ name: '게시물 개수' }, function (에러, 결과) {
        console.log(결과.totalPost);
        var 총게시물개수 = 결과.totalPost;

        db.collection('post').insertOne({ _id: 총게시물개수 + 1, 제목: 요청.body.title, 날짜: 요청.body.date }, function (에러, 결과) {
            console.log('저장완료');
            db.collection('counter').updateOne({ name: '게시물 개수' }, { $inc: { totalPost: 1 } }, function (에러, 결과) {
                if (에러) return console.log(에러);
            });
        });
    });
});

app.get('/list', function (요청, 응답) {
    db.collection('post')
        .find()
        .toArray(function (에러, 결과) {
            console.log(결과);
            응답.render('list.ejs', { posts: 결과 });
        });
});

app.delete('/delete', function (요청, 응답) {
    console.log(요청.body);
    요청.body._id = parseInt(요청.body._id);
    db.collection('post').deleteOne(요청.body, function (에러, 결과) {
        console.log('삭제완료');
    });
    응답.send('삭제완료');
});
